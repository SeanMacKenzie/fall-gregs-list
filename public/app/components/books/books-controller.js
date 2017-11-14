function BooksController() {
    var booksService = new BooksService()

    var booksElem = document.getElementById('books-list')
    var booksFormElem = document.getElementById('add-book-form')
    var showBookButton = document.getElementById('show-book-button')

    function drawBooks() {
        var books = booksService.getBooks()
        var template = ''
        for (var i = 0; i < books.length; i++) {
            var book = books[i];
            template += `
            <div class="col-md-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h3>${book.title}</h3>
                        <h6>${book.location}</h6>
                    </div>
                    <div class="panel-body text-center">
                        <img src="${book.img}">
                        <h4>${book.condition}</h4>
                    </div>
                    <div class="panel-footer">
                        <h5>$ ${book.price}</h5>
                    </div>
                </div>
            </div>
                    
            `
        }
        booksElem.innerHTML = template
    }

    this.addBook = function addBook(event) {
        event.preventDefault()
        var form = event.target
        booksService.addBook(form)
        booksFormElem.classList.toggle('hidden', true)
        drawBooks()
        this.showAddBookForm()
    }
    var formstate = false

    this.showAddBookForm = function showAddBookForm() {
        if (formstate) {
            showBookButton.innerText = 'Add Listing'
            showBookButton.className = 'btn btn-info'
            booksFormElem.classList.add('hidden')
            formstate = false
        }else {
            showBookButton.innerText = 'Cancel'
            showBookButton.className = 'btn btn-danger'
            booksFormElem.classList.remove('hidden')
            formstate = true
        }
    }


    drawBooks()

}