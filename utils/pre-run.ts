import { Resource } from "../core/resource";
import { Invoker } from "../core/invoker";
import { User } from "../core/user";
import { LambdaFunction } from "../models/lambda-function";
import { applyMixins } from "./apply-mixins";

export function preRun() {
  applyMixins(LambdaFunction, [Resource]);
  applyMixins(User, [Invoker]);
}
