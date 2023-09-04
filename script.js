
function square(){
    console.log("squared");
    let x = document.getElementById("num1").value;
    document.getElementById("num1").value=x*x;
}

function cube(){
    console.log("cubed");
    let y = document.getElementById("num1").value;
    document.getElementById("num1").value=y*y*y

}
function CLR(){
    console.log("clear")
    document.getElementById("num1").value="";
    document.getElementById("num1").innerHTML="";

}
