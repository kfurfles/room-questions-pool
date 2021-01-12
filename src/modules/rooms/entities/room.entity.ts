import { generate } from "generate-password";
import { Question } from "src/modules/questions/entities/question.entity";
import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@Entity({
    name: 'rooms'
})
export class Room {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column(() => Question)
    questions: Question[];

    constructor(name = '', questions: { name: string }[] = [], password){
        this.name = name?.toLowerCase();
        this.password = password || generate({ length: 10, numbers: true})
        this.questions = questions.map(question => {
            return new Question(question.name)
        });
    }
}
