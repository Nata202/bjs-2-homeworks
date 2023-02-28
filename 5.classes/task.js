class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type
    }
    fix() {
        let damagedEdition = state * 1.5;
        return damagedEdition
    }

    _state = 100;
    
    setState(newEdition) {
        if (newEdition < 0) {
            this._state = 0;
        } else if (newEdition > 100) {
            this._state = 100;
        } else {
            this._state;
        }
    }
    getState() {
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
    constructor(name, releaseDate, pagesCount, state = 100, author, type = null) {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
    super(name, releaseDate, pagesCount, state);
    this.type = "novel";
    }

}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, state);
    this.type = "fantastic";
    }

}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, state);
    this.type = "detective";
    }

}


class Library {
    constructor(name, books){
        this.name = '';
        this.books = [];

    }

    addBook(book) {
        let state = 100;
        if(state > 30) {
            book.push(books)
        }
    }

    findBookBy(type, value) {
        if(type === undefined && value === undefined) {
            return null;
        } else {
            return book
        }
    }

    giveBookByName(bookName) {
        if (bookName === undefined) {
            return null
        } else {
            delete this.bookName;
            return bookName
        }
    }
}

class Student {
    constructor(name) {
        this.name = name;
    }
    marksRepository = [];

    addMark(mark, subject) {
        if (mark <= 5 && mark > 2) {
            mark.push(marksRepository)
        } else if (marksRepository[subject] === undefined){
            subject = [];
        } else {
            return
        }
    }

    getAverageBySubject() {
        if (marksRepository[subject] === undefined) {
            return 0
        }
        sum = marks.reduce((acc, marks) => acc + marks, 0);
        return sum / marks.length
    }

    getAverage() {
        Object.keys(marksRepository);
        sum = marks.reduce((acc, marks) => acc + marks, 0);
        avg = sum / marks.length
        return avg / marksRepository.length

    }
  }