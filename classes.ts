/**
 * User Interface
 */
interface UserInterface {
    name: string;
    email: string;
    age: number;
    payInvoice();
}

/**
 * User Class
 */
class User implements UserInterface {
    /**
     * User name
     * @private
     */
    name: string;

    /**
     * User email
     * @private
     */
    email: string;

    /**
     * User age
     * @private
     */
    age: number;

    /**
     * User constructor
     *
     * @param name
     * @param email
     * @param age
     */
    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log(`User Created : ${this.name}`);
    }

    /**
     * Returns user name
     */
    public getName() {
        return this.name;
    }

    /**
     * Returns user email
     */
    public getEmail() {
        return this.email;
    }

    /**
     * Returns user age
     */
    public getAge() {
        return this.age;
    }

    /**
     *
     */
    public payInvoice() {
        console.log(this.name + ' paid invoice');
    }
}

/**
 * Member Class
 */
class Member extends User {
    /**
     * Member id
     * @private
     */
    private id: number;

    /**
     * Member Constructor
     *
     * @param id
     * @param name
     * @param email
     * @param age
     */
    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice();
    }
}

// let umut = new User('Ümit UZ', 'umituz998@gmail.com', 24);
//
// console.log(umut.getName());
// console.log(umut.getEmail());
// console.log(umut.getAge());

let umitUZ: User = new Member(5, 'Ümit UZ', 'umituz998@gmail.com', 24);
umitUZ.payInvoice();
