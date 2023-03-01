
window.onload = () => {

    const buttons = document.getElementsByClassName("tri-button");
    const arr = [...buttons];

    arr.forEach((element, index) => {
        element.addEventListener("click", () => {
            if (element.getAttribute("name") === "web") {
                window.location = "https://harshbanjare.me"
                element.parentElement.style.backgroundColor = "#1c1c1c"

            } else if (element.getAttribute("name") == "web3") {
                window.location = "https://bafybeicbafdmtflzkvb34u5eoeqlwdexypjregyqihpxibc2e5iqkcmmea.ipfs.dweb.link/"
                element.parentElement.style.backgroundColor = "#1c1c1c"

            } else if (element.getAttribute("name") === "tor") {
                const isTor = confirm("Make sure you're on tor browser");
                if (isTor) {
                    window.location = "#"
                    element.parentElement.style.backgroundColor = "#1c1c1c"

                } else {
                    return;
                }
            }
            arr
                .filter(function (item) {
                    return item != element;
                })
                .forEach((item) => {
                    item.parentElement.style.backgroundColor = "transparent";
                });
        });
    });

}