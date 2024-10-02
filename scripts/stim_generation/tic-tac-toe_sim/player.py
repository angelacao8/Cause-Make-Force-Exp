"""
Tic-Tac-Toe players using inheritance implementation by Kylie Ying (https://github.com/kying18/tic-tac-toe/tree/master)

Edited by Angela Cao during 5/23
"""

import math
import random


class Player():
    def __init__(self, letter):
        self.letter = letter

    def get_move(self, game):
        pass


class HumanPlayer(Player):
    def __init__(self, letter):
        super().__init__(letter)

    def get_move(self, game):
        valid_square = False
        val = None
        while not valid_square:
            square = input(self.letter + '\'s turn. Input move (0-9): ')
            try:
                val = int(square)
                if val not in game.available_moves():
                    raise ValueError
                valid_square = True
            except ValueError:
                print('Invalid square. Try again.')
        return val


class RandomComputerPlayer(Player):
    def __init__(self, letter):
        super().__init__(letter)

    def get_move(self, game):
        square = random.choice(game.available_moves())
        return square


class SmartComputerPlayer(Player):
    def __init__(self, letter):
        super().__init__(letter)

    def get_move(self, game):
        if len(game.available_moves()) == 9:
            square = random.choice(game.available_moves())
            other_scores = None
        else:
            square_temp, other_scores = self.minimax(game, self.letter)
            # print("other_scores = " + str(other_scores))
            square = square_temp['position']
        return square, other_scores

    def minimax(self, state, player):
        max_player = self.letter
        other_player = 'O' if player == 'X' else 'X'

        if state.current_winner == other_player:
            return {'position': None, 'score': 1 * (state.num_empty_squares() + 1) if other_player == max_player else -1 * (state.num_empty_squares() + 1)}, {}

        elif not state.empty_squares():
            return {'position': None, 'score': 0}, {}

        if player == max_player:
            best = {'position': None, 'score': -math.inf}  # each score should maximize
        else:
            best = {'position': None, 'score': math.inf}  # each score should minimize

        moves = {}  # Dictionary to store all possible moves and their scores

        for possible_move in state.available_moves():
            state.make_move(possible_move, player)
            sim_score, _ = self.minimax(state, other_player)  # Modified line to discard the second value

            # undo move
            state.board[possible_move] = ' '
            state.current_winner = None
            sim_score['position'] = possible_move  # this represents the optimal next move

            if player == max_player:
                if sim_score['score'] > best['score']:
                    best = sim_score
                moves[possible_move] = sim_score['score']  # Store the score for each move
            else:
                if sim_score['score'] < best['score']:
                    best = sim_score
                moves[possible_move] = sim_score['score']  # Store the score for each move

        return best, moves
