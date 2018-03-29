class Singleton {

    private static instance = new Singleton();

    private constructor() { }

    // private createInstance() 

    public accessInstance() {
        return Singleton.instance;
    }

}