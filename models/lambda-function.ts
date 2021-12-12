import { Invoker } from "../core/invoker";
import { Resource } from "../core/resource";
import { IamService } from "../services/iam";

export class LambdaFunction {
  private requiredAction = "Lambda:Invoke";
  protected resourcePrefix = "Lambda";

  constructor(resourceName: string, private func: Function) {
    this.setResourceName(resourceName);
  }

  public execute(invoker: Invoker, ...args: any[]) {
    if (IamService.authorize(invoker, this.requiredAction, this.resourceName)) {
      this.func(...args);
    } else {
      throw new Error(
        `The invoker is missing ${this.requiredAction} for ${this.resourceName}`
      );
    }
  }
}

export interface LambdaFunction extends Resource {}
