var a=Math.random();
a=a*6;
a=Math.floor(a);
a=a+1;
var b=Math.random();
b=b*6;
b=Math.floor(b);
b=b+1;
if(a===1)
{
    document.querySelector(".p1").innerHTML="<img class=\"Dice\" src=\"dice1.png\" alt=\"he\">";
}
if(a===2)
{
    document.querySelector(".p1").innerHTML="<img class=\"Dice\" src=\"dice2.png\" alt=\"he\">";
}
if(a===3)
{
    document.querySelector(".p1").innerHTML="<img class=\"Dice\" src=\"dice3.png\" alt=\"he\">";
}
if(a===4)
{
    document.querySelector(".p1").innerHTML="<img class=\"Dice\" src=\"dice4.png\" alt=\"he\">";
}
if(a===5)
{
    document.querySelector(".p1").innerHTML="<img class=\"Dice\" src=\"dice5.png\" alt=\"he\">";
}
if(a===6)
{
    document.querySelector(".p1").innerHTML="<img class=\"Dice\" src=\"dice6.png\" alt=\"he\">";
}
if(b===1)
{
    document.querySelector(".p2").innerHTML="<img class=\"Dice\" src=\"dice1.png\" alt=\"he\">";
}
if(b===2)
{
    document.querySelector(".p2").innerHTML="<img class=\"Dice\" src=\"dice2.png\" alt=\"he\">";
}
if(b===3)
{
    document.querySelector(".p2").innerHTML="<img class=\"Dice\" src=\"dice3.png\" alt=\"he\">";
}
if(b===4)
{
    document.querySelector(".p2").innerHTML="<img class=\"Dice\" src=\"dice4.png\" alt=\"he\">";
}
if(b===5)
{
    document.querySelector(".p2").innerHTML="<img  class=\"Dice\" src=\"dice5.png\" alt=\"he\">";
}
if(b===6)
{
    document.querySelector(".p2").innerHTML="<img class=\"Dice\" src=\"dice6.png\" alt=\"he\">";
}

if(a===b)
{
    document.querySelector(".ip2 img").classList.remove("hide");
    document.querySelector(".ip1 img").classList.remove("hide");
    document.querySelector("h1").textContent="Draw!!!";
}
if(a>b)
{
    document.querySelector(".ip1 img").classList.remove("hide");
    document.querySelector("h1").textContent="Player1  Wins!";
}
if(a<b)
{
    document.querySelector(".ip2 img").classList.remove("hide");
    document.querySelector("h1").textContent="Player2  Wins!";
}
