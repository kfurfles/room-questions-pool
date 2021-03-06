import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { QuestionSchema } from 'src/modules/questions/entities/question.entity';

export type RoomDocument = Room & Document;

Schema({ collection: 'rooms' })
export class Room {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    _id: string;

    @Prop([String])
    name: string

    @Prop([String])
    password: string

    @Prop({ type: QuestionSchema })
    questions: string

    @Prop([String])
    userId: string
}

export const RoomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    questions: QuestionSchema,
    userId: { type: String, required: true },
});


// export const UserSchema = SchemaFactory.createForClass(User);