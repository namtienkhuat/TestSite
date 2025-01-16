var finalHandleLogin = () => {
    const ctaLogin = document.querySelector(".cta");
    const popupLoginLogin = document.querySelector(".popup__login");
    const popupRegisterLogin = document.querySelector(".popup__register");
    const popupContainerLogin = document.querySelector(
        ".popup__login-container"
    );
    const popupCloseIconLogin = document.querySelector(".popup__login-close");
    const showMoreButtonLogin = document.querySelector(".cta__button--accept");
    const submitButtonLogin = document.querySelector(".login__button--submit");
    const declineButtonLogin = document.querySelector(
        ".login__button--decline"
    );
    const formLoginElement = document.getElementById("form__login");

    showMoreButtonLogin.addEventListener("click", () => {
        const cookie = document.cookie;
        console.log("111111", cookie);
        if (cookie) {
            const arr = cookie.split("=");
            const newDate = new Date(arr[1]);
            const dateTime = newDate.getTime();
            const tenSeconds = 10 * 1000;
            const now = new Date().getTime();
            if (dateTime + tenSeconds > now) {
                return;
            }
            // new dateTime+10 > hiện tại ==> không hiển thị else hiển thị
        }
        ctaLogin.classList.add("hidden");
        popupLoginLogin.classList.remove("hidden");
        setTimeout(() => {
            ctaLogin.style.display = "none";
            popupLoginLogin.style.display = "block";
            setTimeout(() => {
                popupLoginLogin.classList.add("show");
            }, 10);
        }, 300);
    });

    formLoginElement.addEventListener("submit", (event) => {
        const email = document.getElementById("email__login").value;
        const password = document.getElementById("password__login").value;
        console.log("email: ", email);
        console.log("password: ", password);
        if (email && password) {
            document.cookie = `timeOffLogin=${new Date()}`;
        }
    });

    declineButtonLogin.addEventListener("click", () => {
        popupLoginLogin.classList.add("hidden");
        popupRegisterLogin.classList.remove("hidden");
        setTimeout(() => {
            popupLoginLogin.style.display = "none";
            popupRegisterLogin.style.display = "block";
            setTimeout(() => {
                popupRegisterLogin.classList.add("show");
            });
        });
    });

    function closePopupLoginIconLogin() {
        popupLoginLogin.classList.remove("show");
        setTimeout(() => {
            popupLoginLogin.style.display = "none";
            ctaLogin.style.display = "flex";
            ctaLogin.classList.remove("hidden");
        }, 300);
    }

    function closePopupLoginLogin() {
        document.cookie = `timeOffLogin=${new Date()}`;
        popupLoginLogin.classList.remove("show");
        setTimeout(() => {
            popupLoginLogin.style.display = "none";
            ctaLogin.style.display = "flex";
            ctaLogin.classList.remove("hidden");
        }, 300);
    }

    popupCloseIconLogin.addEventListener("click", closePopupLoginIconLogin);
    submitButtonLogin.addEventListener("click", closePopupLoginLogin);

    window.addEventListener("click", (e) => {
        if (
            popupLoginLogin.style.display === "block" &&
            !popupContainerLogin.contains(e.target)
        ) {
            closePopupLoginLogin();
        }
    });
};

finalHandleLogin();
