function BooksService() {
    var books = []

    function Book(config) {
        this.title = config.title.value
        this.price = config.price.value
        this.contact = config.contact.value
        this.condition = config.condition.value
        this.location = config.location.value
        this.description = config.description.value
        this.img = config.img.value
    }

    this.getBooks = function getBooks(cb) {
        if (!cb || typeof cb != 'function') { return console.error('WOah I need a cb to run') }
        // first task is to request the data from the server ASYNC
        // the data from the server
        // give the controller what it wants
        $.get(baseUrl)
            .then(res => {
                // second task is to update the local autos array with 
                books = res
                cb(books)
            })
            .fail(logError)
    }

    this.getBook = function getBook(id){
        for (var i = 0; i < books.length; i++) {
            var book = books[i];
            if (id == book.id){
                return book
            }
        }
    }

    his.addBook = function addBook(form, getBooks) {
        if (!form || !getBooks || typeof getBooks != 'function') { return console.error('Unable to add Book', 'bad parameters', form, getBooks) }
        var newBook = new Book(form)
        $.post(baseUrl, newBook)
            .then(getBooks)
            .fail(logError)
    }
}