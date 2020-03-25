`use strict`

var counter=0;


//this is the constructor 
function Items(order ,quantity){
    this.order=order ;
    this.quantity=quantity;
    Items.all.push(this);
}
Items.all=[];


var order1=[];
var quantity=0;
var table = document.getElementById('table');


function additems(event){
    event.prventDefault();
    
var handleSubmit =document.getElementById('submitItem');
handleSubmit.addEventListener('submit',additems);

var firstRow = document.createElement('tr');
table.appendChild(firstRow);
var td1=document.createElement('td');
td1.setAttribute('class',"tableheading");
td1.textContent ="Item";
firstRow.appendChild(td1);

var td2=document.createElement('td');
td2.textContent="Quantity";
td2.setAttribute('class',"tableheading");
firstRow.appendChild(td2);

for (var i=0 ;i<Items.length;i++){
order1=Items[i].order.value;    
var tr2 =document.createElement('tr');
table.appendChild(tr2);
var tdata=document.createElement('td');
tdata.textContent=order1;
}

}