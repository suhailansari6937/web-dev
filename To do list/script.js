// let ul = document.querySelector("ul");
let btn = document.querySelector("#listTask");
let input= document.querySelector("input");
btn.addEventListener("click", addTask);

input.addEventListener("keypress", function(event){
    if(event.key== "Enter")
        addTask();
})

function addTask(){
    
    let ul = document.querySelector("ul");
    let input = document.querySelector("input");
    let li = document.createElement("li");
    let delBtn = document.createElement("button");


    if(input.value!==""){

    li.textContent=input.value;
    delBtn.textContent = "remove";
    li.appendChild(delBtn);
    ul.appendChild(li);
    input.value="";
    
    delBtn.addEventListener("click", function(){
        li.remove();
    });

}
}