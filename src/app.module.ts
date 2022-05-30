import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Connection } from 'typeorm';
import { UsersModule } from './Users.Module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dmosk',
      password: '123456',
      database: 'test',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }), UsersModule
    ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
