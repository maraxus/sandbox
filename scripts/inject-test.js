var count = document.getElementsByTagName('h1').length || "just one or none";
var span = document.createElement('span').appendChild(document.createTextNode(count));
document.getElementsByTagName(h1)[0].appendChild(span);