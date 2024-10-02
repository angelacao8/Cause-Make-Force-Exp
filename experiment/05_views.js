// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

var answer_type = "binary";
//scale, binary, or both


// alt_key is a list that this is used for total number of pages
var alt_key = [];

for (let i = 0; i < 50; i++) {
  alt_key.push(i);
}

alt_key = _.shuffle(alt_key);

var player_type = ["babies", "pre-school students", "middle-school students", "college students", "professional tic-tac-toe players"];
player_type = _.shuffle(player_type);


// In the post test questionnaire you can ask your participants addtional questions
const prolific_id = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'prolific_id',
  title: '',
  text: 'Please enter your Prolific ID to continue.'
},
{
  answer_container_generator: function(config, CT) {
    const quest = magpieUtils.view.fill_defaults_post_test(config);
    return `<form>
                <script>
                function updateProlificID() {
                  $("#next").removeClass("magpie-nodisplay");
                }
                </script>
                <p class='magpie-view-text'>
                    <label for="prolific_id" name="prolific_id_text">Prolific ID:<br /></label>
                    <input type="text" id="prolific_id" oninput='updateProlificID()'/>
                    </p>
                </p>

                <button id="next" class='magpie-view-button magpie-nodisplay'>${config.button}</button>

        </form>`
},
      handle_response_function: function (config, CT, magpie, answer_container_generator, startingTime) {
        $(".magpie-view").append(answer_container_generator(config, CT));

        $("#next").on("click", function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            magpie.global_data.prolificid = $("#prolific_id").val();
            magpie.global_data.endTime = Date.now();
            magpie.global_data.timeSpent =
                (magpie.global_data.endTime -
                    magpie.global_data.startTime) /
                60000;

            // moves to the next view
            magpie.findNextView();
        },
        )
    },
  }
);

