const profileData = {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    city: "New York"
};




profileData.details = function() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old and lives in ${this.city}`;
};

console.log(profileData.details());




function wordConverter(words, suffix) {
    return words.map(word => word + suffix);
}

let adjectives = ["smart", "kind", "sweet", "small", "clear"];
console.log(wordConverter(adjectives, "er"));




function calculateHours(hours) {
    return hours.reduce((total, day) => total + (day.end - day.start), 0);
}

const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
];

console.log(calculateHours(hourTracking));




class Course {
    constructor(teacher, type, number) {
        this.teacher = teacher;
        this.type = type;
        this.number = number;
    }

    spaceNeeded() {
        return this.number * 2;
    }

    details() {
        return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`;
    }
}

const course = new Course("John", "web development", 22);
console.log(course.spaceNeeded());
console.log(course.details());




function validPin(pin) {
    if (/^\d{4}$/.test(pin) && pin[pin.length - 1] % 2 === 0 && pin[0] !== pin[pin.length - 1]) {
        return true;
    }
    return false;
}

console.log(validPin("1234"));
console.log(validPin("1235"));
console.log(validPin("12ww"));
console.log(validPin("12.4"));
console.log(validPin("-234"));
console.log(validPin("12345"));
console.log(validPin("2222"));
console.log(validPin("2224"));