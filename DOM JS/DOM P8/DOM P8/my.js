// assignment 1
var a = document.querySelector(".container-fluid").style.backgroundColor = "white";


// assingment 2
document.querySelector(".col-lg-4 ").style.overflow="scroll";

// assingment 3


function showmenu()
{
    var b = document.querySelector('.nav :nth-child(1)');
    if (b.style.display == 'none') {
        b.style.display = 'block';
    } else {
        b.style.display = 'none';
    }
}

