import {Column, Entity} from 'typeorm';

@Entity()
export class User {
  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
