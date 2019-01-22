import { StringFormat } from "@angular/fire/storage/interfaces";


// This is a model

export class Post {
    constructor(
    public author: string,
    public authorId: string,
    public content: string,
    public image: string,
    public published: Date,
    public title: string,
    ) {

    }
}
