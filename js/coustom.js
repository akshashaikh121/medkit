// input search function
let input = document.getElementById("hidden");
function clickHandler() {
    input.classList.remove("display-none")


    document.getElementById("btn").classList.toggle("display-none")
    input.innerHTML = `
    <form class="flex-row" action=""> 
    <input type="text" placeholder=" search here">
    <button type="submit" onclick="visible()" class="btn"> Search</button>
    </form>`;
}
function visible() {
    document.getElementById("btn").classList.remove("display-none")
    input.classList.toggle("display-none")
}
// toggle function
let div = document.getElementById("toggle-div");
let show = () => {
    div.innerHTML = ` 
                 <ul >
                    <li><a href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li style="z-index:2;" onclick="dropdown()"  class="drop"> <a
                            style="position:relative; 
                            z-index:2;">Pages <img
                                src="img/fi_17808404.png"></a> </li>
                    <li id="drop"><a  href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <li id="ul"><button id="btn1" onclick="inputHandler()"><img src="img/search-2.png" class="icons"></button></li>
               
                       <li> <button><img src="img/cart.png" class="icons" alt=""></button></li>
                        </ul>`;
    document.getElementById("heroMargin").style = `margin-top:240px;`
    document.getElementById("heroMargin").classList.toggle("dropdown-margin")

    div.classList.toggle("display-none")
    let list = document.getElementById("list");
    list.classList.add("display-none")


}

function inputHandler() {
    let add = document.getElementById("ul");
    add.innerHTML += `<form class="flex-row" action=""> 
    <input type="text" placeholder=" search here">
    <button type="submit" onclick="visible()" class="btn"> Search</button>
    </form>`;
    let btn1 = document.getElementById("btn1")
    btn1.classList.toggle("display-none")
}
let hide = () => {
    // div.style =
    //     `display:none;`
    // document.getElementById("heroMargin").style = `margin-top:0px;`

}
// dropdown
function dropdown() {
    let list = document.getElementById("list");
    let drop = document.getElementById("drop");
    list.innerHTML = `
    <ol>
     <li> <a href="pages.html">Know More</a> </li>
      </ol>`;
    list.style = `transform: translateY(0px)`;
    list.classList.toggle("display-none");

    drop.classList.toggle("padding-top")
}



let body = document.getElementsByTagName("body");
let click = () => {
    list.style = `transform: translateY(30px) !important;`

}


function button1() {
    document.getElementById("button1").classList.toggle("color")
    document.getElementById("button2").classList.remove("color");
    document.getElementById("button3").classList.remove("color");
    document.getElementById("img1").src = "img/img-1.jpg";
    document.getElementById("span").innerHTML = `Our mission is to empower individuals on their health journey by providing reliable educational resources, actionable wellness insights, and expert guidance, enabling them to make informed and confident choices for a healthier life.`

}

function button2() {
    document.getElementById("button2").classList.add("color")
    document.getElementById("button1").classList.remove("color");
    document.getElementById("button3").classList.remove("color");
    document.getElementById("img1").src = "img/about/Rectangle 126.png";
    document.getElementById("span").innerHTML = `We're committed to supporting your health journey by offering valuable  educational resources,wellness insights, and expert advice to help you make informed decisions.`

}
function button3() {
    document.getElementById("button3").classList.toggle("color")
    document.getElementById("button1").classList.remove("color");
    document.getElementById("button2").classList.remove("color");
    document.getElementById("img1").src = "img/download.jpg";
    document.getElementById("span").innerHTML = `Our vision is to create a world where everyone has access to knowledge and support for their well-being, inspiring healthier lifestyles and informed decisions for a thriving, balanced life.`

}

let value = document.getElementById("valueChanger")
value.innerHTML = 1;
function incrimentValueHandler() {
    value.innerHTML = Number(value.innerHTML) + 1;
}
function decrimentValueHandler() {
    if (value.innerHTML > 1) {
        value.innerHTML = Number(value.innerHTML) - 1;
    }

}

function messageSubmit(){
    alert("your messages is submitted")
}
function showMessage ()  {
  document.getElementById("accordionImg1").setAttribute("src","img/contact/medical-plus.png")
  document.getElementById("accordionP1").innerHTML=`We offer a wide range of medical supplies, including prescription medications, over-the-counter products, supplements, and personal care items.`
}

function showMessage1 ()  {
  document.getElementById("accordionImg2").setAttribute("src","img/contact/medical-plus.png")
  document.getElementById("accordionP2").innerHTML=`We offer a wide range of medical supplies, including prescription medications, over-the-counter products, supplements, and personal care items.`
}
function showMessage2 ()  {
  document.getElementById("accordionImg3").setAttribute("src","img/contact/medical-plus.png")
  document.getElementById("accordionP3").innerHTML=`We offer a wide range of medical supplies, including prescription medications, over-the-counter products, supplements, and personal care items.`
}

function showMessage3 ()  {
  document.getElementById("accordionImg4").setAttribute("src","img/contact/medical-plus.png")
  document.getElementById("accordionP4").innerHTML=`We offer a wide range of medical supplies, including prescription medications, over-the-counter products, supplements, and personal care items.`
}
