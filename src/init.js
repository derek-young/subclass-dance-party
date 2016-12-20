$(document).ready(function() {
  window.dancers = [];


  var $bodyWidth = $('.container').width() * 0.6;
  $('.container').css('height', $bodyWidth + 'px');

  $(window).resize(function () {
    var $bodyWidth = $('.container').width() * 0.6;
    $('.container').css('height', $bodyWidth + 'px');
  });
  
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.terrifyToggle').change(function (event) {
    if ($('.container').hasClass('terrify')) {
      $('.container').removeClass('terrify');
      $('.michael').show();
      $('.michael-terrify').hide();     
    } else {
      $('.container').addClass('terrify');
      $('.michael-terrify').show();
      $('.michael').hide();
    }
  });

  var createMJ = function(index) {
    var heads = ['mj_head.png', 'mj_head_left.png', 'mj_head.png', 'mj_head_right.png'];
    $('.mj_head').empty();
    $('.mj_head').append('<img src="img/' + heads[index] + '">');
    setTimeout(function() {
      if (index === 3) {
        index = 0;
      } else {
        index += 1;
      }
      createMJ.call(null, index);
    }, 350);
  };
  var createMJLegs = function(index) {
    var legs = ['mj_legs.png', 'mj_legs_reverse.png', 'mj_legs.png', 'mj_legs_reverse.png'];
    $('.mj_legs').empty();
    $('.mj_legs').append('<img src="img/' + legs[index] + '">');
    setTimeout(function() {
      if (index === 3) {
        index = 0;
      } else {
        index += 1;
      }
      createMJLegs.call(null, index);
    }, 500);  
  };
  createMJ(0);
  createMJLegs(0);
  var createMJTerrify = function(index) {
    var heads = ['mj_head_terrify.png', 'mj_head_terrify_left.png', 'mj_head_terrify.png', 'mj_head_terrify_right.png'];
    $('.mj_head_terrify').empty();
    $('.mj_head_terrify').append('<img src="img/' + heads[index] + '">');
    setTimeout (function() {
      if (index === 3) {
        index = 0;
      } else {
        index += 1;
      }
      createMJTerrify.call(null, index);
    }, 350);
  };
  var createMJTerrifyLegs = function(index) {
    var legs = ['mj_legs.png', 'mj_legs_reverse.png', 'mj_legs.png', 'mj_legs_reverse.png'];
    $('.mj_legs_terrify').empty();
    $('.mj_legs_terrify').append('<img src="img/' + legs[index] + '">');
    setTimeout(function() {
      if (index === 3) {
        index = 0;
      } else {
        index += 1;
      }
      createMJTerrifyLegs.call(null, index);
    }, 500);  
  };
  createMJTerrify(0);
  createMJTerrifyLegs(0);
});

