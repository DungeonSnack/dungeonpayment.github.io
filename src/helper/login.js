import { endpointLogin } from "./../helper/url.js";
// console.log(endpointLogin);

document.querySelector(".login-form").addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Melakukan permintaan POST ke endpoint login tanpa menggunakan token
    const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    
    const responseData = await response.json();
    
    if (response.ok) {
        // Jika login berhasil, langsung pindah ke halaman index.html tanpa menyimpan token
        window.location.replace("/index.html");
        alert("Login berhasil");
        console.log(responseData);
        
    } else {
        // Tampilkan pesan error jika login gagal
        alert(responseData.message);
    }
});

function getUserDetails() {
    // Melakukan fetch tanpa menggunakan header Authorization
    return fetch(endpointLogin)
        .then((response) => response.json());
}


// document.querySelector(".login-form").addEventListener("submit", async function (event) {
//     event.preventDefault();
//     const formData = new FormData(this);
//     const data = Object.fromEntries(formData);
//     const response = await fetch("http://localhost:8080/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     });
//     const responseData = await response.json();
//     if (response.ok) {
//         localStorage.setItem("token", responseData.token);
//         window.location.replace("/index.html");
//         alert("percobaan berhasil");
//         console.log(responseData);
        
//     } else {
//         alert(responseData.message);
//     }
// });

// function getUserDetails() {
//     return fetch(endpointLogin, {
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//     }).then((response) => response.json());
// }