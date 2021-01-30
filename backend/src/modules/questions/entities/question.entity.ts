import { Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type QuestionDocument = Question & Document;
export class Question {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    _id: string;

    @Prop([String])
    name: string
}

export const QuestionSchema = new mongoose.Schema({
    name: { type: String, required: true }
});


// export const UserSchema = SchemaFactory.createForClass(User);

// import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";
// export class Question {
//     @Column()
//     name: string;

//     constructor(name: string){
//         this.name = name?.toLowerCase()
//     }
// }