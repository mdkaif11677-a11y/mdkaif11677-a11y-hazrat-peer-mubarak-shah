function openTab(tabId, btn) {
    let contents = document.getElementsByClassName("tab-content");
    let buttons = document.getElementsByClassName("tab-btn");

    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    document.getElementById(tabId).classList.add("active");
    btn.classList.add("active");
}
