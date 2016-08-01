// main object gets loaded and stored,
// then it is converted to an object with a name based on
// the actor and its id
// so that the actor does not access the global mainObject
// which would then be overriden
mainObject = {
  tick : function () {
    printSomething("Loaded the generator logical block in the core module.");
  },
  activate : function () {
    printSomething("you activated me!");
  }
};
