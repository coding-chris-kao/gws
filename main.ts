import { myRoles } from "./app/roles.config";
import { User } from "./core/user";
import { hello } from "./lambda-functions/hello";
import { LambdaFunction } from "./models/lambda-function";
import { preRun } from "./utils/pre-run";

preRun();
const user1 = new User(myRoles);
const helloLambda = new LambdaFunction("helloLambda", hello);
user1.invoke(helloLambda);
