let count=20;
function decreaseCount() {
    count --;
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
  function  decreaseCount() {
    count--;
    displayCount();
    checkvaluecount();
  } 
function checkvaluecount(){
    if (count===10){
        alert("unfloow");
 } else if (count===5){
    alert("delete app");
 }
}