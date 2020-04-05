import { Controller } from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {User} from "./user.entity";
import {Crud} from "@nestjsx/crud";

@Crud({
  model: {
    type: User,
  },
})
@Controller('users')
@ApiTags('users')
export class UsersController {}
