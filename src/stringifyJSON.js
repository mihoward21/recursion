// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var converted = '';
  
  if(obj === undefined || typeof(obj) === 'function') {
    return converted;
  }
  if(typeof(obj) === 'string') {
    converted += '\"' + obj + '\"';
  }
  else if(obj === null) {
	converted += obj;
  }
  else if(Array.isArray(obj)) {
    converted += '[' 
	for(var i = 0; i < obj.length; i++) {
	  converted += stringifyJSON(obj[i]);
	  if(i < obj.length-1) {
	    converted += ',';
	  }
	}
	converted += ']';
  }
  else if(typeof(obj) === 'object' && !Array.isArray(obj)) {
    converted += '{';
	var chop = false;
	for(var key in obj) {
	  converted += stringifyJSON(key);
	  converted += ':';
	  converted += stringifyJSON(obj[key]);
	  converted += ',';
	  chop = true;
	}
	if(chop) {
	  converted = converted.substring(0, converted.length - 1);
	}
	converted += '}';
  }
  else {
    converted += obj;
  } 
 
  return converted;
}
