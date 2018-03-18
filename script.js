var button = document.getElementById("addElem");
var list = document.getElementById("list");


button.addEventListener("click", function(){
    var element = document.createElement("li");
    var listItems = list.getElementsByTagName("li");
    element.innerHTML = "item " + listItems.length;
    list.appendChild(element);
})