interface collection {
    createIterator();
}

interface iterator {
    hasNext();
    next();
}

class staffCollectionClass implements collection {

    staffArray: any[];
    constructor(staffArray:any[]) {
        this.staffArray = staffArray;
    }
    createIterator() {
        return new staffIteratorClass(this.staffArray);
    }
}

class staffIteratorClass implements iterator {

    staffArray: any[];
    index = 0;

    constructor(staffArray:any[]) {
        this.staffArray = staffArray;
    }

    hasNext() {
       if(this.index < this.staffArray.length){
           return true;
       }
       return false;
    }
    next() {
       this.index += 1;
    }

    get() {
        return this.staffArray[this.index];
    }
}

let array = ["Anna","Helen","James","Angela","Dean"];
let staffCollection : staffCollectionClass = new staffCollectionClass(array);
let staffIterator : staffIteratorClass = staffCollection.createIterator();

while(staffIterator.hasNext()) {
    console.log(staffIterator.get());
    staffIterator.next();
}
