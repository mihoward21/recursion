// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var elements = [];
  
  if(document.body.classList.contains(className)){
    elements.push(document.body);
  }
  
  addNodes(document.body.childNodes);
  
  function addNodes(level){
    for(var i = 0; i < level.length; i++){
	  var classes = level[i].classList;
	  if(classes !== undefined){
	    if(classes.contains(className)){
	      elements.push(level[i]);
	    }
	  }
	  
	  if(level[i].childNodes !== undefined){
	      addNodes(level[i].childNodes);
	  }
	}
  }
  
  return elements;
};