document.getElementById('windows-11').addEventListener("click", () => {
    const startPage = document.querySelector(".start-page");
    
    if (startPage.style.display == "block") {
        startPage.style.display = "none"
    }
    else {
        startPage.style.display = "block"
    }

})