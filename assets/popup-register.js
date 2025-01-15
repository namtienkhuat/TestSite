const cta = document.querySelector(".cta");
const popupLogin = document.querySelector(".popup__login");
const popupRegister = document.querySelector(".popup__register");
const popupContainer = document.querySelector(".popup__register-container");
const popupCloseIcon = document.querySelector(".popup__register-close");
const submitButton = document.querySelector(".register__button--submit");
const declineButton = document.querySelector(".register__button--decline");
const formRegister = document.getElementById("form__register");

formRegister.addEventListener("submit", (event) => {
    const email = document.getElementById("email__register").value;
    const password = document.getElementById("password__register").value;
    console.log("email: ", email);
    if (email && password) {
        document.cookie = `timeOffLogin=${new Date()}`;
    }
});
function closePopupLoginIcon() {
    popupRegister.classList.remove("show");
    setTimeout(() => {
        popupRegister.style.display = "none";
        cta.style.display = "flex";
        cta.classList.remove("hidden");
    }, 300);
}

function closePopupLogin() {
    document.cookie = `timeOffLogin=${new Date()}`;
    popupRegister.classList.remove("show");
    setTimeout(() => {
        popupRegister.style.display = "none";
        cta.style.display = "flex";
        cta.classList.remove("hidden");
    }, 300);
}

declineButton.addEventListener("click", () => {
    console.log("test3");
    popupRegister.classList.add("hidden");
    popupLogin.classList.remove("hidden");
    setTimeout(() => {
        popupRegister.style.display = "none";
        popupLogin.style.display = "block";
        setTimeout(() => {
            popupLogin.classList.add("show");
        });
    });
});

popupCloseIcon.addEventListener("click", closePopupLoginIcon);
submitButton.addEventListener("click", closePopupLogin);

window.addEventListener("click", (e) => {
    if (
        popupRegister.style.display === "block" &&
        !popupContainer.contains(e.target)
    ) {
        closePopupLogin();
    }
});
