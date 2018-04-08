interface OldSystemInterface {
    doInOldWay();
}

interface NewSystemInterface {
    doInNewWay();
}

class OldSystem implements OldSystemInterface {
    doInOldWay() {
        console.log('do in an old way');
    }
}

class NewSystem implements NewSystemInterface {
    doInNewWay() {
        console.log('do in a new way');
    }
}

class SystemAdapter implements NewSystemInterface {

    private newSystem: NewSystem;

    constructor() {
    }

    doInNewWay() {
        this.newSystem.doInNewWay();
    }
}

let adapter : SystemAdapter = new SystemAdapter();
adapter.doInNewWay();

