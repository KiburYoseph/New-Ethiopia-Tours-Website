const pageNumber = document.querySelectorAll(".pageNumber");
const list = document.querySelectorAll(".list");

pageNumber.forEach(page => {
    page.addEventListener("click", () => {
        let index = [...pageNumber].indexOf(page);

        pageNumber.forEach(page => {
            page.style.color = "white";
        })
        page.style.color = "black";

        list.forEach(aList => {
            aList.style.opacity = "0";
            setTimeout(()=> {
                delete aList.dataset.activeList
                list[index].dataset.activeList = true;
            setTimeout(()=> {
                    list[index].style.opacity = "1"
                 }
                 ,200);
             }
             ,200);
        })

    })
})