//for browsers
define("module1", "module2"),
  function (module1Import, module2Import) {
    var fight = module1Import.fight; //.fight
    var module2 = module2Import; //.importedFunc2

    function dance() {}

    return {
      dance: dance,
    };
  };