const choose_type = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'choose_type',
  data: trial_info.sentence_choice_trials,
  buttonText: 'Start survey!',
  text: `<h1 id="contexttitle2"> What is your Prolific ID?</h1>`
},
{
      answer_container_generator: function (config, CT) {
       return `
          <p class="center">
          <input type="radio" onclick="" id="bothradio" onchange='updateButtonToBoth()' name="begin" class="h1">
          <label for="bothradio">Both</label>
          </br>
          <input type="radio" onclick="" id="scaleradio" onchange='updateButtonToScale()' name="begin">
          <label for="scaleradio">Scale</label>
          </br>
          <input type="radio" onclick="" id="binaryradio" onchange='updateButtonToBinary()' name="begin">
          <label for="binaryradio">Binary</label>
          </p>
          <div id = "nextbutton">
         <button id='next' class='magpie-view-button magpie-nodisplay'>Next</button>
         </div>

          <script>
          function updateButtonToBoth() {
            answer_type = "both";
            $("#next").removeClass("magpie-nodisplay");
          }
          function updateButtonToBinary() {
            answer_type = "binary";
            $("#next").removeClass("magpie-nodisplay");
          }
          function updateButtonToScale() {
            answer_type = "scale";
            $("#next").removeClass("magpie-nodisplay");
          }
          </script>
               `;
  },
  handle_response_function(config, CT, magpie, answer_container_generator, startingTime) {
    $(".magpie-view").append(answer_container_generator(config, CT));

            $("#next").on("click", function() {
                magpie.findNextView();
            });
    },
  }
);
const instructions3 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions3',
  data: trial_info.sentence_choice_trials,
  buttonText: 'Begin!',
  text: `<h1 id="contexttitle2">  </h1>
  <div id="firstinstructions">
  <h1 id="wronganswer" style="display:none;" class="center">
  <p style="color:red;">
  That is incorrect. Please reread the instructions and try again.
  </p>
  </h1>
  <p style="font-size: 25px">
  In this study, you will be presented with twenty images in total. Each image is <b>a sequence of tic-tac-toe board-states</b> from a game.
  </p>
  <p style="font-size: 25px">
  Recall the rules of tic-tac-toe, which is played on a board like the one below:
  <ol type="1" style="font-size: 27px">
   <li>X always makes the first move.</li>
   <li>X and O alternate turns.</li>
   <li>The game continues until a player is able to win by placing three in a row (including horizontally, vertically, and diagonally).</li>
  </ol>
  </p>
  <div>
  <p style="font-size: 25px">
  Here is an example of what you might see in the survey:
  </p>
  <p>
    <img id="ex-png" src="images/current_stimuli/1_1_89.png" class="center" height = "120px">
  </p>
  </div>
  <p style="font-size: 25px">
  <strong>The numbers in the tic-tac-toe board represent the index of each location. 
  The <span style="color: red;">red</span> X or O indicates the move made at that timestep.</strong>
  </p>
  <p style="font-size: 25px">
  Each sequence of tic-tac-toe boards is paired with a sentence.
  Note that the sentences will <strong>vary</strong>, so it is important to re-read it for each question.
  Your task is to assess how well this sentence describes the depicted game.
  </p>
  </div>`
},
{
      answer_container_generator: function (config, CT) {
       return `
        <p><input type="button" id="initialNext" value="I've finished reading!" onclick="initialButton()" width = "50px" class="center">
        </p>
       <div class='magpie-view-answer-container' id='forcedchoicequestion'>
       <script>
       var forcedchoicequestion = document.getElementById('forcedchoicequestion');
       $("#forcedchoicequestion").css("display", "none");
       </script>
              <p style="font-size: 32px;" class='magpie-view-question'><strong>${config.data[CT].question}</strong></p>

              <img class="center" id="stim-gif2" src="${config.data[CT].picture}">

              <table class="center2">
              <tr>
              <td>
               <input type="radio" onclick="" name="test-radio" id="${config.data[CT].option1}" value="${config.data[CT].option1}">
               <label style="font-size: 22px;">
               <img id="stim-gif3" src="${config.data[CT].option1}" alt="Option 1">
               </label>
              </td>
               <br />
              <td>
               <input type="radio" onclick="" name="test-radio" id="${config.data[CT].option2}" value="${config.data[CT].option2}">
               <label style="font-size: 22px;">
               <img id="stim-gif3" src="${config.data[CT].option2}" alt="Option 2">
               </label>

              </td>
              </tr>

              </br>
              </br>

               <tr class="tr">
              <td>

               <input type="radio" onclick="" name="test-radio" id="${config.data[CT].option3}" value="${config.data[CT].option3}">
               <label style="font-size: 22px;">
               <img id="stim-gif3" src="${config.data[CT].option3}" alt="Option 3">
              </label>

              </td>

               <br />
               <td>
               <input type="radio" onclick="" name="test-radio" id="${config.data[CT].option4}" value="${config.data[CT].option4}">
               <label style="font-size: 22px;">
               <img id="stim-gif3" src="${config.data[CT].option4}" alt="Option 4">
              </label>
              </td>
              </tr>
               </table>

               </div>
               <p><input type="button" id="check" value="Check my answer!" style="display:none" onclick="myFunction()" width = "40px" class="center"></p>
               <div id = "nextbutton">
              <button id='next' class='magpie-view-button magpie-nodisplay'>Next</button>
              </div>
              <p>
              </p>
               <script>
                    var answer2 = "images/example2_option3.png"
                    function initialButton(){
                        var x = document.getElementById('forcedchoicequestion');
                        var y = document.getElementById('check');
                        var z = document.getElementById('firstinstructions');
                        var a = document.getElementById('initialNext');
                        var b = document.getElementById('contexttitle2');
                        var c = document.getElementById('forcedchoicequestion');
                        x.style.display = 'block';
                        y.style.display = 'block';
                        z.style.display = 'none';
                        a.style.display = 'none';
                        b.style.display = 'none';
                    }
                    function myFunction() {
                      var x = document.getElementById('wronganswer');
                      var c = document.getElementById('forcedchoicequestion');
                      var y = document.getElementById('nextbutton');
                      var z = document.getElementById('check');
                      var a = document.getElementById('firstinstructions');
                      var b = document.getElementById('contexttitle2');
                      var d = document.getElementById('initialNext');
                      var response = $("input[name='test-radio']:checked").val();
                      if (response != answer2) {
                        x.style.display = 'block';
                        b.style.display = 'block';
                        a.style.display = 'block';
                        c.style.display = 'none';
                        d.style.display = 'block';
                        z.style.display = 'none';
                        const clear_variable1 = document.getElementById('${config.data[CT].option1}');
                        const clear_variable2 = document.getElementById('${config.data[CT].option2}');
                        const clear_variable3 = document.getElementById('${config.data[CT].option3}');
                        const clear_variable4 = document.getElementById('${config.data[CT].option4}');
                        clear_variable1.checked = false;
                        clear_variable2.checked = false;
                        clear_variable3.checked = false;
                        clear_variable4.checked = false;
                      }
                      else {
                        magpie.findNextView();
                      }
                      }
                </script>
               `;
    },
  handle_response_function: function (config, CT, magpie, answer_container_generator, startingTime) {
      $(".magpie-view").append(answer_container_generator(config, CT));
      const answer2 = "images/example2_option3.png"
      var radios = document.getElementsByName("test-radio");
      var value = ""

      
      $("#check").on("click", function () {
        if ($("input[name='test-radio']:checked").val() == answer2) {
            magpie.findNextView();
        }
        }
        );
    },
    }
);

