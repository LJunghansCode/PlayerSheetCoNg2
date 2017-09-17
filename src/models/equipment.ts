export class Equipment {
    name: string;
    weight: number;
    armorClass: number;
    damage: number;
    stealth: string;
    type: string;
    range: string;
    itemType: string;
    description: string;
    constructor(name, weight, armorClass, damage, stealth, type, range, itemType, description) {
        this.name = name;
        this.weight = weight;
        this.damage = damage;
        this.stealth = stealth;
        this.type = type;
        this.range = range;
        this.itemType = itemType;
        this.description = description;
    }
}
