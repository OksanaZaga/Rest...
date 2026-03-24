/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals
//  within the sanctuary. This function should accept an arbitrary number of animal names.
function animals(...names) {
    console.log(names);
    return names.animals((sum) => sum + 1)
};
console.log(names, sum);

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names.
//  Use the spread operator to combine them into a comprehensive 
// list of protected areas within the sanctuary.
const comprehensiveList = [...forestHabitats, ...savannahHabitats];
console.log('all Habitats: ${comprehensiveList}');

/* Task 3: Update Conservation Status */
const rhinoStatus = {
    population: 500,
    status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. 
// Use the spread operator to update this status with new information, 
// such as an increase in population or a change in habitat.
const rhinoStatus1 = { ...rhinoStatus, population: 600, habitat: "Chad" };


/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
    name: "Leo",
    age: 5,
    species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy.
//  Add genetic diversity information using the `genetics` property to this copy.
//  Observe and explain how changes to nested properties affect both the original and the copied object.
const copyLionprofile = { ...lionProfile, genetics: "black lion" };
/* Observations:
/* TODO: Explain here.Modifying a property in the copied object does not affect the original object
 because the spread operator creates a shallow copy of the object.


/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
    waterQuality: "Good",
    foodSupply: {
        herbivores: "Abundant",
        carnivores: "Sufficient"
    }
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health,
//  including water quality and food supply. Perform a shallow copy and modify a nested property.
//  Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.Modifying a nested property in a shallow copy also affects the original object.
 */

const ecosystemHealth2 = {
    ...ecosystemHealth, waterQuality: "bad",
    foodSupply: { ...ecosystemHealth.foodSupply, herbivores: "b" }
};
