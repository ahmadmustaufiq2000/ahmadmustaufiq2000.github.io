document.addEventListener("DOMContentLoaded", function () {
    const openCard = document.querySelector(".open");
    const atasSection = document.getElementById("atas");
    const messageSection = document.querySelector(".message");

    // Event listener for opening the card
    openCard.addEventListener("click", function () {
        openCard.style.display = "none";
        atasSection.classList.remove("hidden");
        messageSection.classList.remove("hidden");

        Swal.fire({
            title: 'Surprise!',
            text: 'Scroll down to see your special message!',
            icon: 'info',
            confirmButtonText: 'Okay!'
        });
    });

    // Initialize AOS (Animate On Scroll)
    AOS.init({ once: true });
});
