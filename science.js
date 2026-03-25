/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties 
// for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.

function participant(name, age, studyField) {
    return { name: name, age: age, studyField: studyField }
};
function participant(name, age, studyField) {
    return { name, age, studyField, }
};

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method
// named `displayInfo` that prints the participant's details using `this` and a template string.
const displayInfo = { ...participant };
/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function.
// Observe the behavior of `this` and explain your findings.
/*
 * Observations:
 * TODO: Explain here.
 */
const participantInfo = {
    name: 'Bob',
    age: 27,
    studyField: 'Math',
    info: () => {
        console.log(this);
        return '${this.name} hello!';
    }
};// 'this' will not show the object name in arrow function.

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo`
//  that takes a property name and value as arguments alongside
// an object and returns a new object with that property dynamically set.
function updateParticipantInfo() {
    const argument = Array.from(arguments);
    return argument.displayInfo((...participant) => {
        return updateParticipantInfo, name, age, studyField;
    });
};
