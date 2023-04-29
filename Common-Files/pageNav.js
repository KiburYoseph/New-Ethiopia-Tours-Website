const pageNumber = document.querySelectorAll(".pageNumber");
const list = document.querySelectorAll(".list");
const commentPageNumber = document.querySelectorAll(".commentPageNumber");
const commentList = document.querySelectorAll(".commentList");


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

commentPageNumber.forEach(commentPage => {
    commentPage.addEventListener("click", () => {
        let commentIndex = [...commentPageNumber].indexOf(commentPage);

        commentPageNumber.forEach(commentPage => {
            commentPage.style.color = "rgb(192, 192, 192)";
        })
        commentPage.style.color = "#0E3D95";

        commentList.forEach(aCommentList => {
            aCommentList.style.opacity = "0";
            setTimeout(()=> {
                delete aCommentList.dataset.activeCommentList;
                commentList[commentIndex].dataset.activeCommentList = true;
            setTimeout(()=> {
                    commentList[commentIndex].style.opacity = "1"
                 }
                 ,200);
             }
             ,200);
        })

    })
})