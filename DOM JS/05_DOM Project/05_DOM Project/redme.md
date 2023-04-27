![img](Output/DOM%20P2%20SS.png)
>## project output
```js
// add 7th element
var last = document.createElement("a");
var  x= document.createTextNode("Chinese (7)");
last.appendChild(x);
document.querySelector('.tags-container :nth-child(2)').appendChild(last);

// add new div

var b = document.createElement('div');
b.className="card";
document.querySelector('.recipe-gallery').appendChild(b);


var c=document.createElement('h3');
var d=document.createTextNode("add 6th card here");
c.appendChild(d);
document.querySelector('.recipe-gallery :nth-child(6)').appendChild(c);


// addbutton
var e=document.createElement('a');
e.className ='btn';
var f=document.createTextNode('Pro Subscription');
e.appendChild(f);
document.querySelector(".button").appendChild(e);

// addcolor

let g = document.querySelectorAll(".recipe-name");
console.log(g);
for(let i=0; i<g.length ; i++){
    g[i].style.color="blueviolet";

}
let h = document.querySelectorAll(".recipe-disp");
console.log(h);
for(let i=0; i<h.length ; i++){
    h[i].style.color="blueviolet";

}
```