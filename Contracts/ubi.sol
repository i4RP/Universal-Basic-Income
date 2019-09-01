pragma solidity ^0.4.19;

contract ubi {
    uint private amount;
    uint private dropAmount;

    address [] public members;

    function subscribeMember (address _subscribeAddress) public {
        members.push(_subscribeAddress); //メンバーに追加
    }

    function checkMembers () public view  returns (uint){
        return members.length;
    }

    function receiveAndAirdropMoney () public payable{
        amount += msg.value;
        dropAmount = amount/members.length;
        for (uint i = 0; i < members.length; i++) {
            members[i].transfer(dropAmount);
        }
    }
}
