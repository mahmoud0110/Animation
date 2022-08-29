let x, s, d,y;
x = 1;
let z=document.getElementById(`TE`);

show(x)

function next(n) {
 y=x+n;
    show(y);

}

function slide(n) {
    x = n;
    show(x);
}


function show(n) {
   
    let i;
    let s = document.getElementsByClassName(`myslide`);
    let d = document.getElementsByClassName(`dot`);
    
    for (i = 0; i < s.length; i++) {
        s[i].style.display = `none`;
    }
    for (i = 0; i < d.length; i++) {
        d[i].className = d[i].className.replace(` active`, ` `);
    }

    if(x>5){x=1;}
    else{}
    if (n < 1) { x = 5; }
    if (n > s.length) { x = 1; }

    s[x - 1].style.display = `block`;
    d[x - 1].className += ` active`;
    x++;
// setTimeout(show,4000);
z.placeholder=`   Enter Your Opinion...`;
}
setInterval(show,4000);
function enter(){
z.value=``;
z.placeholder = `   Thank you...`;
}



