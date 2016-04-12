contract FreepeUser {

    bytes32 name;
    bytes32 email;

	function FreepeUser(bytes32 _name, bytes32 _email) {
		name = _name;
		email = _email;
	}
}