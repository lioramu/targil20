
const fruitsList=["apple", "banana", "orange"];
const input = document.querySelector("input");
const newFruitList = document.querySelector(".fruit-list");
function displayFruits(fruitsList) {
    newFruitList.innerHTML = "";
    if(fruitsList.length===0){
     const none =document.createElement("li");
     none.classList.add("not-found");
     none.textContent="no result found";
    newFruitList.append(none);
    };
      for (let i=0; i<fruitsList.length; i++){
    fruit= document.createElement("li");
   fruit.textContent=fruitsList[i];
   newFruitList.append(fruit);
   }
}
displayFruits(["apple", "banana", "orange"]);
input.oninput= function searchFruits(){
const result= fruitsList.filter (function(fruit){
    return fruit. startsWith(input.value)
}); 
displayFruits(result);
}



