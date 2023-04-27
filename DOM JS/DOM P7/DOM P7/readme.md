![img](/DOM%20JS/DOM%20P7/DOM%20P7/ass7.1-after.png)
>## Output JS code
```js
// 1st q 
let b = document.querySelectorAll("a");

for(let i=1; i<b.length; i++){
     let c =b[i].innerText
     b[i].style. display="none";
    i++
}

```
![img](/DOM%20JS/DOM%20P7/DOM%20P7/ass7.2-after.png)
>## Output JS code

```js
// 2nd question
let c = document.querySelector(".main__form-input");
c.disabled=false;

let d = document.querySelector(".main__form-btn");
d.disabled=false;
```