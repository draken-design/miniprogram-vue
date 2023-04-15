/**
 * @description 平台特性
 */
class Platform {
  public isMiniEnv: boolean = true;
  public isWebEnv: boolean = true;
  public systemInfo: GetSystemInfoResult = {} as GetSystemInfoResult;
  constructor() {
    this.initConstructor();
  }
  private initConstructor(): void {
    this.systemInfo = globalThis.wx.getSystemInfoSync();
    this.isMiniEnv = typeof window === "undefined";
    this.isWebEnv = typeof window === "object";
  }
}
export const platform = new Platform();
