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

    @ObjectIdColumn()
    userId: string

    // constructor(name = '', questions: { name: string }[] = [], password, userId){
    //     this.name = name?.toLowerCase();
    //     this.userId = userId
    //     this.password = password || generate({ length: 10, numbers: true})
    //     this.questions = questions.map(question => {
    //         return new Question(question.name)
    //     });
    // }

    static createRoom(name = '', questions: { name: string }[] = [], password, userId) {
        const createdRoom = new Room()
        createdRoom.name = name?.toLowerCase();
        createdRoom.userId = userId
        createdRoom.password = password || generate({ length: 10, numbers: true})
        createdRoom.questions = questions.map(question => {
            return new Question(question.name)
        });

        return Room
    }
}
