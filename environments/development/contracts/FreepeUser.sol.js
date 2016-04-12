// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"inputs":[{"name":"_name","type":"bytes32"},{"name":"_email","type":"bytes32"}],"type":"constructor"}],
    binary: "6060604081815280602e833960a090525160805160009182556001556006908190602890396000f3606060405200",
    unlinked_binary: "6060604081815280602e833960a090525160805160009182556001556006908190602890396000f3606060405200",
    address: "0x186fbf5ee4cc544e8f27dbd444056d75b21ca3b4",
    generated_with: "2.0.6",
    contract_name: "FreepeUser"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("FreepeUser error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("FreepeUser error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("FreepeUser error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("FreepeUser error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.FreepeUser = Contract;
  }

})();
