const burger = document.querySelector(".burger");
const exitSideBar = document.querySelector(".exitSideBar");
const sideBar = document.querySelector(".sideBar");
const everything = document.querySelector(".everything");

burger.onclick = function () {
    sideBar.style.display = "flex";
    setTimeout(()=> {
        sideBar.style.width = "50%";
        sideBar.style.transform = "translateX(0%)"
     }
     ,10);
    everything.style.filter = "blur(4px)";
    document.body.style.overflowY = "hidden";
}

exitSideBar.onclick = function () {
    sideBar.style.width = "0%";
    sideBar.style.transform = "translateX(100%)"
    setTimeout(()=> {
        sideBar.style.display = "none";
     }
     ,100);
     everything.style.filter="blur(0)"
     document.body.style.overflowY = "auto";
}