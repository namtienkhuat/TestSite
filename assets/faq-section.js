const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector("i.fa-solid.icon");

        questions.forEach((q) => {
            const otherAnswer = q.nextElementSibling;
            const otherIcon = q.querySelector("i.fa-solid.icon");

            if (otherAnswer.style.display === "block" && q !== question) {
                otherAnswer.style.display = "none";
                q.style.removeProperty("background-color");
                q.style.removeProperty("color");
                otherIcon.className = "fa-solid fa-plus icon";
            }
        });

        if (answer.style.display === "none" || !answer.style.display) {
            answer.style.display = "block";
            question.style.backgroundColor = "#118B50";
            question.style.color = "#f4f4f4";
            icon.className = "fa-solid fa-minus icon";
        } else {
            answer.style.display = "none";
            question.style.removeProperty("background-color");
            question.style.removeProperty("color");
            icon.className = "fa-solid fa-plus icon";
        }
    });
});
