var Election = artifacts.require("./Election.sol");

contract("Election",function(accounts){
    it("initialize with two candidates",()=>{
          return Election.deployed().then((instance)=>{
               return instance.candidatesCount(); 
          }).then((count)=>{
              assert.equal(count,2);
          })
    })
})  