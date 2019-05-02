describe("exchangeValues", function() {

//	before(function() { alert("Начало тестов"); });
//  after(function() { alert("Конец тестов"); });

  	function test(x, y) {
  		var expected = `value1 = ${y}, value2 = ${x}`;
  		it(`Before: value1 = ${x}, value2 = ${y}  #|#|#|#|# Now:  ${expected}`, function() {
  			assert.equal(exchangeValues(x, y), expected);
  		})
  	}

  	for (var i = -2; i < 3; i++) {
  		test(i, i + 1);
  	}

})