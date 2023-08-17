const heading1 = document.querySelector("h1");
heading1.innerHTML = "this is changed heading value!"

const heading2 = document.querySelector("h2");
heading2.innerHTML = "the h2 has been change to this sentence"

let variable1 = "Bob";
let variable2 = 10;
let variable3 = true;

let variableArray = ['Item 2', 'Item2', 'Item3'];
let variableArray2 = [1, 2, 3]

let arrayitem = variableArray[0];

const heading4 = document.querySelector('h4');

heading4.innerHTML = variable4;
heading4.textcontent = "this is using textcontent";

console.log(variable2);
console.log("value for console!");

const heading5 = document.querySelector('h5');

let value1 = "Deakin University";

if(value1 === "Deakin University"){
    console.log("this is right");

    heading5.innerHTML = "this is right";

}
else{
    console.log("this is wrong!");
}

function multiply(value1, value2){
    let result = value1 * value2;
    return result;
}

console.log(multiply(2, 3));
heading5.innerHTML = add(2, 3);

console.log(ass(2,3));
heading1.innerHTML = add(2,3);
//console for different values,
//todo: create addition function,
//todo: create substraction function

//alert("you just clicked outside the function!")
document.querySelector("html").addEventListener("click", function(){
    alert("you just clicked!")
})

localStorage.setItem("key1", "value1");
localStorage.setItem("key2", "value2");
localStorage.setItem("key3", "value3");

let valueconstant = localStorage.getItem("key1");
heading5.innerHTML = 'this is from localstorage, ${value1constant}';

//create a buttom in HTML file 
//then use textSelector to access it 
let myButton = document.querySelector("button");
//show alert with button click

let imagevalue = document.querySelector("img");
myButton.onclick = () => {
    alert("button is clicked!");

}
myButton.ONCLICK = () =>{
    const src = imagevalue.getAttribute("src");
    if (src === "html5.png"){
        imagevalue.setAttribute("src", "javascript.png");
}
    else{
        imagevalue.setAttribute("src", "html5.png");
    }


}


//create a alert function
//assign into button click