![img](/DOM%20JS/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)
>## JS code output
```js
// assignment 1

var d =document.createElement('a');
var e = document.createTextNode("Hire Me")
 d.appendChild(e);
var b = document.createElement('li');
b.appendChild(d);
document.querySelector("ul").appendChild(b);

```

![img](/DOM%20JS/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)
>## JS code output
```js
// assignment 2

document.querySelector(".search-field :nth-child(1)").placeholder = "Serch My Project";



```

![img](/DOM%20JS/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)
>## JS code output
```js
// assignment 3

var f = document.querySelector("p :nth-child(3)");
f.innerText='an Employe';
var g = document.querySelector("p :nth-child(5)");
g.innerText='iNeuron Intelligence Pvt Ltd';

```


![img](/DOM%20JS/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)
>## JS code output
```js
// assignment 4

var h = document.querySelector(".hero-right-section :nth-child(1)").src="https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";



```



![img](/DOM%20JS/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task5Output.png)
>## JS code output
```js
// assignment 5

var i = document.createElement('button');
i.innerText = 'Support Me';

document.querySelector('.hero-right-section-btns').appendChild(i);

```