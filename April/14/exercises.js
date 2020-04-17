class Book{
    constructor(title, author, copyright, isbn, numOfPages, numTimesCheckedOut, discarded){
        this.title=title;
        this.author=author;
        this.copyright=copyright;
        this.isbn=isbn;
        this.numOfPages=numOfPages;
        this.numTimesCheckedOut=numTimesCheckedOut;
        this.discarded=discarded;
    }
}

class HardCover extends Book{
    constructor(title, author, copyright, isbn, numOfPages, numTimesCheckedOut, discarded){
        super(title, author, copyright, isbn, numOfPages, numTimesCheckedOut, discarded);
    }
    disposeBook(){
        if(this.numTimesCheckedOut>1000){
            this.discarded=true;
        }
    }
}
class Paperback extends Book{
    constructor(title, author, copyright, isbn, numOfPages, numTimesCheckedOut, discarded, rating){
        super(title, author, copyright, isbn, numOfPages, numTimesCheckedOut, discarded);
        this.rating=rating;
    }
    disposeBook(){
        if(this.numTimesCheckedOut>100){
            this.discarded=true;
        }
    }
}
//Declare two objects, one from the Novel class and one from the Manual class.
let prideAndPrejudice= new Paperback('Pride and Prejudice', 'Jane Austen', 1813, '11111111111', 432, 1001, false, 5);
prideAndPrejudice.disposeBook();
console.log(prideAndPrejudice.rating);