mainObject = {
  name: "Battery",
  durability: 150,
  description: "This stores energy. Such wow!",
  logical: true,

  awake : function () {
    this.energy = 0;
  },

  tick : function () {
    print("Battery Storage: " + this.energy);
  },

  activate : function () {
    print("show inventory view of battery");
  }
};
