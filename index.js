$(document).ready(function() {
  $(".begin").click(function() {
    $("#main").hide();
    return quiz();
  });

  function startOver() {
    location.reload(true);
  }

  function quiz() {
    var numScore = 0;
    var score = [];
    var questions = [{
      q: "You switched out the bulb that illuminates your license plate (tag light) to a blue one, because it matched your paint. Is this against the law?",
    s: ["No, it is lawful to change this bulb as long as it is the same color as your vehicle.", 
                "Yes, license plates must only be illuminated by a white light.", 
                "Yes, license plates must only be illuminated by a white or amber light."],
    a: "Yes, license plates must only be illuminated by a white light.",
    w: "License plates must only be illuminated by a white light. You are in violation of FSS 316.215(1) Unsafe Equipment, and received a noncriminal traffic infraction in the amount of $116.",
    correct: 0

}, {
    q: "Prior to getting into the vehicle, your friend informs you the center brake light (rear windshield on most) is out, but your other two lights are working. If this a violation?",
    s: ["No, according to Florida Statute, vehicles are only required to have at least two working brake lights.", 
        "Yes, all brake lights must be operable.", 
                "Yes, the only brake light that must be working at all times is the center light."],
    a: "No, according to Florida Statute, vehicles are only required to have at least two working brake lights.",
    w: "Vehicles are required to have a minimum of two working brake lights. You are in violation of FSS 316.215(1) Unsafe Equipment, and received a noncriminal traffic infraction in the amount of $116.",
    correct: 0

}, {
    q: "You celebrated your birthday, November 23rd, and have not yet renewed your vehicle registration. It is now November 30th. Is your registration expired?",
    s: ["Yes, you must renew your registration by midnight on your birthday.", 
                "No, registration is required on the anniversary of purchase, not birthday.", 
                "No, due to recent provisions, registration has been extended until the end of your birth month."],
    a: "No, due to recent provisions, registration has been extended until the end of your birth month.",
    w: "Due to recent provisions, registration has been extended until the end of your birth month. You are in violation of FSS 320.07(3)(A) Expired Registration Less than 6 Months, and received a noncriminal traffic infraction in the amount of $116.",
    correct: 0

    }, {
    q: "You affixed your Honda with a Dynamax Magnum Glasspack muffler, and headed into town. A violation?",
    s: ["Yes, but not a law violation.", 
                "Yes, it is unlawful to operate a vehicle on a Florida highway/roadway with a modified exhaust.", 
                "No, it is not unlawful to modify exhaust."],
    a: "Yes, it is unlawful to operate a vehicle on a Florida highway/roadway with a modified exhaust.",
    w: "Yes, it is unlawful to operate a vehicle on a Florida highway/roadway with a modified exhaust. You are in violation of FSS 316.215(1) Unsafe Equipment, and received a noncriminal traffic infraction in the amount of $116.",
    correct: 0

    }, {
    q: "The red light at a major intersection is backed up. You cut through an adjacent parking lot to avoid the jam. A police officer pulls you over, is it for cutting through?",
    s: ["Yes, it is unlawful to cut through a parking lot to avoid traffic.", 
        "No, as long as it is a red light it is okay to cut through.", 
        "Yes, but only because the adjacent parking lot was private property."],
    a: "Yes, it is unlawful to cut through a parking lot to avoid traffic.",
    w: "It is unlawful to cut through a parking lot to avoid traffic, at all times. You are in violation of FSS 316.074(2) and received a moving violation in the amount of $166.",
    correct: 0

    }, {
    q: "You approach a red light, and intend to make a right turn. You slow down, make sure traffic is clear, and proceed into your turn without a complete stop. The police officer accused you of running the red light in which you adamantly deny, who's correct?",
    s: ["The police officer. You must come to a complete stop prior to making a right turn.", 
        "You. It is okay to slow through a red light, but only for right turns.", 
        "You."],
    a: "The police officer. You must come to a complete stop prior to making a right turn.",
    w: "The police officer. You must come to a complete stop prior to making a right turn. Even if the front tires come to rest on top of the stop bar, it is considered failing to stop for a red light. You are in violation of FSS 316.075 1c1, and carries a hefty fine of $264.",
    correct: 0

    }, {
    q: "While you waited to make a right turn, a pedestrian walk signal permitted pedestrians to cross. Once the last pedestrian passed the front of your vehicle, but did not successfully cross the road, you proceed through your turn. Is this lawful?",
    s: ["Yes, as long as the pedestrian has cleared your vehicle." , 
        "No, you must wait until all pedestrians are successfully out of the crosswalk before proceeding", 
        "Yes, as long as due care is given to the pedestrians which is at the discretion of the observing officer."],
    a: "Yes, as long as due care is given to the pedestrians which is at the discretion of the observing officer.",
    w: "It is lawful to enter a crosswalk with your vehicle, as long as due care is given to the pedestrian(s). What is considered 'due care' is at the discretion of the officer. For example, it may be considered careless demonstrate reasonable signs of impaitence, i.e, to inch forward then accelerate quickly the moment the pedestrian passes. Florida Statute, 316.130(15) is $166.",
    correct: 0
    }];

    var counter = questions.length;

    function renderQuestion(questions) {
      for (var i = 0; i < counter; i++) {
        $("#questions").append(
          '<form id="' + i + '">' +
          '<p class="right"><strong>Question:</strong> ' + (i + 1) + ' of ' + counter + ' <strong>Score:</strong> ' + 
          '<span class="show_score"></span></p>' +
          '<hr class="row">' +
          '<h3 class="question">' + questions[i].q + '</h3>' +
          '<fieldset><legend>Choices:</legend>' +
          radioButtons(questions[i].s, i) + '</fieldset>' +
          '<hr class="row">' +
          '<span class="intCars">' +
          '<img src="https://image.ibb.co/bK0f2w/cop.png" alt="Police Car" border="0" width="100px" class="cop">' +
          '<img src="https://image.ibb.co/b5rChw/car_red.png" alt="Red Sedan" border="0" width="100px" >' +
          '</span>' +
          '<span class="nav">' +
          '<button type="submit" class="next">submit</button>' +
          '</span></form>');
          $(".show_score").text(numScore);
      }

      for (var k = counter - 1; k > 0; k--) {
        $('#' + k).hide();
      }
    }

    function radioButtons(ary, qNum) {
      var answers = [];
      for (i = 0; i < ary.length; i++) {
        answers.push(
          '<input type="radio" name="' + qNum + '" value="' + ary[i] + '" id="' + qNum + '">' +
          '<label for="' + qNum + '">' + ary[i] + '</label>');
      }
      return answers.join("");
    }

    function sumCorrect(questions) {
      return score.reduce(function(previousValue, currentValue, index, array) {
        return previousValue + currentValue;
      });
    }

    function checkAnswer(answer, qNum, questions) {
      if (answer == questions[qNum].a) {
        questions[qNum].correct = 1;
        score.push(questions[qNum].correct);
        
        numScore = numScore + 1;
        $(".show_score").text(numScore);
        
      } else {
        score.push(questions[qNum].correct);
      }
    }

    renderQuestion(questions);
    $("#modal").click(function() {
      $(this).fadeOut("fast");
    });
    $(".next").click(function(event) {
      event.preventDefault();
      var answer = $(this).closest("form").find(":radio:checked").val(),
        questionNumber = this.form.id;
      console.warn(questionNumber, answer);
       if (!answer) { 
          $("#message").html('<h4>Make a selection.</h4>');
          $("#modal").fadeIn("fast");
          return;
        } 
      if (answer !== questions[questionNumber].a) { 

        $("#message").html('<h4>Incorrect.</h4><p class="answer">' + questions[questionNumber].w + '</p>');
        $("#modal").fadeIn("fast");
      }
      if (answer == questions[questionNumber].a) { 

        $("#message").html('<h4>Correct.</h4><p class="answer">' + 
          questions[questionNumber].a + '</p>');
        $("#modal").fadeIn("fast");
      }
      var qNum = $(this).closest("form").attr("id");

      var userInput = $('input[name=' + qNum + ']:radio:checked').val();
      if (counter > 1) {
        checkAnswer(userInput, qNum, questions);
        $("#" + qNum).hide();
        $("#" + qNum).next().show();
        counter--;
      } else if (counter == 1) {
        checkAnswer(userInput, qNum, questions);
        $("#questions").find("form").remove();
        $("#questions").append(
          '<p class="page result"></p>' +
          '<hr class="row">' +
          '<span class="nav">' +
          '<button type="button" class="reset" value="reset">try again</button>' +
          '</span>');
          
        $(".result").text('Final Score: ' + sumCorrect(questions) + '/' + questions.length);
        for (j = 0; j < score.length; j++) {
          if (score[j] === 0) {
            console.log(questions[j].q, questions[j].a);
            $("#questions").append('<div>' +
              '<img src="https://image.ibb.co/d4SZaG/redx.png" alt="redx" class="redx">' +
              '<h3 class="question">' + questions[j].q + '</h3>' +
              '<p>' + questions[j].w + '</p>' +
              '</div>');
          }
          $('.reset').click(startOver);
        }
      } else {
        return false;
      }
    });
  }
});
