export class Companion {
    name: string;
    traits: string;
    actions: string;
    size: string;
    type: string;
    alignment: string;
    armorClass: string;
    health: string;
    speed: string;
    strength: string;
    dexterity: string;
    constitution: string;
    intelligence: string;
    wisdom: string;
    charisma: string;
    challengeRating: string;
    senses: string;
    passivePerception: string;
    description: string;
    expandedTrigger: boolean;
    // tslint:disable-next-line:max-line-length
    constructor(name, traits, actions, size, type, alignment, armorClass, health, speed, strength, dexterity, constitution, intelligence, wisdom, charisma, challengeRating, senses, passivePerception, description) {
        this.name = name;
        this.traits = traits;
        this.actions = actions;
        this.size = size;
        this.type = type;
        this.alignment = alignment;
        this.armorClass = armorClass;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
        this.challengeRating = challengeRating;
        this.senses = senses;
        this.passivePerception = passivePerception;
        this.description = description;
        this.expandedTrigger = false;
    }
}
