mainObject = {
  name: "Generator",
  durability: 100,
  description: "A basic generator.",

  awake : function () {
    this.energy = 100;
  },

  tick : function () {
    this.chargeAdjacentBattery ();
  },

  activate : function () {
    print("you activated me!");
  },

  chargeAdjacentBattery : function () {
    // Let's assume the output is the back
    var outputBlock = this.getAdjacentBlock("backward");

    if (outputBlock !== undefined && outputBlock.energy !== undefined) {
      if(this.energy > 0) {
        this.energy -= 1;
        outputBlock.energy += 1;
      }
    }
  }
};
