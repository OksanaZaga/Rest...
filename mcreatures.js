//- Use the **`find`** method to locate the first creature of the "Water" type and log its name to the console.
//- Use the **`findIndex`** method to locate the index of the "Griffin" in the mythical creatures array and log it to the console.
//- Use the **`find`** method to locate the first creature last seen in "Enchanted Forest".
const mythicalCreatures = [
    { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
    { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
    { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
    { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
    { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" }
];

const WaterCreature = mythicalCreatures.find(
    function (creature) {
        return creature.type === "Water";
    }
);
console.log(WaterCreature.name);

const griffinIndex = mythicalCreatures.findIndex(
    function (creature) {
        return creature.name === "Griffin";
    }
);
console.log(griffinIndex);

const enchantedForestCreature = mythicalCreatures.find(
    function (creature) {
        return creature.lastSeen === "Enchanted Forest";
    }
);
console.log(enchantedForestCreature.name);