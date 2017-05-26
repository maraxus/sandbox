var count = " " + document.getElementsByTagName('h2').length || "just one or none";
var span = document.createElement('span').appendChild(document.createTextNode(count));
document.getElementsByTagName('h2')[0].appendChild(span);