![img](/DOM%20JS/DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)

>## js code output
```js
// 2nd
// assignment1
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
```






