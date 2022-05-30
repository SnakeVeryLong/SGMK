import { userInfo } from 'os';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  
  @ApiProperty()
  @Column()
  firstName: string;
 
  @ApiProperty()
  @Column()
  lastName: string;

  @ApiProperty()
  @Column({ default: true })
  isActive: boolean;
}
