// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var converted = '';
  
  if(obj === undefined) {
    return converted;
  }
  else if(typeof(obj) === 'string') {
    converted += '\"' + obj + '\"';
  }
  else if(Array.isArray(obj)) {
    converted += '[' 
	for(var i = 0; i < obj.length; i++) {
	  converted += stringifyJSON(obj[i]);
	  if(i < obj.length-1) {
	    converted += ",";
	  }
	}
	converted += ']';
  }
  else {
    converted += obj;
  }
  
  
  /*
  if(Array.isArray(obj)){
    converted += "[";
    for(var i = 0; i < obj.length; i++){
	  converted += obj[i];
	  converted += "\n";
	}
	converted += "]";
  }
  else{
    converted += "{";
    for(var key in obj){
      converted += key;
	  converted += ": ";
	  converted += obj[key];
    }
	converted += "}";
  }
  */ 
 
  return converted;
}
