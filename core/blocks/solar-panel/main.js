// main object gets loaded and stored,
// then it is converted to an object with a name based on
// the actor and its id
// so that the actor does not access the global mainObject
// which would then be overriden
mainObject = {
  name: "SolarPanel",
  durability: 100,
  description: "A basic generator.",
  logical: true,

  awake : function () {
    this.energy = 0;
  },
  tick : function () {
    this.energy += 1;
  },
  activate : function () {
    // print("you activated me!");
  }
};


// end goal is make that ^ associated with an actor when the actor is spawned.

// To do that, we need a LogicalBlockData id
