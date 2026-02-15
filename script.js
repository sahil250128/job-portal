const applyButtons = document.querySelectorAll(".btn");

applyButtons.forEach(button => {
    if (button.innerText === "Apply") {
        button.addEventListener("click", (e) => {
            const jobTitle = e.target.parentElement.querySelector("h3").innerText;

            let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

            appliedJobs.push(jobTitle);

            localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

            alert("Applied for " + jobTitle);
        });
    }
});
