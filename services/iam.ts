import { Invoker } from "../core/invoker";

export class IamService {
  public static authorize(
    invoker: Invoker,
    action: string,
    resource: string
  ): boolean {
    for (let role of invoker.roles) {
      if (!role.allows) continue;

      for (const situation of role.allows) {
        if (
          situation.actions.includes(action) &&
          situation.resources.includes(resource)
        )
          return true;
      }
    }

    return false;
  }
}
