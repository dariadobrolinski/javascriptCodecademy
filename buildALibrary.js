class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(newIsCheckedOut) {
    this._isCheckedOut = newIsCheckedOut;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut
  }

  getAverageRating() {
    let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    let average = ratingsSum / this._ratings.length;
    return average;
  }

  addRating(newRating){
    this._ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();
let historyOfEverythingStatus = historyOfEverything.isCheckedOut;
console.log('Is A Short History of Nearly Everything checked out?', historyOfEverythingStatus);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
let historyOfEverythingRating = historyOfEverything.getAverageRating();
console.log('A Short History of Nearly Everything is rated', historyOfEverythingRating, 'out of 5');

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
let speedStatus = speed.isCheckedOut;
console.log('Is Speed checked out?', speedStatus);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
let speedRating = speed.getAverageRating();
console.log('Speed is rated', speedRating, "out of 5");