// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_email","type":"bytes32"}],"name":"register","outputs":[{"name":"status","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"","type":"address"}],"type":"function"}],
    binary: "606060405261011b806100126000396000f3606060405260e060020a60003504632f92673281146024578063a87430ba1460a0575b005b60cd600435602435600082826060602e806100ed8339018083815260200182815260200192505050604051809103906000f03373ffffffffffffffffffffffffffffffffffffffff16825260208290526040909120805473ffffffffffffffffffffffffffffffffffffffff1916919091179055600192915050565b60e360043560006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6040518082815260200191505060405180910390f35b6060908152602090f36060604081815280602e833960a090525160805160009182556001556006908190602890396000f3606060405200",
    unlinked_binary: "606060405261011b806100126000396000f3606060405260e060020a60003504632f92673281146024578063a87430ba1460a0575b005b60cd600435602435600082826060602e806100ed8339018083815260200182815260200192505050604051809103906000f03373ffffffffffffffffffffffffffffffffffffffff16825260208290526040909120805473ffffffffffffffffffffffffffffffffffffffff1916919091179055600192915050565b60e360043560006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6040518082815260200191505060405180910390f35b6060908152602090f36060604081815280602e833960a090525160805160009182556001556006908190602890396000f3606060405200",
    address: "0x4dda25761b9008db997ba1f60a575329ac93c234",
    generated_with: "2.0.6",
    contract_name: "FreepeUsers"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("FreepeUsers error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("FreepeUsers error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("FreepeUsers error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("FreepeUsers error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.FreepeUsers = Contract;
  }

})();
