import "FreepeUser.sol";

contract FreepeUsers {

    mapping (address => FreepeUser) public users;

    function register(bytes32 _name, bytes32 _email) returns (bool status) {

//        if (users[msg.sender] )

        users[msg.sender] = new FreepeUser(_name, _email);

        return true;
    }
}