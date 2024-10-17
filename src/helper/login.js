// import { endpointLogin } from "/helper/url.js";
// console.log(endpointLogin);


document.querySelector(".login-form").addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (response.ok) {
        localStorage.setItem("token", responseData.token);
        window.location.replace("/index.html");
        alert("percobaan berhasil");
        console.log(responseData);
        
    } else {
        alert(responseData.message);
    }
});

function getUserDetails() {
    return fetch(endpointLogin, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    }).then((response) => response.json());
}