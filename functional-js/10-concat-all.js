Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
        // assumes no deeper than 2-dimensional
        // apply calls results.push with every element of the subArray
		results.push.apply(results, subArray); 
	});

	return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array

// works for deeply nested arrays structures
Array.prototype.concatAllDeep = function() {
    let copy = this.slice();
      var results = [];
    for(let i = 0; i < copy.length; i++){
      let subArray = copy[i];
      if(!Array.isArray(subArray)){
          results.push(subArray);
      }
      else{
        for(let j = 0; j < subArray.length; j++){
            copy.push(subArray[j]);
        }
      }
    }
  
      return results;
  };
          