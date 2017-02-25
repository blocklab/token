var BlocklabTokenV1 = artifacts.require("./BlocklabTokenV1.sol")

contract('BlocklabTokenV1', function(accounts) {
  it("should put 100000 BlocklabToken in the first account", function() {
    return BlocklabTokenV1.deployed().then(instance => {
      return instance.getBalance.call(accounts[0]);
    }).then(balance => {
      assert.equal(balance.valueOf(), 100000, "100000 wasn't in the first account");
    });
  });

  it("should send coin correctly", function() {
    return BlocklabTokenV1.deployed().then(meta => {
      var account_one = accounts[0];
      var account_two = accounts[1];

      var account_one_starting_balance;
      var account_two_starting_balance;
      var account_one_ending_balance;
      var account_two_ending_balance;

      var amount = 10;

      return meta.getBalance.call(account_one).then(function(balance) {
        account_one_starting_balance = balance.toNumber();
        return meta.getBalance.call(account_two);
      }).then(function(balance) {
        account_two_starting_balance = balance.toNumber();
        return meta.sendCoin(account_two, amount, {from: account_one});
      }).then(function() {
        return meta.getBalance.call(account_one);
      }).then(function(balance) {
        account_one_ending_balance = balance.toNumber();
        return meta.getBalance.call(account_two);
      }).then(function(balance) {
        account_two_ending_balance = balance.toNumber();

        assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
        assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
      });
    });
  });
});
