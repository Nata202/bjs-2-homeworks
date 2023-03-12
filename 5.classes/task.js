class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix() {
        return this.state *= 1.5;
         
    }

  //  _state = 100;
    
    set state(newEdition) {
        this._state = newEdition;
        if (newEdition < 0) {
            this._state = 0;
        } else if (newEdition > 100) {
            this._state = 100;
        } else {
            this._state = this._state;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, state);
    this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null){
    super(author, name, releaseDate, pagesCount, state);
    this.type = "novel";
    }

}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "fantastic";
    }

}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "detective";
    }

}


class Library {
    constructor(name, books){
        this.name = name;
        this.books = [];

    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i][type] === value) {
                return this.books[i];
            } 
        }
        return null;
    }

    giveBookByName(bookName) {
        for(let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                 return  this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }
    

    addMark(mark, subject) {
        if (mark > 5 && mark < 2) {
            return;
        } else if (marks[subject] === null){
            this.marks.subject = [];
        } 
    }

    getAverageBySubject() {
        for(let i = 0; i < this.marks.length; i++) {
            if (this.marks[i][subject] === undefined) {
                return 0;
            } 
        }
        sum = this.marks.reduce((acc, marks) => acc + marks, 0);
        return sum / this.marks.length
    }

    getAverage() {
        Object.keys(this.marks);
        sum = this.marks.reduce((acc, marks) => acc + marks, 0);
        avg = sum / this.marks.length
        return avg / this.marks.length

    }
  }