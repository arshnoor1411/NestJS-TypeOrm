import { Column } from "typeorm";

export class User {
    @Column()
    Id: string

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    email: string
}
