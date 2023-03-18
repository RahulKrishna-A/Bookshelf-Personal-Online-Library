let myLibrary = []

let view_book = document.querySelector(".view_book");
view_book.addEventListener("click", () => {
    scrollview()
});
let submit = document.querySelector("input[type=submit]");
submit.addEventListener("click", addBookToLibrary);
let add_book = document.querySelector(".add_book");
add_book.addEventListener("click", add_books)
let x = document.querySelector("#x");
x.addEventListener("click", remove_popup)
let bookspace_grid =document.getElementById("bookspace_grid");
function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.reads = read
}

function render(myLibrary){
    bookspace_grid.innerHTML="";
    for(let i=0;i<myLibrary.length;i++){
        // console.log(myLibrary[i]);
        let bookIN = document.createElement("div");
        if((i+1)%2!==0) {
            bookIN.innerHTML = `<p class="font_odd__title">${myLibrary[i].name}<p>
                <p class="font_odd__authors">${myLibrary[i].author}</p>
                <p class="font_odd__pages">${myLibrary[i].pages} Pages</p>`;
        }
        else{
            bookIN.innerHTML = `<p class="font_even__title">${myLibrary[i].name}<p>
                <p class="font_even__authors">${myLibrary[i].author}</p>
                <p class="font_even__pages">${myLibrary[i].pages} Pages</p>`;
        }
        bookspace_grid.append(bookIN);
    }

}
function remove_popup() {
    add_popup = document.querySelector(".main__bookSpace_popup");
    add_popup.classList.add("hidden");
}

function add_books() {
    scrollview();
    add_popup = document.querySelector(".main__bookSpace_popup");
    if (add_popup.classList.contains("hidden")) {
        add_popup.classList.remove("hidden")
    }
}

function addBookToLibrary(e) {
    e.preventDefault();
    let error_message = document.querySelector("#error_text");
    let bname = document.querySelector("#bname");
    let bauthor = document.querySelector("#bauthor");
    let bpages = document.querySelector("#bpage");
    if (bname.value === "" || bauthor.value === "" || bpages.value === "") {
        error_message.innerText = "Please fill out all the fields";
        return
    }
    remove_popup()
    let newBook = new Book(bname.value, bauthor.value, bpages.value);
    myLibrary.push(newBook);
    // console.log(myLibrary);
    render(myLibrary);
    document.querySelector("#popup__form").reset()
}

function scrollview() {
    let bookSpace = document.querySelector("#main__bookSpace");
    bookSpace.scrollIntoView()
}

