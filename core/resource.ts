export abstract class Resource {
  protected abstract resourcePrefix: string;
  protected _resourceName: string = "";

  protected setResourceName(name: string) {
    this._resourceName = name;
  }

  public get resourceName(): string {
    return `${this.resourcePrefix}:${this._resourceName}`;
  }
}
