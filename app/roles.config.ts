import { IamRole } from "../interfaces/iam-role";

export const myRoles: IamRole[] = [
  {
    name: "role-1",
    allows: [
      {
        actions: ["Lambda:Invoke"],
        resources: ["Lambda:helloLambda"],
      },
    ],
  },
];
