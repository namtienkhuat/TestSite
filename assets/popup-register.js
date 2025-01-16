var finalHandleRegister = () => {
    const ctaRegister = document.querySelector(".cta");
    const popupLoginRegister = document.querySelector(".popup__login");
    const popupRegisterRegister = document.querySelector(".popup__register");
    const popupContainerRegister = document.querySelector(
        ".popup__register-container"
    );
    const popupCloseIconRegister = document.querySelector(
        ".popup__register-close"
    );
    const submitButtonRegister = document.querySelector(
        ".register__button--submit"
    );
    const declineButtonRegister = document.querySelector(
        ".register__button--decline"
    );
    const formRegisterElement = document.getElementById("form__register");

    formRegisterElement.addEventListener("submit", (event) => {
        const email = document.getElementById("email__register").value;
        const password = document.getElementById("password__register").value;
        console.log("email: ", email);
        if (email && password) {
            document.cookie = `timeOffLogin=${new Date()}`;
        }
    });

    function closePopupRegisterIcon() {
        popupRegisterRegister.classList.remove("show");
        setTimeout(() => {
            popupRegisterRegister.style.display = "none";
            ctaRegister.style.display = "flex";
            ctaRegister.classList.remove("hidden");
        }, 300);
    }

    function closePopupRegister() {
        document.cookie = `timeOffLogin=${new Date()}`;
        popupRegisterRegister.classList.remove("show");
        setTimeout(() => {
            popupRegisterRegister.style.display = "none";
            ctaRegister.style.display = "flex";
            ctaRegister.classList.remove("hidden");
        }, 300);
    }

    declineButtonRegister.addEventListener("click", () => {
        console.log("test3");
        popupRegisterRegister.classList.add("hidden");
        popupLoginRegister.classList.remove("hidden");
        setTimeout(() => {
            popupRegisterRegister.style.display = "none";
            popupLoginRegister.style.display = "block";
            setTimeout(() => {
                popupLoginRegister.classList.add("show");
            });
        });
    });

    popupCloseIconRegister.addEventListener("click", closePopupRegisterIcon);
    submitButtonRegister.addEventListener("click", closePopupRegister);

    window.addEventListener("click", (e) => {
        if (
            popupRegisterRegister.style.display === "block" &&
            !popupContainerRegister.contains(e.target)
        ) {
            closePopupRegister();
        }
    });
};
finalHandleRegister();
