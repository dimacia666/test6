class Car { 

    constructor(params) {
        this.weels = params.weels;
        this.motor = params.motor;
        console.log(params);
    }
}

const mazda = new Car({
    weels: "`22",
    motor: "2l",
});

const ford = new Car({
    weels: "`11",
    motor: "2.5l",
})

const bmw = new Car({
    weels: "44",
    motor: "5l",
})

console.log(ford);