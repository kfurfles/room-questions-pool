import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";

@Entity({
    name: 'questions'
})
export class Question {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    question: string;

    constructor(name){
        this.question = name
    }
}