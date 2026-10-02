function openInvitation() {
    document.querySelector(".welcome").style.display = "none";
    document.getElementById("invitation").classList.remove("hidden");
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
