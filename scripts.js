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

let bookspace_grid = document.getElementById("bookspace_grid");

function RemoveBook(ind) {
    myLibrary.splice(ind, 1);
    render(myLibrary);
}

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

Book.prototype.reads = 0;

function render(myLibrary) {
    bookspace_grid.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {

        let bookIN = document.createElement("div");
        if ((i + 1) % 2 !== 0) {
            bookIN.innerHTML = `<p class="font_odd__title">${myLibrary[i].name}<p>
                <p class="font_odd__authors">${myLibrary[i].author}</p>
                <p class="font_odd__pages">${myLibrary[i].pages} Pages</p>
                <svg onclick="RemoveBook(${i})" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="x_books">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <div class="toggle_read">
                   <p>READ?</p>
                   ${myLibrary[i].reads ? `<div onClick="togglers(${i})" class="toggle_container class${i} toggled">
                <div class="toggler class${i} toggled"></div>
            </div>`:` <div onclick="togglers(${i})" class="toggle_container class${i}">
                       <div class="toggler class${i}"></div>
                   </div>`}
                   
                </div>
                `;


        } else {
            bookIN.innerHTML = `<p class="font_even__title">${myLibrary[i].name}<p>
                <p class="font_even__authors">${myLibrary[i].author}</p>
                <p class="font_even__pages">${myLibrary[i].pages} Pages</p>
                <svg onclick="RemoveBook(${i})" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="x_books" >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <div class="toggle_read">
                    <p>READ?</p>
                    ${myLibrary[i].reads ? `<div onClick="togglers(${i})" class="toggle_container class${i} toggled">
                    <div class="toggler class${i} toggled"></div>
                    </div>` : ` <div onclick="togglers(${i})" class="toggle_container class${i}">
                       <div class="toggler class${i}"></div>
                   </div>`}
                  </div>`;

        }
        bookspace_grid.append(bookIN);
    }

}

function togglers(ind) {
    let toggle_container = document.querySelector(`.toggle_container.class${ind}`);
    let toggler = document.querySelector(`.toggler.class${ind}`);
    toggle_container.classList.toggle("toggled");
    toggler.classList.toggle("toggled");
    if(myLibrary[ind].reads === 1){
        myLibrary[ind].reads = 0;
    }else{
        myLibrary[ind].reads = 1;
    }

    // console.log(toggle_container);
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

