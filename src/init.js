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
  $('.addBackgroundDancerButton').on('click', function(event) {

    var dancer = new MakeBackgroundDancer(
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
      $('.audio-terrify').get(0).pause();
      $('.audio-normal').get(0).play();
    } else {
      $('.container').addClass('terrify');
      $('.michael-terrify').show();
      $('.michael').hide();
      $('.audio-normal').get(0).pause();
      $('.audio-terrify').get(0).play();
      if($('.zombie').length < 1) {
        addLeftZombie();
        addRightZombie();
      }
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
    }, randomTime());

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
    }, randomTime());
  };
  var createMJArmLeft = function(index) {
    var arms = ['mj_hand_left.png', 'mj_hand_left1.png', 'mj_hand_left.png', 'mj_hand_left2.png'];
    $('.mj_left_arm').empty();
    $('.mj_left_arm').append('<img src="img/' + arms[index] + '">');
    setTimeout(function() {
      if (index === 3) {
        index = 0;
      } else {
        index += 1;
      }
      createMJArmLeft.call(null, index);
    }, randomTime());
  };
  var createMJArmRight = function(index) {
    var arms = ['mj_hand_right.png', 'mj_hand_right1.png', 'mj_hand_right.png', 'mj_hand_right2.png'];
    $('.mj_right_arm').empty();
    $('.mj_right_arm').append('<img src="img/' + arms[index] + '">');
    setTimeout(function() {
      if (index === 3) {
        index = 0;
      } else {
        index += 1;
      }
      createMJArmRight.call(null, index);
    }, randomTime());
  };
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
    }, randomTime());
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
    }, randomTime());
  };
  var createMJArmLeftTerrify = function(index) {
    var arms = ['mj_hand_left.png', 'mj_hand_left1.png', 'mj_hand_left.png', 'mj_hand_left2.png'];
    $('.mj_left_arm_terrify').empty();
    $('.mj_left_arm_terrify').append('<img src="img/' + arms[index] + '">');
    setTimeout(function() {
      if (index === 3) {
        index = 0;
      } else {
        index += 1;
      }
      createMJArmLeftTerrify.call(null, index);
    }, randomTime());
  };
  var createMJArmRightTerrify = function(index) {
    var arms = ['mj_hand_right.png', 'mj_hand_right1.png', 'mj_hand_right.png', 'mj_hand_right2.png'];
    $('.mj_right_arm_terrify').empty();
    $('.mj_right_arm_terrify').append('<img src="img/' + arms[index] + '">');
    setTimeout(function() {
      if (index === 3) {
        index = 0;
      } else {
        index += 1;
      }
      createMJArmRightTerrify.call(null, index);
    }, randomTime());
  };
  var moveMichael = function(position) {
    $('.michaelDancer').animate({left: + position + '%'}, 3000);
    setTimeout(function() {
      moveMichael.call(null, randomPosition());
    }, randomTime());
  };
  var addLeftZombie = function() {
    $('.michaelDancer').append(LeftZombie());
  };
  var addRightZombie = function() {
    $('.michaelDancer').append(RightZombie());
  };
  var LeftZombie = function() {
    return $('<div class="leftZombie zombie"><img src="img/zombie_right.gif"></div>');
  };
  var RightZombie = function() {
    return $('<div class="rightZombie zombie"><img src="img/zombie_left.gif"></div>');
  };
  var randomTime = function() {
    return Math.floor(Math.random() * 1000);
  };
  var randomPosition = function() {
    return Math.floor(Math.random() * 90);
  };

  createMJ(1);
  createMJArmLeft(1);
  createMJArmRight(1);
  createMJLegs(1);
  createMJTerrify(1);
  createMJArmLeftTerrify(1);
  createMJArmRightTerrify(1);
  createMJTerrifyLegs(1);
  moveMichael(40);

});
