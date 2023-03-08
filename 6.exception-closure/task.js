function parseCount(a) {
    let number = Number.parseFloat(a);
    if (isNaN(number)){
        throw new Error("Невалидное значение");
    }
    return number;
}

function validateCount(b) {
    try {
        return parseCount(b);
    } catch (error) {
        return error;
    }
}


class Triangle {
    constructor(a, b, c) {
        
        if ((a + b) < c || (a + c) < b || (b + c) < a){
            throw new Error("Треугольник с такими сторонами не существует");

        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        //const p = Triangle.perimeter / 2;
        const p = (this.a + this.b + this.c) / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }

}

function getTriangle(a, b, c) {

    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return Object({
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },

            get area() {
                return "Ошибка! Треугольник не существует";
            }
    });
    }

}