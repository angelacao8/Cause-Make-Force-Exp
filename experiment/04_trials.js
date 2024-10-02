

const answer = "images/example2_option3.png";
const string_two = "images/example2_option1.png";
const string_three = "images/example2_option2.png";
const string_four = "images/example2_option4.png";

const strings = [answer, string_two, string_three, string_four];

//gives you random index in the strings array
var random_int = Math.floor(Math.random() * strings.length);

const vars = ["", "", "", ""];

for (let i = 0; i<4; i++) {
  vars[i] = strings[random_int];
  random_int++;
  random_int = random_int%4;
}

const trial_info = { slider_rating: [
      [
        //1_0_56.png
        {
          question: `Player X <b>caused</b> Player O to place at location 4.`,
          picture: "images/current_stimuli/1_0_56.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 4.`,
            picture: "images/current_stimuli/1_0_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 4.`,
            picture: "images/current_stimuli/1_0_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_0_56_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 4.`,
          picture: "images/current_stimuli/1_0_56_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 4.`,
            picture: "images/current_stimuli/1_0_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 4.`,
            picture: "images/current_stimuli/1_0_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_0_78.png
        {
          question: `Player X <b>caused</b> Player O to place at location 5.`,
          picture: "images/current_stimuli/1_0_78.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 5.`,
            picture: "images/current_stimuli/1_0_78.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 5.`,
            picture: "images/current_stimuli/1_0_78.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_0_78_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 7.`,
          picture: "images/current_stimuli/1_0_78_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 7.`,
            picture: "images/current_stimuli/1_0_78_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 7.`,
            picture: "images/current_stimuli/1_0_78_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_1_78.png
        {
          question: `Player X <b>caused</b> Player O to place at location 7.`,
          picture: "images/current_stimuli/1_1_78.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 7.`,
            picture: "images/current_stimuli/1_1_78.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 7.`,
            picture: "images/current_stimuli/1_1_78.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_1_78_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 3.`,
          picture: "images/current_stimuli/1_1_78_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 3.`,
            picture: "images/current_stimuli/1_1_78_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 3.`,
            picture: "images/current_stimuli/1_1_78_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_1_89.png
        {
          question: `Player O <b>caused</b> Player X to place at location 8.`,
          picture: "images/current_stimuli/1_1_89.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 8.`,
            picture: "images/current_stimuli/1_1_89.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 8.`,
            picture: "images/current_stimuli/1_1_89.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_1_89_r.png
        {
          question: `Player O <b>caused</b> Player X to place at location 6.`,
          picture: "images/current_stimuli/1_1_89_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 6.`,
            picture: "images/current_stimuli/1_1_89_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 6.`,
            picture: "images/current_stimuli/1_1_89_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_5_56.png
        {
          question: `Player X <b>caused</b> Player O to place at location 6.`,
          picture: "images/current_stimuli/1_5_56.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 6.`,
            picture: "images/current_stimuli/1_5_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 6.`,
            picture: "images/current_stimuli/1_5_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_5_56_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 0.`,
          picture: "images/current_stimuli/1_5_56_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 0.`,
            picture: "images/current_stimuli/1_5_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 0.`,
            picture: "images/current_stimuli/1_5_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      // [
      //   //1_5_78.png
      //   {
      //     question: `Player X <b>caused</b> Player O to place at location 1.`,
      //     picture: "images/current_stimuli/1_5_78.png",
      //     optionleft: 'Not confident',
      //     optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player X <b>made</b> Player O place at location 1.`,
      //       picture: "images/current_stimuli/1_5_78.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player X <b>forced</b> Player O to place at location 1.`,
      //       picture: "images/current_stimuli/1_5_78.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      // ],
      // [
      //   //1_5_78_r.png
      //   {
      //     question: `Player X <b>caused</b> Player O to place at location 5.`,
      //     picture: "images/current_stimuli/1_5_78_r.png",
      //     optionleft: 'Not confident',
      //     optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player X <b>made</b> Player O place at location 5.`,
      //       picture: "images/current_stimuli/1_5_78_r.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player X <b>forced</b> Player O to place at location 5.`,
      //       picture: "images/current_stimuli/1_5_78_r.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      // ],
      [
        //1_25_89.png
        {
          question: `Player O <b>caused</b> Player X to place at location 6.`,
          picture: "images/current_stimuli/1_25_89.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 6.`,
            picture: "images/current_stimuli/1_25_89.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 6.`,
            picture: "images/current_stimuli/1_25_89.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_25_89_r.png
        {
          question: `Player O <b>caused</b> Player X to place at location 0.`,
          picture: "images/current_stimuli/1_25_89_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 0.`,
            picture: "images/current_stimuli/1_25_89_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 0.`,
            picture: "images/current_stimuli/1_25_89_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_75_56.png
        {
          question: `Player X <b>caused</b> Player O to place at location 7.`,
          picture: "images/current_stimuli/1_75_56.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 7.`,
            picture: "images/current_stimuli/1_75_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 7.`,
            picture: "images/current_stimuli/1_75_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_75_56_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 3.`,
          picture: "images/current_stimuli/1_75_56_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 3.`,
            picture: "images/current_stimuli/1_75_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 3.`,
            picture: "images/current_stimuli/1_75_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_75_78.png
        {
          question: `Player X <b>caused</b> Player O to place at location 2.`,
          picture: "images/current_stimuli/1_75_78.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 2.`,
            picture: "images/current_stimuli/1_75_78.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 2.`,
            picture: "images/current_stimuli/1_75_78.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_75_78_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 8.`,
          picture: "images/current_stimuli/1_75_78_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 8.`,
            picture: "images/current_stimuli/1_75_78_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 8.`,
            picture: "images/current_stimuli/1_75_78_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_75_89.png
        {
          question: `Player O <b>caused</b> Player X to place at location 5.`,
          picture: "images/current_stimuli/1_75_89.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 5.`,
            picture: "images/current_stimuli/1_75_89.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 5.`,
            picture: "images/current_stimuli/1_75_89.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //1_75_89_r.png
        {
          question: `Player O <b>caused</b> Player X to place at location 7.`,
          picture: "images/current_stimuli/1_75_89_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 7.`,
            picture: "images/current_stimuli/1_75_89_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 7.`,
            picture: "images/current_stimuli/1_75_89_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      // [
      //   //2_0_78.png
      //   {
      //     question: `Player X <b>caused</b> Player O to place at location 4.`,
      //     picture: "images/current_stimuli/2_0_78.png",
      //     optionleft: 'Not confident',
      //     optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player X <b>made</b> Player O place at location 4.`,
      //       picture: "images/current_stimuli/2_0_78.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player X <b>forced</b> Player O to place at location 4.`,
      //       picture: "images/current_stimuli/2_0_78.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      // ],
      // [
      //   //2_0_78_r.png
      //   {
      //     question: `Player X <b>caused</b> Player O to place at location 4.`,
      //     picture: "images/current_stimuli/2_0_78_r.png",
      //     optionleft: 'Not confident',
      //     optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player X <b>made</b> Player O place at location 4.`,
      //       picture: "images/current_stimuli/2_0_78_r.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player X <b>forced</b> Player O to place at location 4.`,
      //       picture: "images/current_stimuli/2_0_78_r.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      // ],
      [
        //2_5_34.png
        {
          question: `Player X <b>caused</b> Player O to place at location 5.`,
          picture: "images/current_stimuli/2_5_34.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 5.`,
            picture: "images/current_stimuli/2_5_34.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 5.`,
            picture: "images/current_stimuli/2_5_34.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //2_5_34_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 7.`,
          picture: "images/current_stimuli/2_5_34_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 7.`,
            picture: "images/current_stimuli/2_5_34_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 7.`,
            picture: "images/current_stimuli/2_5_34_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //2_5_45.png
        {
          question: `Player O <b>caused</b> Player X to place at location 3.`,
          picture: "images/current_stimuli/2_5_45.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 3.`,
            picture: "images/current_stimuli/2_5_45.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 3.`,
            picture: "images/current_stimuli/2_5_45.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //2_5_45_r.png
        {
          question: `Player O <b>caused</b> Player X to place at location 1.`,
          picture: "images/current_stimuli/2_5_45_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 1.`,
            picture: "images/current_stimuli/2_5_45_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 1.`,
            picture: "images/current_stimuli/2_5_45_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //2_5_56.png
        {
          question: `Player X <b>caused</b> Player O to place at location 1.`,
          picture: "images/current_stimuli/2_5_56.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 1.`,
            picture: "images/current_stimuli/2_5_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 1.`,
            picture: "images/current_stimuli/2_5_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //2_5_56_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 5.`,
          picture: "images/current_stimuli/2_5_56_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 5.`,
            picture: "images/current_stimuli/2_5_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 5.`,
            picture: "images/current_stimuli/2_5_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //2_5_78.png
        {
          question: `Player X <b>caused</b> Player O to place at location 7.`,
          picture: "images/current_stimuli/2_5_78.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 7.`,
            picture: "images/current_stimuli/2_5_78.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 7.`,
            picture: "images/current_stimuli/2_5_78.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //2_5_78_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 3.`,
          picture: "images/current_stimuli/2_5_78_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 3.`,
            picture: "images/current_stimuli/2_5_78_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 3.`,
            picture: "images/current_stimuli/2_5_78_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //2_25_45.png
        {
          question: `Player O <b>caused</b> Player X to place at location 2.`,
          picture: "images/current_stimuli/2_25_45.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 2.`,
            picture: "images/current_stimuli/2_25_45.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 2.`,
            picture: "images/current_stimuli/2_25_45.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //2_25_45_r.png
        {
          question: `Player O <b>caused</b> Player X to place at location 8.`,
          picture: "images/current_stimuli/2_25_45_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 8.`,
            picture: "images/current_stimuli/2_25_45_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 8.`,
            picture: "images/current_stimuli/2_25_45_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //2_25_78.png
        {
          question: `Player X <b>caused</b> Player O to place at location 1.`,
          picture: "images/current_stimuli/2_25_78.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 1.`,
            picture: "images/current_stimuli/2_25_78.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 1.`,
            picture: "images/current_stimuli/2_25_78.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //2_25_78_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 5.`,
          picture: "images/current_stimuli/2_25_78_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 5.`,
            picture: "images/current_stimuli/2_25_78_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 5.`,
            picture: "images/current_stimuli/2_25_78_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //2_75_78.png
        {
          question: `Player X <b>caused</b> Player O to place at location 6.`,
          picture: "images/current_stimuli/2_75_78.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 6.`,
            picture: "images/current_stimuli/2_75_78.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 6.`,
            picture: "images/current_stimuli/2_75_78.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //2_75_78_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 0.`,
          picture: "images/current_stimuli/2_75_78_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 0.`,
            picture: "images/current_stimuli/2_75_78_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 0.`,
            picture: "images/current_stimuli/2_75_78_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      // [
      //   //3_0_67.png
      //   {
      //     question: `Player O <b>caused</b> Player X to place at location 6.`,
      //     picture: "images/current_stimuli/3_0_67.png",
      //     optionleft: 'Not confident',
      //     optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player O <b>made</b> Player X place at location 6.`,
      //       picture: "images/current_stimuli/3_0_67.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player O <b>forced</b> Player X to place at location 6.`,
      //       picture: "images/current_stimuli/3_0_67.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      // ],
      // [
      //   //3_0_67_r.png
      //   {
      //     question: `Player O <b>caused</b> Player X to place at location 0.`,
      //     picture: "images/current_stimuli/3_0_67_r.png",
      //     optionleft: 'Not confident',
      //     optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player O <b>made</b> Player X place at location 0.`,
      //       picture: "images/current_stimuli/3_0_67_r.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player O <b>forced</b> Player X to place at location 0.`,
      //       picture: "images/current_stimuli/3_0_67_r.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      // ],
      [
        //3_5_56.png
        {
          question: `Player X <b>caused</b> Player O to place at location 6.`,
          picture: "images/current_stimuli/3_5_56.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 6.`,
            picture: "images/current_stimuli/3_5_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 6.`,
            picture: "images/current_stimuli/3_5_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //3_5_56_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 0.`,
          picture: "images/current_stimuli/3_5_56_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 0.`,
            picture: "images/current_stimuli/3_5_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 0.`,
            picture: "images/current_stimuli/3_5_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //3_25_67.png
        {
          question: `Player O <b>caused</b> Player X to place at location 8.`,
          picture: "images/current_stimuli/3_25_67.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 8.`,
            picture: "images/current_stimuli/3_25_67.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 8.`,
            picture: "images/current_stimuli/3_25_67.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //3_25_67_r.png
        {
          question: `Player O <b>caused</b> Player X to place at location 6.`,
          picture: "images/current_stimuli/3_25_67_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 6.`,
            picture: "images/current_stimuli/3_25_67_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 6.`,
            picture: "images/current_stimuli/3_25_67_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //3_75_56.png
        {
          question: `Player X <b>caused</b> Player O to place at location 5.`,
          picture: "images/current_stimuli/3_75_56.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 5.`,
            picture: "images/current_stimuli/3_75_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 5.`,
            picture: "images/current_stimuli/3_75_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //3_75_56_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 7.`,
          picture: "images/current_stimuli/3_75_56_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 7.`,
            picture: "images/current_stimuli/3_75_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 7.`,
            picture: "images/current_stimuli/3_75_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      // [
      //   //3_75_67.png
      //   {
      //     question: `Player O <b>caused</b> Player X to place at location 7.`,
      //     picture: "images/current_stimuli/3_75_67.png",
      //     optionleft: 'Not confident',
      //     optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player O <b>made</b> Player X place at location 7.`,
      //       picture: "images/current_stimuli/3_75_67.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player O <b>forced</b> Player X to place at location 7.`,
      //       picture: "images/current_stimuli/3_75_67.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      // ],
      // [
      //   //3_75_67_r.png
      //   {
      //     question: `Player O <b>caused</b> Player X to place at location 3.`,
      //     picture: "images/current_stimuli/3_75_67_r.png",
      //     optionleft: 'Not confident',
      //     optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player O <b>made</b> Player X place at location 3.`,
      //       picture: "images/current_stimuli/3_75_67_r.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player O <b>forced</b> Player X to place at location 3.`,
      //       picture: "images/current_stimuli/3_75_67_r.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      // ],
      [
        //4_0_23.png
        {
          question: `Player O <b>caused</b> Player X to place at location 4.`,
          picture: "images/current_stimuli/4_0_23.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 4.`,
            picture: "images/current_stimuli/4_0_23.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 4.`,
            picture: "images/current_stimuli/4_0_23.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //4_0_23_r.png
        {
          question: `Player O <b>caused</b> Player X to place at location 4.`,
          picture: "images/current_stimuli/4_0_23_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 4.`,
            picture: "images/current_stimuli/4_0_23_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 4.`,
            picture: "images/current_stimuli/4_0_23_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //4_5_45.png
        {
          question: `Player O <b>caused</b> Player X to place at location 5.`,
          picture: "images/current_stimuli/4_5_45.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 5.`,
            picture: "images/current_stimuli/4_5_45.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 5.`,
            picture: "images/current_stimuli/4_5_45.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //4_5_45_r.png
        {
          question: `Player O <b>caused</b> Player X to place at location 7.`,
          picture: "images/current_stimuli/4_5_45_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 7.`,
            picture: "images/current_stimuli/4_5_45_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 7.`,
            picture: "images/current_stimuli/4_5_45_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //4_25_56.png
        {
          question: `Player X <b>caused</b> Player O to place at location 7.`,
          picture: "images/current_stimuli/4_25_56.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 7.`,
            picture: "images/current_stimuli/4_25_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 7.`,
            picture: "images/current_stimuli/4_25_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //4_25_56_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 3.`,
          picture: "images/current_stimuli/4_25_56_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 3.`,
            picture: "images/current_stimuli/4_25_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 3.`,
            picture: "images/current_stimuli/4_25_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //4_75_56.png
        {
          question: `Player X <b>caused</b> Player O to place at location 8.`,
          picture: "images/current_stimuli/4_75_56.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 8.`,
            picture: "images/current_stimuli/4_75_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 8.`,
            picture: "images/current_stimuli/4_75_56.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //4_75_56_r.png
        {
          question: `Player X <b>caused</b> Player O to place at location 6.`,
          picture: "images/current_stimuli/4_75_56_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player X <b>made</b> Player O place at location 6.`,
            picture: "images/current_stimuli/4_75_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player X <b>forced</b> Player O to place at location 6.`,
            picture: "images/current_stimuli/4_75_56_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //5_0_45.png
        {
          question: `Player O <b>caused</b> Player X to place at location 0.`,
          picture: "images/current_stimuli/5_0_45.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 0.`,
            picture: "images/current_stimuli/5_0_45.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 0.`,
            picture: "images/current_stimuli/5_0_45.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //5_0_45_r.png
        {
          question: `Player O <b>caused</b> Player X to place at location 2.`,
          picture: "images/current_stimuli/5_0_45_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 2.`,
            picture: "images/current_stimuli/5_0_45_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 2.`,
            picture: "images/current_stimuli/5_0_45_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      // [
      //   //5_25_34.png
      //   {
      //     question: `Player X <b>caused</b> Player O to place at location 5.`,
      //     picture: "images/current_stimuli/5_25_34.png",
      //     optionleft: 'Not confident',
      //     optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player X <b>made</b> Player O place at location 5.`,
      //       picture: "images/current_stimuli/5_25_34.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player X <b>forced</b> Player O to place at location 5.`,
      //       picture: "images/current_stimuli/5_25_34.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      // ],
      // [
      //   //5_25_34_r.png
      //   {
      //     question: `Player X <b>caused</b> Player O to place at location 7.`,
      //     picture: "images/current_stimuli/5_25_34_r.png",
      //     optionleft: 'Not confident',
      //     optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player X <b>made</b> Player O place at location 7.`,
      //       picture: "images/current_stimuli/5_25_34_r.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      //   {
      //       question: `Player X <b>forced</b> Player O to place at location 7.`,
      //       picture: "images/current_stimuli/5_25_34_r.png",
      //       optionleft: 'Not confident',
      //       optionright: 'Very confident'
      //   },
      // ],
      [
        //5_25_45.png
        {
          question: `Player O <b>caused</b> Player X to place at location 2.`,
          picture: "images/current_stimuli/5_25_45.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 2.`,
            picture: "images/current_stimuli/5_25_45.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 2.`,
            picture: "images/current_stimuli/5_25_45.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],
      [
        //5_25_45_r.png
        {
          question: `Player O <b>caused</b> Player X to place at location 8.`,
          picture: "images/current_stimuli/5_25_45_r.png",
          optionleft: 'Not confident',
          optionright: 'Very confident'
        },
        {
            question: `Player O <b>made</b> Player X place at location 8.`,
            picture: "images/current_stimuli/5_25_45_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
        {
            question: `Player O <b>forced</b> Player X to place at location 8.`,
            picture: "images/current_stimuli/5_25_45_r.png",
            optionleft: 'Not confident',
            optionright: 'Very confident'
        },
      ],

    ],
    sentence_choice_trials: [
        {
            question: "Given the game state below, what is the most likely action that O will take next?",
            picture: "images/example2.png",
            option1: vars[0],
            option2: vars[1],
            option3: vars[2],
            option4: vars[3],
            answer: answer
        }
    ],
    sentence_choice_trials2: [
        {
            question: "Given the game state below, what is the most likely action that O will take next?",
            picture: "images/current_stimuli/attention_pro.png",
            picture2: "images/current_stimuli/attention_baby.png",
            option1: "The players of <i>X</i> and <i>O</i> in this game are professional tic-tac-toe players.",        
            option2: "The players of <i>X</i> and <i>O</i> in this game are pre-school students.",        
            answer: 50
        }
    ]
  };

