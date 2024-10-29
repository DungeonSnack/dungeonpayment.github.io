//import { endpointRegis } from "./../helper/url";

document
  .querySelector(".signup-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    // Ambil data dari form
    const formData = new FormData(this);
    const data = {
      Nama: formData.get("nama"),
      No_HP: formData.get("no_hp"),
      Email: formData.get("email"),
      Password: formData.get("password"),
    };

    console.log("Form data:", data);

    try {
      // Lakukan request POST ke endpoint signup
      const response = await fetch("http://localhost:8080/regis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (!response.ok) {
        alert(responseData.message || "Registration failed.");
        return;
      }

      alert("Registration successful! Please log in.");
      window.location.replace("../login/login.html");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again.");
    }
  });
