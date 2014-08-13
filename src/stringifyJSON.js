// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var converted = '';
  var chop = false;
  
  if(obj === undefined || typeof(obj) === 'function') {
    return converted;
  }
  else if(typeof(obj) === 'string') {
    converted += '\"' + obj + '\"';
  }
  else if(Array.isArray(obj)) {
    converted += '[' 
	for(var i = 0; i < obj.length; i++) {
	  converted += stringifyJSON(obj[i]) + ',';
	  chop = true;
	}
	if(chop){
	  converted = converted.substring(0, converted.length - 1);
	}
	converted += ']';
  }
  else if(typeof(obj) === 'object' && obj !== null) {
    converted += '{';
	var chop = false;
	for(var key in obj) {
	  if(obj[key] !== undefined && typeof(obj[key]) !== 'function'){
	    converted += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
	    chop = true;
	  }
	}
	if(chop) {
	  converted = converted.substring(0, converted.length-1);
	}
	converted += '}';
  }
  else {
    converted += obj;
  } 
 
  return converted;
}