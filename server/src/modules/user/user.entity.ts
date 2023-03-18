import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Role from './types/role.enum';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public fullname: string;

  @Column()
  public password: string;

  @Column({ nullable: true })
  public department?: string;

  @Column({ nullable: true })
  public position?: string;

  @Column({ nullable: true })
  @Exclude()
  public currentHashedRefreshToken?: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  public access_level: Role;
}

export default User;
