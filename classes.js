var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * User Class
 */
var User = /** @class */ (function () {
    /**
     * User constructor
     *
     * @param name
     * @param email
     * @param age
     */
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created : " + this.name);
    }
    /**
     * Returns user name
     */
    User.prototype.getName = function () {
        return this.name;
    };
    /**
     * Returns user email
     */
    User.prototype.getEmail = function () {
        return this.email;
    };
    /**
     * Returns user age
     */
    User.prototype.getAge = function () {
        return this.age;
    };
    /**
     *
     */
    User.prototype.payInvoice = function () {
        console.log(this.name + ' paid invoice');
    };
    return User;
}());
/**
 * Member Class
 */
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    /**
     * Member Constructor
     *
     * @param id
     * @param name
     * @param email
     * @param age
     */
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
// let umut = new User('Ümit UZ', 'umituz998@gmail.com', 24);
//
// console.log(umut.getName());
// console.log(umut.getEmail());
// console.log(umut.getAge());
var umitUZ = new Member(5, 'Ümit UZ', 'umituz998@gmail.com', 24);
umitUZ.payInvoice();
