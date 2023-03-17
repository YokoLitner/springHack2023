import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public fullName: string;

  @Column()
  public password: string;

  @Column()
  public department?: string;

  @Column()
  public jobTitle?: string;
}

export default User;
