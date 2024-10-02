"""
Given a dataframe with sequences of 3 tic-tac-toe boards, calculates the degree of intention of 
the second move.
"""

import pandas as pd
import csv
import numpy as np
import math
import sys

from player import HumanPlayer, RandomComputerPlayer, SmartComputerPlayer
from game import TicTacToe

level_of_abstraction = 1

# board0 = "[0,1,2,3,4,5,6,7,8]"
# board1 = "[0,1,2,3,X,5,6,7,8]"
# board2 = "[0,1,2,O,X,5,6,7,8]"

#g2
# board0 = "[0,1,2,O,X,5,6,7,8]"
# board1 = "[0,1,X,O,X,5,6,7,8]"
# board2 = "[0,1,X,O,X,5,O,7,8]"

#g3 
# board0 = "[0,1,X,O,X,5,6,7,8]"
# board1 = "[0,1,X,O,X,5,O,7,8]"
# board2 = "[X,1,X,O,X,5,O,7,8]"

#g4
board0 = "[X,1,X,O,O,X,6,O,O]"
board1 = "[X,1,X,O,O,X,X,O,O]"
board2 = "[X,X,X,O,O,X,X,O,O]"

def stringtoarray(list):
    newarray = []
    for element in list:
        try:
            newarray.append(int(element))
        except ValueError:
            newarray.append(element)
    return newarray

def find_diff(list1, list2):
    differing_index = None
    differing_element = None
    for i in range(len(list1)):
        if list2[i] != list1[i]:
            differing_index = i
            differing_element = list2[i]
            break
    return differing_index, differing_element

def make_alternatives(board0_array, board1_array, board2_array):
    board01_move = find_diff(board0_array, board1_array) # (4, 'X')
    board12_move = find_diff(board1_array, board2_array)

    no_of_alts = sum(isinstance(element, int) for element in board1_array)
    alt_dict = {}
    step = 0
    name_count = 0
    for i in range(9):
        temp_name = f"alt_{step}"
        placeholder = board0_array.copy()
        if step != board01_move[0] and type(placeholder[step]) == int:
            placeholder[step] = board01_move[1]
            alt_dict[temp_name] = placeholder
        step += 1

    return alt_dict

def original_utility(board0_array, board1_array):
    current_player = find_diff(board0_array, board1_array)[1]
    x_player = SmartComputerPlayer('X')
    o_player = SmartComputerPlayer('O')
    t = TicTacToe()

    count = 0
    for marker in board0_array:
        if type(marker) == str:
            t.make_move(count, marker)
        count += 1

    if current_player == 'O':
        # utility_dict = {key: -value for key, value in x_player.get_move(t)[1].items()}
        utility_dict = o_player.get_move(t)[1]
    else:
        utility_dict = x_player.get_move(t)[1]

    if sum(1 for item in board0_array if isinstance(item, int))==9:
        utility_dict = {0:1, 1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1}

    return utility_dict


def degree_of_intention(string0, string1, string2):
    array0, array1, array2 = string0.strip("[]").split(","), string1.strip("[]").split(","), string2.strip("[]").split(",")
    board0_array, board1_array, board2_array = stringtoarray(array0), stringtoarray(array1), stringtoarray(array2)
    
    original_move, player = find_diff(board0_array, board1_array)

    original_ut = original_utility(board0_array, board1_array) #utility after first board-state
    print(original_move, player)
    print(original_ut)

    if player == "X":
        num = math.exp(original_ut[original_move])
    else:
        num = math.exp(-original_ut[original_move])

    denom = 0
    if player=="X" and any(value > 0 for value in original_ut.values()):
        for item in original_ut.keys():
            denom = denom + math.exp(original_ut[item]) if original_ut[item]>0 else denom
    elif player=="O" and any(value < 0 for value in original_ut.values()):
        for item in original_ut.keys():
            denom = denom + math.exp(-original_ut[item]) if original_ut[item]<0 else denom
    elif original_ut[original_move]==0:
        for item in original_ut.keys():
            denom = denom + math.exp(original_ut[item]) if original_ut[item]==0 else denom
    else:
        return 0
 
    
    if denom==0:
        return 0

    doi = num/denom

    return doi

def process_boards(row):
    try:
        boards = row['Actual Item'].split(' → ')
        for i, board in enumerate(boards):
            board_name = f'board{i}'
            row[board_name] = board.strip()

        row['DOI'] = degree_of_intention(row['board0'], row['board1'], row['board2'])
    except Exception as e:
        # If an error occurs, return the original row without modifications
        print(f"Error occurred for row: {row}\nError message: {str(e)}")
        sys.exit()
        # return row

    return row

# print(degree_of_intention(board0, board1, board2))

df = pd.read_csv("stimuli_with_pos.csv")
df = df.apply(process_boards, axis=1, result_type='expand')
df.to_csv("stimuli_with_pos_doi.csv")