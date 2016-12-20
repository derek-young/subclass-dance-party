// Creates and returns a new dancer object that can step
var MakeBgDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="backgroundDancer"></span>');
  setTimeout(this.step.bind(this, timeBetweenSteps), 0);
  setTimeout(this.setPosition.bind(this, top, left), 0);
};  

MakeBgDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeBgDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};