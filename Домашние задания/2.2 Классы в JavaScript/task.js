class PrintEditionItem {
    _state = 100;
    type = null;

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }

    fix () { this.state *= 1.5; }

    set state (newState) {
        this._state = (newState > 100) ? 100 : newState;
    }
    
    get state () {
        return this._state;
    }
}


class Magazine extends PrintEditionItem {
    type = "magazine";

    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
    }
}

class Book extends PrintEditionItem {
    type = "book";

    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
    }
}

class NovelBook extends Book {
    type = "novel";

    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
    }
}

class FantasticBook extends Book {
    type = "fantastic";

    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
    }
}

class DetectiveBook extends Book {
    type = "detective";

    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
    }
}

//--------------------------------------------

class Library {
    books = [];

    constructor(name){ this.name = name; }

    addBook(book){
        if(book instanceof PrintEditionItem 
            && book.state > 30) this.books.push(book);
    }

    findBookBy(type, value){
        for(let i = 0; i < this.books.length; i++){
            let book = this.books[i];
            if(book[type] === value) return book;
        }

        return null;
    }

    giveBookByName(bookName){
        console.log(this.books);
        for(let i = 0; i < this.books.length; i++){
            if(this.books[i].name.toLowerCase() === bookName.toLowerCase()){
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
}

//--------------------------------------------

let library = new Library("Public Library");

library.addBook(new Book ("James Luceno", "Plagueis", 2012, 379));
library.addBook(new Book("Matthew Stover", "Shatterpoint", 2003, 406));
library.addBook(new Magazine("Claire McNuggets", "Vogue", 2025, 70));

console.log(library.findBookBy("releaseDate", 2003));
let plagueis = library.giveBookByName("Plagueis");
plagueis.state = 30;
plagueis.fix();
library.addBook(plagueis);
console.log(library);