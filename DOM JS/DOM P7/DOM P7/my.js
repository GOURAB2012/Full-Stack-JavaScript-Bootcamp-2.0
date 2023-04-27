// 1st q 
let b = document.querySelectorAll("a");

for(let i=1; i<b.length; i++){
     let c =b[i].innerText
     b[i].style. display="none";
    i++
}

// 2nd question
let c = document.querySelector(".main__form-input");
c.disabled=false;

let d = document.querySelector(".main__form-btn");
d.disabled=false;