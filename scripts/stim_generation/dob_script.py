"""
Given a dataframe with sequences of 3 tic-tac-toe boards, calculates the Degree of Blameworthiness (DOB) 
as defined by xxx of the second move in for the third move.
"""

import pandas as pd
import csv
import numpy as np
import math
import sys
import heapq
import random

from player import HumanPlayer, RandomComputerPlayer, SmartComputerPlayer
from game import TicTacToe

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

# Now, I want to make the alternatives to board_1
def make_alternatives(board0_array, board1_array, board2_array):
    board01_move = find_diff(board0_array, board1_array) # (4, 'X')
    board12_move = find_diff(board1_array, board2_array)

    no_of_alts = sum(isinstance(element, int) for element in board0_array)
    alt_dict = {}
    step = 0
    name_count = 0
    for i in range(no_of_alts):
        temp_name = f"alt_{name_count}"
        placeholder = board0_array.copy()
        if step != board01_move[0] and type(placeholder[step]) == int:
            placeholder[step] = board01_move[1]
            alt_dict[temp_name] = placeholder
            name_count += 1
        step += 1

    return alt_dict

def get_utility_dists(board1_array, board2_array, alternatives):
    alt_utility_dists = {}
    for alt in alternatives.keys():
        x_player = SmartComputerPlayer('X')
        o_player = SmartComputerPlayer('O')
        current_player = find_diff(board1_array, board2_array)[1]
        t = TicTacToe()

        count = 0
        for marker in alternatives[alt]:
            if type(marker) == str:
                t.make_move(count, marker)
            count += 1

        if current_player == 'O':
            utility_dict = o_player.get_move(t)[1]
        else:
            utility_dict = x_player.get_move(t)[1]

        alt_utility_dists[alt] = utility_dict

    return alt_utility_dists

def special_softmax(dictionary):
    items = list(dictionary.items()) # Convert dictionary to a list of (key, value) tuples
    utilities = [item[1] for item in items] # Extract the utilities (values) from the dictionary
    # print(utilities)
    max_utility = max(utilities) # Find the maximum utility value
    max_count = utilities.count(max_utility) # Count the number of moves with the maximum utility
    probabilities = []

    for key, utility in items:
        if utility == max_utility: # Assign 80% likelihood to the moves with the maximum utility
            prob = 0.8 / max_count
        else: # Assign 20% divided by the number of other moves to the rest
            prob = 0.2 / (len(items) - max_count)
        probabilities.append(prob)

    probabilities = np.exp(probabilities) / np.sum(np.exp(probabilities))  # Apply the softmax function to the probabilities
    softmax_dict = dict(zip(dictionary.keys(), probabilities))  # Create a new dictionary with the softmax probabilities

    return softmax_dict

def utilities_and_probs(utility_dists, softmaxed_dists):
    big_dict = {}
    for key in utility_dists.keys():
        big_dict[key] = {}
        for inner_key in utility_dists[key]:
            big_dict[key][inner_key] = {"utility": utility_dists[key][inner_key], "probability": softmaxed_dists[key][inner_key]}
    
    return big_dict

def difference(combined_dict, caused_move):
    diff = 0
    # new_dict stores the probability of selecting the caused_move given an game setting
    new_dict = {}
    for alt in combined_dict.keys():
        try:
            new_dict[alt] = combined_dict[alt][caused_move]['probability']
        except:
            pass
    max_setting = max(new_dict, key=lambda k: new_dict[k])
    second_max = heapq.nlargest(2, new_dict.values())[1]
    second_max_key = [key for key, value in new_dict.items() if value == second_max]
    if max_setting == "original":
        if type(second_max_key) == list:
            diff = new_dict['original'] - new_dict[second_max_key[0]]
        else:
            diff = new_dict['original'] - new_dict[second_max_key]
    return diff

def cost(combined_dict, caused_move, board0_array, board1_array):
    sum = 0
    original_utilities = combined_dict['original']
    # print(original_utilities)
    actual_move_utility = original_utilities[caused_move]['utility']
    sum = 0
    for key in original_utilities.keys():
        diff = original_utilities[key]['utility'] - actual_move_utility
        new_weight = diff * original_utilities[key]['probability']
        sum = sum + new_weight
    return sum

def degree_of_blameworthiness(string0, string1, string2, n_var):
    array0, array1, array2 = string0.strip("[]").split(","), string1.strip("[]").split(","), string2.strip("[]").split(",")
    board0_array, board1_array, board2_array = stringtoarray(array0), stringtoarray(array1), stringtoarray(array2)

    alternatives = make_alternatives(board0_array, board1_array, board2_array)
    alternatives['original'] = board1_array #Add original back to 'alternatives'

    utility_dists = get_utility_dists(board1_array, board2_array, alternatives)
    softmaxed_dists = {}
    utility_dists = {k: v for k, v in utility_dists.items() if v}
    for item in utility_dists.keys():
        softmaxed_dists[item] = special_softmax(utility_dists[item])

    combined_dict = utilities_and_probs(utility_dists, softmaxed_dists)
    caused_move = find_diff(board1_array, board2_array)[0]
    dob_diff = difference(combined_dict, caused_move)
    dob_cost = cost(combined_dict, caused_move, board0_array, board1_array)

    dob = dob_diff * ((n_var - dob_cost) / n_var)

    return dob

def process_boards(row):
    try:
        boards = row['Actual Item'].split(' → ')
        for i, board in enumerate(boards):
            board_name = f'board{i}'
            row[board_name] = board.strip()

        # Call probability_of_sufficiency function with the board strings
        if row['Outcome desirability for B'] == 1:
            row['DOB'] = degree_of_blameworthiness(row['board0'], row['board1'], row['board2'], 3)
        else:
            row['DOB'] = None
    except Exception as e:
        # If an error occurs, return the original row without modifications
        print(f"Error occurred for row: {row}\nError message: {str(e)}")
        # sys.exit()
        return row

    return row

board0 = "[0,1,2,3,4,5,6,7,8]"
board1 = "[0,1,2,3,X,5,6,7,8]"
board2 = "[0,1,2,O,X,5,6,7,8]"


# print(degree_of_blameworthiness(board0, board1, board2, 3))

df = pd.read_csv("stimuli_with_pos.csv")
df = df.apply(process_boards, axis=1, result_type='expand')
df.to_csv("stimuli_with_pos_dob.csv")