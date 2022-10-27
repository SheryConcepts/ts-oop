import Person from "./person.js";
import inquirer from "inquirer";
import Student from "./student.js"

inquirer.prompt(
    [
        {
            type: "input",
            name: "question",
            message: "Type 1 if you like to talk and 2 if you dont",
            validate: (i) => {
                // if (yNumber(i) !== 1 || Number(i) !== 2) {
                if (typeof Number(i)  && (Number(i) === 1 || Number(i) === 2)){
                    return true;
                } else {
                    return "Please enter 1 or 2";
                }
            } 
        }
    ]
).then(
    ans => {
            let person = new Person();
            let answer = Number(ans.question);
            person.askQuestion(answer);
            console.log(`You are ${person.getPersonality()}`)
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "what is your name",
                }
            ]).then(
                a => {
                    const student = new Student(); 
                    student.Name = a.name;
                    student.askQuestion(Number(ans.question));
                    console.log(`Your name is ${student.Name} and your personality type is ${student.getPersonality()}`);
                }
            )
    }
)