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