{/* <br>Please
  only participate once in this series of HITs.<br>Please do <strong>not</strong> participate on a mobile device since
  the page won't display properly.<br></br> */}

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Welcome!',
  text: `
  <p style="color:red;">
  Please do not take this survey using Firefox.
  </p>
  <strong>Nature of the study.</strong> You are invited to participate in a study which involves reading sentences carefully and answering questions about them. 
  Once you finish, we may have also some questions about your experience (e.g., age, language background). 
  Your responses will be recorded. 
  Your session should last for around 7 minutes. 
  You will be given full instructions shortly.
  </br>
  </br>
  <strong>Compensation.</strong> You will be paid 1.20 GBP (or USD equivalent) for your participation in this study.
  </br>
  </br>
  <strong>Risks and benefits.</strong>  There are no known risks of participation in this study. 
  Other than the payment mentioned, there are no tangible benefits to you, however you will be contributing to our knowledge about language.  
  </br>
  </br>
  <strong>Confidentiality and use of data.</strong> All the information we collect during the course of the research will be processed in accordance with Data Protection Law. 
  In order to safeguard your privacy, we will never share personal information (like your name) with anyone outside the research team. 
  Your data will be referred to by a unique participant number rather than by name. 
  Please note that we will temporarily collect your worker ID to prevent repeat participation, however we will never share this information with anyone outside the research team. 
  We will store any personal data (i.e., worker ID) using a password protected, encrypted laptop. 
  The anonymised data collected during this study will be used for research purposes. 
  </br>
  </br>
  <strong>What are my data protection rights?</strong> The University of Edinburgh is a Data Controller for the information you provide.  
  You have the right to access information held about you. 
  Your right of access can be exercised in accordance Data Protection Law. 
  You also have other rights including rights of correction, erasure and objection.  
  For more details, including the right to lodge a complaint with the Information Commissioner’s Office, please visit www.ico.org.uk.  
  Questions, comments and requests about your personal data can also be sent to the University Data Protection Officer at dpo@ed.ac.uk
  </br>
  </br>
  <strong>Voluntary participation and right to withdraw.</strong> Your participation is voluntary, and you may stop at any time and for any reason. 
  If you withdraw from the study during or after data gathering, we will delete your data and there is no penalty or loss of benefits to which you are otherwise entitled. 
  Please note that after 23 August 2023 you will no longer be able to withdraw from the study. 
  If you wish to withdraw after the specified date, we may not be able to delete your anonymised data from e.g. public repositories of research data, but we will be able to delete all of your personal data from our records.
  </br>
  </br>
  If you have any questions about what you’ve just read, please feel free to ask, or contact us later. 
  You can contact us by email at s2327232@ed.ac.uk. 
  This project has been approved by PPLS Ethics committee. 
  If you have questions or comments regarding your rights as a participant, please contact the School Research Convenor at ppls.rec@ed.ac.uk.
  </br>
  </br>
  <strong>By continuing with this task, you consent to the following: </strong>
  <ol>
  <li>I agree to participate in this study.</li>
  <li>I confirm that I have read and understood how my data will be stored and used.</li>
  <li>I understand that I have the right to terminate this session at any point. If I choose to withdraw after completing the study, my data will be deleted at that time.</li>
</ol>

  `,
  buttonText: 'Begin!'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'
},
{
  answer_container_generator: function(config, CT) {
    const quest = magpieUtils.view.fill_defaults_post_test(config);
    return `<form>
                <p class='magpie-view-text'>
                    <label for="age">${quest.age.title}:</label>
                    <input type="number" name="age" min="18" max="110" id="age" />
                </p>
                <p class='magpie-view-text'>
                    <label for="gender" name="gender">Gender:<br /></label>
                    <input type="text" id="gender"/>
                    </p>
                </p>
                <p class='magpie-view-text'>
                    <label for="education">${quest.edu.title}:</label>
                    <select id="education" name="education">
                        <option></option>
                        <option value="${quest.edu.graduated_high_school}">${quest.edu.graduated_high_school}</option>
                        <option value="${quest.edu.graduated_college}">${quest.edu.graduated_college}</option>
                        <option value="${quest.edu.higher_degree}">${quest.edu.higher_degree}</option>
                    </select>
                </p>
                <p class='magpie-view-text'>
                    <label for="languages" name="languages">${quest.langs.title}:<br /><span>${quest.langs.text}</</span></label>
                    <input type="text" id="languages"/>
                </p>
                <p class="magpie-view-text">
                    <label for="comments">${quest.comments.title}</label>
                    <textarea name="comments" id="comments" rows="6" cols="40"></textarea>
                </p>
                <button id="next" class='magpie-view-button'>${config.button}</button>
        </form>`
},
      handle_response_function: function (config, CT, magpie, answer_container_generator, startingTime) {
        $(".magpie-view").append(answer_container_generator(config, CT));

        $("#next").on("click", function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            // magpie.global_data.prolificid = $("#prolific_id").val();
            magpie.global_data.age = $("#age").val();
            magpie.global_data.gender = $("#gender").val();
            magpie.global_data.education = $("#education").val();
            magpie.global_data.languages = $("#languages").val();
            magpie.global_data.comments = $("#comments")
            .val()
            .trim();
            magpie.global_data.endTime = Date.now();
            magpie.global_data.timeSpent =
                (magpie.global_data.endTime -
                    magpie.global_data.startTime) /
                60000;

            // moves to the next view
            magpie.findNextView();
        },
        )
    },
  }
);

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment! Your completion code is C8M5RGMZ. ',
  prolificConfirmText: 'Press the button'
});

