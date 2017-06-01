(function($, window, document) {

   $(function() {

      var testData = [
       { question : 'Is my hovercraft full of eels?', answers : ['Strongly agree', 'Agree', 'Neither agree nor disagree', 'Disagree', 'Strongly disagree'], imgSrc : "img/img-1.jpg", imgAlt : "Hovercraft"},
       { question : 'I deserve special treatment from others', answers : ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'], imgSrc : "img/img-2.jpg", imgAlt : "Treatment "},
       { question : 'I find it difficult to approach others', answers : ['Yes', 'No'], imgSrc : "img/img-3.jpg", imgAlt : "Approach others"},
       { question : 'I pay attention to details', answers : ['Not at all probable', 'Slightly probable', 'Moderately probable', 'Very probable', 'Completely probable'], imgSrc : "img/img-4.jpg", imgAlt : "Details"},
       { question : 'I find rabbits confusing', answers : ['Very confusing', 'Not confusing', 'Prefer not to say'], imgSrc : "img/img-5.jpg", imgAlt : "Rabbits"}
      ];
      var curQuestion = 0;
      var nextQuestion = function () {

         $('#question').find('img').fadeOut(500, function() {
            $(this).attr('src',testData[curQuestion].imgSrc);
            $(this).attr('alt',testData[curQuestion].imgAlt);
         }).fadeIn(500);
         $('#question').find('.p-change').html(testData[curQuestion].question);
         $('#answers').slideUp(1000, function() {
           $('#answers').html("");
           for (i = 0; i < testData[curQuestion].answers.length; i++) {
             $('#answers').append('<li>' + testData[curQuestion].answers[i] + '</li>');
           }
           $('#answers').slideDown(1000);
         });

         $('.progress-bar').css("width", (100*curQuestion/testData.length) + "%");
       };

      var nextQuestinAppear = function () {
        if (curQuestion < testData.length - 1) {
          curQuestion++;
          $('.progress-bar').css("width", (100*curQuestion/testData.length) + "%");
          setTimeout( function(){
             nextQuestion();
           }  , 1000 );
        } else {
          $('.progress-bar').css("width", "100%");
          curQuestion = 0;
          setTimeout( function(){
             nextQuestion();
           }  , 5000 );
        }
      };

     nextQuestion();

     $(".glyphicon-menu-right").on('click', function() {
       nextQuestinAppear();
     });

     $(".glyphicon-menu-left").on('click', function() {
       if (curQuestion > 0) {
         curQuestion--;
         $('.progress-bar').css("width", (100*curQuestion/testData.length) + "%");
         setTimeout( function(){
            nextQuestion();
          }  , 1000 );
       }
     });

     $("#answers").on('click','li', function() {
       $(this).addClass("white");
       nextQuestinAppear();

     });




   });

  }(window.jQuery, window, document));
