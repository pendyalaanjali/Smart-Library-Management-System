const form = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

// 👉 BOOK COLLECTION (MAIN STORAGE STRUCTURE)
let books = JSON.parse(localStorage.getItem("books")) || [];

// Load books when page opens
window.onload = function () {
    bookList.innerHTML = "";
    books.forEach((book, index) => addBookToTable(book, index));
};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const book = {
        name: document.getElementById("bookName").value,
        author: document.getElementById("author").value
    };

    // 👉 Add book to collection
    books.push(book);

    // Save to localStorage
    localStorage.setItem("books", JSON.stringify(books));

    addBookToTable(book, books.length - 1);
    form.reset();
});

// 👉 Add book to table UI
function addBookToTable(book, index) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>
            <button onclick="deleteBook(${index})">Delete</button>
        </td>
    `;

    bookList.appendChild(row);
}

// 👉 Delete book from collection
function deleteBook(index) {
    books.splice(index, 1); // remove from array

    localStorage.setItem("books", JSON.stringify(books));

    // refresh UI
    window.location.reload();
}