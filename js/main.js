var menutoggle=document.getElementById("menu-btn");
var menu=document.getElementById("menu");

    menutoggle.addEventListener("click",()=>{
        menu.classList.toggle("active");
    })



/********           Light And Dark Mode      ****************** */
var lightmode=document.getElementById("light-mode"),
    darkmode=document.getElementById("dark-mode");

    lightmode.addEventListener("click",()=>{
        lightmode.classList.remove("active");
        darkmode.classList.add("active");
        document.body.classList.add("light-theme");
        console.log("tes");
    })

    darkmode.addEventListener("click",()=>{
        lightmode.classList.add("active");
        darkmode.classList.remove("active");
        document.body.classList.remove("light-theme");
        console.log("tes");
    })