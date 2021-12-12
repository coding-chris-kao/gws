import { IamRole } from "../interfaces/iam-role";
import { Invoker } from "./invoker";

export class User {
  constructor(roles: IamRole[]) {
    this.setupRoles(roles);
  }
}

export interface User extends Invoker {}
