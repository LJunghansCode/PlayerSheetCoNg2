export class Skill {
    title: string;
    statName: string;
    profStatus: boolean;
    prof: number;
    constructor(title, statName, statusBool, prof) {
        this.title = title;
        this.statName = statName;
        this.profStatus = statusBool;
        this.prof = prof;
    }
    }
