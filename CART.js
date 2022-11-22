
document.getElementById("btn").setAttribute('onclick','myFunction()');
function  deleteFunction(clicked){
    var removebtn = clicked.target.parentNode; 
    var row = removebtn.parentNode; 
    row.parentNode.removeChild(row);
};
function myFunction() {
let productName=document.getElementById('product-name').value;
let productPrice=Number(document.getElementById('price').value);
let productNumber=Number(document.getElementById('quantity').value);
let total=productNumber*productPrice;
if (productName !=""&&productPrice !=""&&productNumber !=""&&Number.isInteger(productPrice) && productPrice > 0&&Number.isInteger(productNumber) && productNumber > 0)
{document.getElementById('products').innerHTML+=`<tr><td>${productName}</td><td>${productPrice}$</td><td>${productNumber}</td><td>${total}$</td><td><button onclick="deleteFunction(event)">remove</button></td></tr>`}
else
{alert ("check Product name , Price & Quantity again please");}
};

