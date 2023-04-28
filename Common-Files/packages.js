const dropDownButton = document.querySelectorAll(".dropDownButton");
const dropDownContent = document.querySelectorAll(".dropDownContent");


dropDownButton.forEach(button => {
    button.addEventListener("click", () => {
        
        let index = [...dropDownButton].indexOf(button);
        
        if (dropDownButton[index].dataset.activeDropDown) {
            button.innerHTML = "&#43;";
            button.style.rotate = "0deg";
            button.style.animation = "shakeAnimation 300ms";
            dropDownContent[index].style.display = "none";
            delete dropDownButton[index].dataset.activeDropDown;
        }
        else {
            button.innerHTML = "&#8249;";
            button.style.rotate = "90deg";
            button.style.animation = "none";
            dropDownContent[index].style.display = "block";
            dropDownContent[index].style.animation = "dropDown 300ms forwards"
            dropDownButton[index].dataset.activeDropDown = true;
        }
    })
})