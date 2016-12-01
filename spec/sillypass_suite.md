##Test suite 'sillypass'
 
###(describe) '.size'
	 it -> 'should have a default passphrase size of twelve'
	 it -> 'should allow the passphrase size to be changed'
	 it -> 'should not allow a negative size passphrase'
 
###(describe) '#generate'
	 it -> 'should be an alias of #getPassword'
 
###(describe) '#getPassword'
	 it -> 'should return a string'
	 it -> 'should return an empty passphrase when passed a size argument of zero'
	 it -> 'should return an empty passphrase when passed a negative size argument'
	 it -> 'should return a passphrase equal to the current size value when not passed an argument'