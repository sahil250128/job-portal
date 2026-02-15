const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    if(button.innerText === "Apply"){
        button.addEventListener("click", () => {
            alert("Application Submitted Successfully!");
        });
    }
});
