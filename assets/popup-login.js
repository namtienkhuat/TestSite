const cta = document.querySelector(".cta");
const popupLogin = document.querySelector(".popup__login");
const popupRegister = document.querySelector(".popup__register");
const popupContainer = document.querySelector(".popup__login-container");
const popupCloseIcon = document.querySelector(".popup__login-close");
const showMoreButton = document.querySelector(".cta__button--accept");
const submitButton = document.querySelector(".login__button--submit");
const declineButton = document.querySelector(".login__button--decline");
const formLogin = document.getElementById("form__login");

showMoreButton.addEventListener("click", () => {
    const cookie = document.cookie;
    if (cookie) {
        const arr = cookie.split("=");
        const newDate = new Date(arr[1]);
        const dateTime = newDate.getTime();
        const tenSeconds = 10 * 1000;
        const now = new Date().getTime();
        if (dateTime + tenSeconds > now) {
            return;
        }
        // new dateTime+10 > hien tai ==> k hien else hien
    }
    cta.classList.add("hidden");
    popupLogin.classList.remove("hidden");
    setTimeout(() => {
        cta.style.display = "none";
        popupLogin.style.display = "block";
        setTimeout(() => {
            popupLogin.classList.add("show");
        }, 10);
    }, 300);
});

formLogin.addEventListener("submit", (event) => {
    const email = document.getElementById("email__login").value;
    const password = document.getElementById("password__login").value;
    console.log("email: ", email);
    console.log("password: ", password);
    if (email && password) {
        document.cookie = `timeOffLogin=${new Date()}`;
    }
});

declineButton.addEventListener("click", () => {
    popupLogin.classList.add("hidden");
    popupRegister.classList.remove("hidden");
    setTimeout(() => {
        popupLogin.style.display = "none";
        popupRegister.style.display = "block";
        setTimeout(() => {
            popupRegister.classList.add("show");
        });
    });
});

function closePopupLoginIcon() {
    popupLogin.classList.remove("show");
    setTimeout(() => {
        popupLogin.style.display = "none";
        cta.style.display = "flex";
        cta.classList.remove("hidden");
    }, 300);
}

function closePopupLogin() {
    document.cookie = `timeOffLogin=${new Date()}`;
    popupLogin.classList.remove("show");
    setTimeout(() => {
        popupLogin.style.display = "none";
        cta.style.display = "flex";
        cta.classList.remove("hidden");
    }, 300);
}

popupCloseIcon.addEventListener("click", closePopupLoginIcon);
submitButton.addEventListener("click", closePopupLogin);

window.addEventListener("click", (e) => {
    if (
        popupLogin.style.display === "block" &&
        !popupContainer.contains(e.target)
    ) {
        closePopupLogin();
    }
});
