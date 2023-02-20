function parseCount(a) {
    const errorA = new Error("Невалидное значение");
    if (Number.parseFloat(a) === isNaN){
        throw errorA;
    }
    return Number.parseFloat(a);
}

function validateCount(b) {
    function parseCount(){
        if ("Если распарсить удаётся успешно") {
            return b;
        } else {
            return errorA;
        }
    }
}

class Triangle {
    constructor(a, b, c) {
        const errorB = new Error("Треугольник с такими сторонами не существует");
        if ((a + b) < c || (a + c) < b || (b + c) < a){
            throw errorB;
        }
    }

    get perimeter() {
        return a + b + c;
    }

    get area() {
        const p = (1 / 2) * (a + b + c);
        const S = Math.sqrt(p(p - a) * (p - b) * (p - c));
        return S.toFixed(3);
    }

}

function getTriangle(a, b, c) {
    try {
        getTriangle(1, 2, 3)
    } catch (errorB) {
        return {get: area, get: perimeter, }
    } finally {
        let text = "Ошибка! Треугольник не существует";
        return text;
    }
}