// new_alt_key is a list that this is used for shuffling questions within a page

var new_alt_key = [];

for (let i = 0; i < 3; i++) {
  new_alt_key.push(i);
}

new_alt_key = _.shuffle(new_alt_key);

// alt_key is a list that this is used for total number of pages
var total_stimuli_alt_key = [];
for (let i = 0; i < 50; i++) {
  total_stimuli_alt_key.push(i);
}
total_stimuli_alt_key = _.shuffle(total_stimuli_alt_key);
var with_attention = total_stimuli_alt_key.slice(0, 18);
with_attention.push("attention1");
with_attention.push("attention2");
with_attention = _.shuffle(with_attention);

const slider_rating = magpieViews.view_generator("slider_rating", {
  trials: 20,
  // name should be identical to the variable name
  name: 'slider_rating',
  data: trial_info.slider_rating
},
    {
      // `<div class='magpie-view' align="center">
      //                  <div style="float: right;"><i>This is page ${CT+1} of 10</i></div>
      //                    <br>
      //                    <br>
      //                     <img class="center" id="stim-gif" src="${config.data[gif_index][0].picture}">
      //                     </br>
      //                     <p style="font-size:20px">
      //                     The players of <i>X</i> and <i>O</i> in this game are <b>${player_type[0]}</b>.
      //                     </p>
      //                     </br>
      //                     </div>
      //                     </div>
      //                   </div>`
        stimulus_container_generator: function (config, CT) {
                console.log(with_attention)
                gif_index = with_attention[CT];
                console.log(gif_index)
                if (gif_index == "attention1") {
                  return `<div class='magpie-view' align="center">
                           <div style="float: right;"><i>This is page ${CT+1} of 20</i></div>
                             <br>
                             <br>
                              <img class="center" id="stim-gif" src="images/current_stimuli/1_1_89.png">
                              </br>
                              </br>
                              </div>
                              </div>
                            </div>`;
                } else if (gif_index == "attention2") {
                    return `<div class='magpie-view' align="center">
                    <div style="float: right;"><i>This is page ${CT+1} of 20</i></div>
                      <br>
                      <br>
                      <img class="center" id="stim-gif" src="images/current_stimuli/2_25_23.png">
                      </br>
                      </br>
                      </div>
                      </div>
                    </div>`;
                } else {
                    return `<div class='magpie-view' align="center">
                        <div style="float: right;"><i>This is page ${CT+1} of 20</i></div>
                        <br>
                        <br>
                        <img class="center" id="stim-gif" src="${config.data[gif_index][0].picture}">
                        </br>
                        </br>
                        </div>
                        </div>
                        </div>`;}},
        answer_container_generator: function(config, CT) {
        var option1 = "";
        var option2 = "";
        var font_size = 0;
        // if (answer_type==="both"||answer_type==="binary") {
        var output = `<div class=''>
                      <div class=''>
                      <hr>
                      </br>
                      <p>Mark whether the following sentence is an accurate description of the scene.</p>`;
        // }

        if (answer_type=="binary") {
          const i = 0
          new_alt_key = _.shuffle(new_alt_key);
          if (gif_index == "attention1") {
            var q = "Player X <b>placed</b> at location 8.";
          } else if (gif_index == "attention2") {
            var q = "Player X <b>placed</b> at location 0.";
          } else {
            var q = config.data[gif_index][new_alt_key[i]].question;
          }
    
          output = output + `
                      <p style="font-size:16px" class='magpie-view-question'> </p>
                      <p style="font-size:20px">${q}</p>
                       <input type="radio" onclick="" name="choice-radio${i}" id="yeschoice-radio${i}" value="yes" onchange='updateSlider(${i})'>
                       <label for="yeschoice-radio${i}">Accurate</label>
                       &nbsp;
                       &nbsp;
                       &nbsp;
                       &nbsp;

                       <input type="radio" onclick="" name="choice-radio${i}" id="nochoice-radio${i}" value="no" onchange='updateSlider(${i})'>
                       <label for="nochoice-radio${i}">Inaccurate</label>
                       </br>
                       </br>
                       </br>
                       <script>
                       var isClicked = {"0":false};
                       function updateSlider(i) {
                         isClicked[i.toString()] = true;
                         for (var j=0; j<1; j++) {
                           if (!isClicked[j.toString()]) {
                             return;
                            }
                          }
                        $("#next").removeClass("magpie-nodisplay");
                       }
                       </script>

                       <div id="slider${i}">
                       </div>
                      <hr>`;
        
        }
          output = output + `
                <button id='next' class='magpie-view-button magpie-nodisplay'>Next</button>
                </br>
                </br>
                </br>
                <p style="color:blue;">
                Psst... don't see a NEXT button? Make sure you've selected an answer!
                </p>
                </div>
                </div>
                </div>`;
          return output;
        },

        handle_response_function: function(config, CT, magpie, answer_container_generator, startingTime){
        let response;
        $(".magpie-view").append(answer_container_generator(config, CT));
        response = $("#response");
        // checks if the slider has been changed
        response.on("change", function() {
                    if (response.val() == config.data[CT].answer) {
                        $("#next").removeClass("magpie-nodisplay");
                    }
                });

        $("#next").on("click", function() {
            const RT = Date.now() - startingTime; // measure RT before anything else
            let trial_data = {
                trial_name: config.name,
                trial_number: CT + 1,
                // response: response.val(),
                RT: RT
            };
            for (var i = 0; i<1; i++) {
              trial_data["response" + i.toString()] = $("#response" + i.toString()).val();
              if ($("#yeschoice-radio" + i.toString() + ":checked").val() == "yes") {
                trial_data["yesno-choice" + i.toString()] = "yes";
              }
              else {
                trial_data["yesno-choice" + i.toString()] = "no";
              }
              if (gif_index == "attention1") {
                trial_data["picture"] = "attention1";
                trial_data["question" + i.toString()] = "attention1";
              } else if (gif_index == "attention2") {
                trial_data["picture"] = "attention2";
                trial_data["question" + i.toString()] = "attention2";
              } else {
                trial_data["picture"] = config.data[gif_index][0]["picture"];
                // trial_data["skill"] = player_type[0];
                // trial_data["question" + i.toString()] = config.data[gif_index][i]["question"];
                trial_data["question" + i.toString()] = config.data[gif_index][new_alt_key[i]].question;
              }
              //add picture and question ID
            }
            magpie.trial_data.push(trial_data);
            magpie.findNextView();
        });
        },
      }
    );

    const attn_slider_rating = magpieViews.view_generator("slider_rating", {
      trials: 1,
      // name should be identical to the variable name
      name: 'attn_slider_rating',
      data: trial_info.slider_rating
    },
        {
            stimulus_container_generator: function (config, CT) {
                    gif_index = alt_key[CT];
                    console.log("attention")
                    return `<div class='magpie-view' align="center">
                           <div style="float: right;"><i>This is page 20 of 20</i></div>
                             <br>
                             <br>
                              <img class="center" id="stim-gif" src="images/current_stimuli/1_1_89.png">
                              </br>
                              </br>
                              </div>
                              </div>
                            </div>`;},
            answer_container_generator: function(config, CT) {
            var option1 = "";
            var option2 = "";
            var font_size = 0;
            if (answer_type==="both"||answer_type==="binary") {
              var output = `<div class=''>
                  <div class=''>
                  <hr>
                  </br>
                      <p>Mark whether the following sentence is an accurate description of the scene.</p>`;
            }
    
            if (answer_type=="binary") {
              const i = 0
              new_alt_key = _.shuffle(new_alt_key);
              var q = "Player X placed at location 8.";
              output = output + `
                          <p style="font-size:16px" class='magpie-view-question'> </p>
                          <p style="font-size:20px"><b>${q}</b></p>
                           <input type="radio" onclick="" name="choice-radio${i}" id="yeschoice-radio${i}" value="yes" onchange='updateSlider(${i})'>
                           <label for="yeschoice-radio${i}">Accurate</label>
                           &nbsp;
                           &nbsp;
                           &nbsp;
                           &nbsp;
    
                           <input type="radio" onclick="" name="choice-radio${i}" id="nochoice-radio${i}" value="no" onchange='updateSlider(${i})'>
                           <label for="nochoice-radio${i}">Inaccurate</label>
                           </br>
                           </br>
                           </br>
                           <script>
                           var isClicked = {"0":false};
                           function updateSlider(i) {
                             isClicked[i.toString()] = true;
                             for (var j=0; j<1; j++) {
                               if (!isClicked[j.toString()]) {
                                 return;
                                }
                              }
                            $("#next").removeClass("magpie-nodisplay");
                           }
                           </script>
    
                           <div id="slider${i}">
                           </div>
              <hr>`;
            
          }
              output = output + `
                    <button id='next' class='magpie-view-button magpie-nodisplay'>Next</button>
                    </br>
                    </br>
                    </br>
                    <p style="color:blue;">
                    Psst... don't see a NEXT button? Make sure you've selected an answer!
                    </p>
                    </div>
                    </div>
                    </div>`;
              return output;
            },
    
            handle_response_function: function(config, CT, magpie, answer_container_generator, startingTime){
            let response;
            $(".magpie-view").append(answer_container_generator(config, CT));
            response = $("#response");
            // checks if the slider has been changed
            response.on("change", function() {
                        if (response.val() == config.data[CT].answer) {
                            $("#next").removeClass("magpie-nodisplay");
                        }
                    });
    
            $("#next").on("click", function() {
                const RT = Date.now() - startingTime; // measure RT before anything else
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    // response: response.val(),
                    RT: RT
                };
                for (var i = 0; i<1; i++) {
                  trial_data["response" + i.toString()] = $("#response" + i.toString()).val();
                  if ($("#yeschoice-radio" + i.toString() + ":checked").val() == "yes") {
                    trial_data["yesno-choice" + i.toString()] = "yes";
                  }
                  else {
                    trial_data["yesno-choice" + i.toString()] = "no";
                  }
                  trial_data["picture"] = "attention";
                  trial_data["question" + i.toString()] = config.data[gif_index][new_alt_key[i]].question;
                  //add picture and question ID
                }
                magpie.trial_data.push(trial_data);
                magpie.findNextView();
            });
            },
          }
        );
