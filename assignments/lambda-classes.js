
//CLASSES//


class Person  {
    constructor(personAttr) {
    this.name = personAttr.name;
    this.age = personAttr.age;
    this.location = personAttr.location;
    }
    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}


class Instructor extends Person {

    constructor(instructorAttr){
    super(instructorAttr);
    this.specialty = instructorAttr.specialty;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase; 
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student,subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
      //QUESTION 1: I can call student.name and when logging the Keiran Instructor I can link it here, not sure exactly how given that Student and Instructor are siblings, I dont realize why Instructor is having acces to the jose student, but it is.  Second part of this question is, how can I call on a specific subject out of the favorite subjects array in here, without having to do jose.fabSubjects[numberofsubject] .
    }
}


class Student extends Instructor {

    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
        listSubjects(){
          console.log(this.favSubjects);
        }
        PRAssignment(subject){
            console.log(`${this.name} has submited a PR for ${subject}`);
        }
        sprintChallenge(subject){
            console.log(`${this.name} has begun sprint challenge on ${subject}`);
        }
}


class ProjectManager extends Person {

    constructor(ProjectManagerAttr) {
        super(ProjectManagerAttr);
        this.gradClassName = ProjectManagerAttr.gradClassName;
        this.favInstructor = ProjectManagerAttr.favInstructor;
        
    }
        standUp(channel){
          console.log(`${this.name} announces to ${channel}, @channel standy times!`);
        }
        debugsCode(student, subject){
            console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
        }
}




//Student Objects//

const jose = new Student({
  age: 32,
  name: 'Jose',
  location: 'Chile',
  previousBackground: 'Lawyer',
  className: 'WEB PT10',
  favSubjects: ['HTML', 'CSS', 'JavaScript'],
  
});


const dylan = new Student({
  age: 30,
  name: 'Dylan',
  location: 'USA',
  previousBackground: 'Coder',
  className: 'WEB PT10',
  favSubjects: ['React', 'Node', 'Python'], 
})


//Instructor Objects//

const keiran = new Instructor({
  age: 30,
  name: 'Keiran',
  location: 'USA',
  specialty: 'Teaching Code',
  favLanguage: 'JS', 
  catchPhrase: 'for the Horde'
})

const edward = new Instructor({
  age: 31,
  name: 'Edward',
  location: 'USA',
  specialty: 'TL SSJ',
  favLanguage: 'Java',
  catchPhrase: 'sure thing'
})


// PM Objects //

const richard = new ProjectManager({
  age: 28,
  name: 'Richard',
  location: 'USA',
  gradClassName: 'WEB 20',
  favInstructor: 'Dan',
})

const mikis = new ProjectManager({
  age: 29,
  name: 'Mikis',
  location: 'USA',
  gradClassName: 'WEB 20',
  favInstructor: 'Joe',
})


console.log("----------------------------------------------------")//For separation purposes between the 2 homeworks.

jose.PRAssignment(jose.favSubjects[2]);
dylan.PRAssignment(dylan.favSubjects[1]);

keiran.grade(jose, jose.favSubjects[0]);
edward.demo(edward.favLanguage);

richard.standUp("webpt10")
mikis.debugsCode(jose, jose.favSubjects[2]);




// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
