import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';


export type UserDocument = User & Document;

Schema({ collection: 'user' })
export class User {
    
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    _id: string;

    @Prop([String])
    firstName: string

    @Prop([String])
    lastName: string

    @Prop([String])
    password: string

    @Prop([String])
    email: string
}

export const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
});


// export const UserSchema = SchemaFactory.createForClass(User);