interface TranslateInterface {
    translate(book : Book);
}



class Book {
    book : any;
    constructor(book) {
        this.book = book;
    }

    getBook() {
        return this.book;
    }
}

class TranslateFrench implements TranslateInterface {
    translate(book : Book) {
        console.log("translated to french language");
    }
}

class TranslateBurmese implements TranslateInterface {
    translate(book : Book) {
        console.log("translated to burmese language");
    }
}

let book: Book = new Book("english book");

let translateFrench: TranslateFrench;
translateFrench.translate(book);

let translateBurmese: TranslateBurmese;
translateBurmese.translate(book);