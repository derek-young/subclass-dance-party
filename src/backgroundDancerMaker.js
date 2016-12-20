var MakeBackgroundDancer = function(top, left, timeBetweenSteps) {
  MakeBgDancer.call(this, top, left, timeBetweenSteps);
};

MakeBackgroundDancer.prototype = Object.create(MakeBgDancer.prototype);
MakeBackgroundDancer.prototype.constructor = MakeBackgroundDancer;
MakeBackgroundDancer.prototype.step = function(timeBetweenSteps) {
  this.$node.toggle();
  MakeBgDancer.prototype.step.call(this, timeBetweenSteps);
};
