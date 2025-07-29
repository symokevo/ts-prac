// Members: Types
class Person {
    name: string = '';
}

const person = new Person();
person.name = "Simon_r";

// Members: visibility 
// Class members are also given modifiers to affect their visibility.
// Modifiers: public, private, protected
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class Person2 {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person2 = new Person2("Osmon_ke");
console.log(person2.getName());