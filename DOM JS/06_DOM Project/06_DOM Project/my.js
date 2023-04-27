// add logo
document.querySelector("header :nth-child(1)").style.visibility ='hidden';
var b=document.createElement('img');
b.src = "https://ineuron.ai/images/ineuron-logo.png";
document.querySelector("header").appendChild(b);



// add icon

var c = document.createElement('div');
c.className = "footer_social_ico";
let e=document.querySelector('.footer_social').appendChild(c);
var d = document.createElement('a');
d.className = "fa-brands fa-linkedin ";
e.appendChild(d);


// add $10
let bb=document.querySelector('.app_price :nth-child(1)').innerText= "$10";