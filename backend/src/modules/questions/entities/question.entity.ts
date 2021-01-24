import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";
export class Question {
    @Column()
    name: string;

    constructor(name: string){
        this.name = name?.toLowerCase()
    }
}