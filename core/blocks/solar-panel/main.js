mainObject = {
  name: "SolarPanel",
  durability: 100,
  description: "A basic generator.",

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
