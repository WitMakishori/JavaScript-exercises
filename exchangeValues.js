function exchangeValues(val1,val2) {
	val1 = val1 ^ val2;
	val2 = val1 ^ val2;
	val1 = val1 ^ val2;

	return (`value1 = ${val1}, value2 = ${val2}`);
}