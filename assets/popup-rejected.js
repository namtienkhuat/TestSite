var finalHandleRejected = () => {

    const cta = document.querySelector(".cta");
    const popupRejected = document.querySelector(".popup__rejected");
    const acceptButton = document.querySelector(".popup__rejected-button");
    const noThanksButton = document.querySelector(".cta__button--decline");
    noThanksButton.addEventListener("click", () => {
        const cookie = document.cookie;
        console.log("111111");
        if (cookie) {
            const arr = cookie.split("=");
            const newDate = new Date(arr[1]);
            console.log(newDate);
            console.log(newDate.getTime());
            const dateTime = newDate.getTime();
            const tenSeconds = 10 * 1000;
            console.log("222222");
            const now = new Date().getTime();
            if (dateTime + tenSeconds > now) {
                return;
            }
            // new dateTime+10 > hien tai ==> k hien else hien

        cta.classList.add("hidden");
        setTimeout(() => {
            cta.style.display = "none";
            popupRejected.style.display = "block";
            setTimeout(() => {
                popupRejected.classList.add("show");
            }, 10);
        }, 300);
    });

    function closePopupRejected() {
        document.cookie = `timeOffLogin=${new Date()}`;
        popupRejected.classList.remove("show");
        setTimeout(() => {
            popupRejected.style.display = "none";
            cta.style.display = "flex";
            console.log("bbb");
            cta.classList.remove("hidden");
        }, 300);
    }

    acceptButton.addEventListener("click", closePopupRejected);
};

finalHandleRejected();
