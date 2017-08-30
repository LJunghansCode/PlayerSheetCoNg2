export class Skill {
    title: string;
    statName: string;
    profStatus: boolean;
    prof: number;
    constructor(title, statName, statusBool) {
        this.title = title;
        this.statName = statName;
        this.profStatus = statusBool;
    }
    }
