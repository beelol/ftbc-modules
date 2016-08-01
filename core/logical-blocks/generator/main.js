// main object gets loaded and stored,
// then it is converted to an object with a name based on
// the actor and its id
// so that the actor does not access the global mainObject
// which would then be overriden
mainObject = {
  awake : function () {
    this.energy = 0;
  },
  tick : function () {
    var energy = this.energy;
    this.energy += 1;
  },
  activate : function () {
    print("you activated me!");
  }
};
