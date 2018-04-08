abstract class Handler {

    section: Handler;

    setNextSection(section: Handler) {
        this.section = section;
    }

    abstract giveCash(money);
}

class SectionOne extends Handler {

    money = 200;
    giveCash(money) {
        if (this.checkCash(money)) {
            console.log('give cash from section one');
        }
        else {
            this.section.giveCash(money);
        }
    }

    checkCash(money) {
        if (money > this.money) {
            return false;
        }
        else {
            return true;
        }
    }

}

class SectionTwo extends Handler {

    money = 1200;

    giveCash(money) {
        if (this.checkCash(money)) {
            console.log('give cash from section two');
        }
        else {
            this.section.giveCash(money);
        }
    }

    checkCash(money) {
        if (money > this.money) {
            return false;
        }
        else {
            return true;
        }
    }


}

let money = 800;
let sectionOne : SectionOne = new SectionOne();
let sectionTwo : SectionTwo = new SectionTwo();

sectionOne.setNextSection(sectionTwo);

sectionOne.giveCash(money);