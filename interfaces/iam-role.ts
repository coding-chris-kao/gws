export interface IamRoleSituation {
  actions: string[];
  resources: string[];
}

export interface IamRole {
  name: string;
  allows?: IamRoleSituation[];
  denies?: IamRoleSituation[];
}
