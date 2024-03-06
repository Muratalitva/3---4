function validateForm() {
    const nameInput = document.getElementById("name");
    const passwordInput = document.getElementById("password");
    
    if (nameInput.value.trim() === "" && passwordInput.value.trim() === "") {
        alert("Заполните поля!");
        return false;
    }
    return true;
}

const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const password = formData.get("password");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
         name,
            password,
        }),
    });

    if (response.ok) {
        alert("Данные успешно отправлены!");
    } else {
        alert("Произошла ошибка при отправке данных!");
    }
});