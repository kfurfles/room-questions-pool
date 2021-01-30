import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";
@Entity({ name: 'users' })
export class User {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    password: string

    @Column()
    email: string

    constructor(firstName: string, lastName: string, password: string, email: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
    }
}