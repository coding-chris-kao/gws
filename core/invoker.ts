import { IamRole } from "../interfaces/iam-role";
import { LambdaFunction } from "../models/lambda-function";

export class Invoker {
  public roles: IamRole[] = [];

  protected setupRoles(roles: IamRole[]) {
    this.roles = roles;
  }

  public invoke(lambda: LambdaFunction) {
    lambda.execute(this);
  }
}
