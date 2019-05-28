const eratosthenesSieve = (n) => {
	var array = [];

	for (var i = 0; i < n-1; i++) {
		array[i]=i+2;
	}

	var sum = 0;
	var p = 2;

	for (p; p*p < n; p++) {
		for (var i = p; i < array.length; i++) {
			if (array[i] % p == 0) array[i] = "X";
		}
	}

	for (var i = 0; i < array.length; i++) {
		if (array[i] != "X") sum+=array[i];
	}
	console.log(`Sum of prime numbers in range [2,${n}]: ${sum}
	Sieve: ${array}`);
	return sum;
}
