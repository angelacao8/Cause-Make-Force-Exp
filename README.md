# *Cause*, *Make*, and *Force* as Graded Causatives

This repository contains the experiments, data, analyses, and figures for the paper ["*Cause*, *Make*, and *Force* as Graded Causatives"](https://lingbuzz.net/lingbuzz/008463) by Angela Cao (acao9@ur.rochester.edu), Aaron Steven White, and Daniel Lassiter.

## Abstract
We investigate the semantics of the causal verbs *cause*, *make*, and *force* as used in the construction X {caused/made/forced} Y (to) Z. The predominant approach to analyzing verbs of causing has been to argue that they convey some version of SUFFICIENCY, but it has also been suggested that INTENTION or possible ALTERNATIVES may also factor into the semantics of the verbs. Using sequences of tic-tac-toe states as experimental stimuli, we measure the three possible contributing factors in each stimuli and ask participants whether each verb is appropriate for describing the sequence. We find experimental support for a differentiating semantics of these verbs, in which no single predictor is the sole factor in when each verb is appropriate.

## Demo
You can see a demo of the experiment [here](https://monumental-boba-13997b.netlify.app/).

## Repo structure
```
.
├── data
├── experiment
└── scripts
    ├── analysis
    └── stim_generation 
        └── tic-tac-toe_sim
```

### data
- Preprocessed data collected from the experiment reported in the paper (worker IDs are replaced with a unique number)

### experiment

- Experimental backend for our binary-choice experiment, using [_magpie](https://magpie-ea.github.io/magpie-site/). It was hosted using [Netlifly](https://app.netlify.com/), with the backend hosted on [Heroku](https://www.heroku.com/).

### scripts

#### analysis  

- The R script used to analyze our preprocessed data.

#### stim_generation

- The code used to measure SUF, INT, and ALT off sequences of one-dimensionalized tic-tac-toe game sequences.

##### tic-tac-toe_sim

- The code used to simulate tic-tac-toe games, which is based on a modified form of Kylie Ying's [implementation](https://github.com/kying18/tic-tac-toe/tree/master).



