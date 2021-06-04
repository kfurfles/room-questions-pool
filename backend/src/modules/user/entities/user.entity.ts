import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import env from '@config/enviroments';
import {values} from '@config/providers/env.provider';
import { Log4jsFactory } from 'src/modules/logger/providers/log4js.provider';


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

UserSchema.post('save', (doc) => {
    const log4jsConfig = env[values.ENV]   
    Log4jsFactory(log4jsConfig).debug(`User: method{save}\n ${JSON.stringify(doc, null, 2)}`)
})
