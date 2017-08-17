export class Note {
    title: string;
    keyWords: string[];
    content: string;
    constructor(title, keyWords, content) {
        this.title = title;
        this.keyWords = keyWords;
        this.content = content;
    }
}
