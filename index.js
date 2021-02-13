//Global Variabes
var input = document.querySelector("input");
var list = document.querySelector(".list");
var item = document.querySelector(".listItem");

//Clear input after we take its text value
function clearInput(){
  input.value = "";
}

//Add input text as a list item
function createListItem(item){
  var listItem = document.createElement("li");
  listItem.className = "listItem";
  listItem.innerHTML = item;  
  list.append(listItem);

}

//Listen for enter key to send input text
document.addEventListener("keydown", function(e){
  if (e.keyCode === 13){
    if (input.value){
      createListItem(input.value);
      clearInput();
    } else {
      console.log("no input");
    }
  }
});

//Remove each list item by clicking it.
//Error check that the list itself it not being deleted.
$(".list").on("click", function(e){
    if (e.target.classList.contains("listItem")){
      console.log("can deleted");
      e.target.remove();
    } else {
      console.log("cant delete");
    }
});

