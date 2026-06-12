const form = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const bookName = document.getElementById("bookName").value;
    const author = document.getElementById("author").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${bookName}</td>
        <td>${author}</td>
        <td><button onclick="deleteBook(this)">Delete</button></td>
    `;

    bookList.appendChild(row);

    form.reset();
});

function deleteBook(button) {
    button.parentElement.parentElement.remove();
}
