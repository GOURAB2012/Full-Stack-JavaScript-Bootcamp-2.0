![img](/DOM%20JS/04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)

>output JavascrScript

```js
// change backgriund color
let v = document.getElementById("part");
v.style.backgroundColor = "#ec9b3b";

let next1 = document.querySelector(".clash-card__unit-stats--archer");
next1.style.backgroundColor = "#d04976";

let next2 = document.querySelector(".clash-card__unit-stats--giant");
next2.style.backgroundColor = "#de7b09";

let next3 = document.querySelector(".clash-card__unit-stats--goblin");
next3.style.backgroundColor = "#71a32a";

let next4 = document.querySelector(".clash-card__unit-stats--wizard");
next4.style.backgroundColor = "#309eff";


// text color

let texts =document.querySelectorAll("div.stat");

for(let i=0; i< texts.length; i++){
texts[i].style.color = "white";

};

let text1 = document.querySelectorAll(".stat-value");

for(let i=0; i<text1.length; i++){

    text1[i].style.color = "white";
}

// Character2

let Character2 = document.querySelector("#Character2");

Character2.innerText = "The Archer";

// character4
let Character4 = document.querySelector('.goblin :nth-child(3)');
console.log(Character4);

Character4.innerText = "The Goblin";
```