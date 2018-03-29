class House {
    room : number;
    floors: number;

    setRoom( room: number) {
        this.room = room;
    }

    setFloor( floors: number ) {
        this.floors = floors;
    }

}

abstract class HouseBuilder  {

    protected house: House;

    setHouse(house: House) {
        this.house = house;
    }

    getHouse() {
        return this.house;
    }

    abstract createRooms();
    abstract createFloors();

}

class Condo extends HouseBuilder {

    createRooms() {
        this.house.setRoom(30);
    }

    createFloors() {
        this.house.setFloor(15);
    }
}

class Mansion extends HouseBuilder {

    createRooms() {
        this.house.setRoom(10);
    }

    createFloors() {
        this.house.setFloor(2);
    }
}

class Engineer {
    private houseBuilder: HouseBuilder;

    setHouseBuilder( houseBuilder: HouseBuilder) {
        this.houseBuilder = houseBuilder;
    }

    getFinalizedHouse() {
        return this.houseBuilder.getHouse();
    }

    buildHouse() {
        this.houseBuilder.createRooms();
        this.houseBuilder.createFloors();
    }
}

let engineer = new Engineer();
let condoBuilder = new Condo();
let mansionBuilder = new Mansion();

engineer.setHouseBuilder(condoBuilder);
engineer.buildHouse();
engineer.getFinalizedHouse();

engineer.setHouseBuilder(mansionBuilder);
engineer.buildHouse();
engineer.getFinalizedHouse();



