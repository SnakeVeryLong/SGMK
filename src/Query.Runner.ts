import { Injectable } from "@nestjs/common";
import { Connection } from "typeorm";
import { User } from "./entity/user.entity";

@Injectable()
export class UsersService {
  constructor(private connection: Connection) {

  }
}