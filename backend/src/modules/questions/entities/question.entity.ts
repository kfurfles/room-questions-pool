import { Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type QuestionDocument = Question & Document;
export class Question {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    _id: string;

    @Prop([String])
    name: string

    @Prop({ type: Boolean })
    answered: boolean
}

export const QuestionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    answered: { type: Boolean, required: false, default: false }
}, {
    timestamps: true
});