function Student(name, gender, age) {    
  let student1 = new Student('Natasha', 'Женский', 24);
  let student2 = new Student('Nikita', 'Мужской', 21);
  let student3 = new Student('Olga', 'Женский', 27);
  Student.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if ( this.marks.length === 0) {
        console.log('Пользователь отчислен')
        } else {
        this.marks.push(marks); 
        }
}

Student.prototype.getAverage = function () {
    if ( this.marks.length === 0 || this.marks === undefined) {
        return 0;
        } else {
        const sum = marks.reduce((acc, marks) => acc + marks, 0);
        return sum / marks.length
        }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
