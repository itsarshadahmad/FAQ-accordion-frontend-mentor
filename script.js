const questionBtn = document.querySelectorAll("details");

questionBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log();
        if (e.target.classList[0] != "answer") {
            const imgIcon = element.children[0].children[1];
            imgIcon.classList.toggle("visible");
        }
    });
});
