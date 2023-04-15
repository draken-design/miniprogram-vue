/// <reference path="./src/types/platform" />
interface ChooseImageCropOptions {
  /**
   * 裁剪的宽度，单位为px，用于计算裁剪宽高比。
   */
  width: number;
  /**
   * 裁剪的高度，单位为px，用于计算裁剪宽高比。
   */
  height: number;
  /**
   * 取值范围为1-100，数值越小，质量越低（仅对jpg格式有效）。默认值为80。
   */
  quality?: number;
  /**
   * 是否将width和height作为裁剪保存图片真实的像素值。默认值为true。注：设置为false时在裁剪编辑界面显示图片的像素值，设置为true时不显示。
   */
  resize?: boolean;
  /**
   * 是否将裁剪的图片保存到手机相册里，默认值为false。
   */
  saveToAlbum?: boolean;
}
type PromisifySuccessResult<
  P,
  T extends {
    success?: (...args: any[]) => void;
  },
  R = void
> = P extends {
  success: any;
}
  ? R
  : P extends { fail: any }
  ? R
  : P extends { complete: any }
  ? R
  : Promise<Parameters<Exclude<T["success"], undefined>>[0]>;
interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
  readonly webkitRelativePath: string;
}
interface ChooseImageSuccessCallbackResultFile {
  /**
   * 本地文件路径
   */
  path: string;
  /**
   * 本地文件大小，单位：B
   */
  size: number;
}
interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
  readonly webkitRelativePath: string;
  readonly path: string;
}
interface ChooseImageSuccessCallbackResult {
  /**
   * 图片的本地文件路径列表
   */
  tempFilePaths: string | string[];
  /**
   * 图片的本地文件列表，每一项是一个 File 对象
   */
  tempFiles: // | ChooseImageSuccessCallbackResultFile
  // | ChooseImageSuccessCallbackResultFile[]
  // | File
  File[];
}
interface ChooseImageOptions {
  /**
   * 最多可以选择的图片张数，默认9
   */
  count?: number;
  /**
   * original 原图，compressed 压缩图，默认二者都有
   */
  sizeType?: string | string[];
  /**
   * album 从相册选图，camera 使用相机，默认二者都有
   */
  sourceType?: string[];
  /**
   * 根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。
   */
  extension?: string[];
  /**
   * 图像裁剪参数，设置后 sizeType 失效。
   */
  crop?: ChooseImageCropOptions;
  /**
   * 成功则返回图片的本地文件路径列表 tempFilePaths
   */
  success?: (result: ChooseImageSuccessCallbackResult) => void;
  /**
   * 接口调用失败的回调函数
   */
  fail?: (result: any) => void;
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   */
  complete?: (result: any) => void;
}
interface SafeArea {
  /**
   * 安全区域左上角横坐标
   */
  left: number;
  /**
   * 安全区域右下角横坐标
   */
  right: number;
  /**
   * 安全区域左上角纵坐标
   */
  top: number;
  /**
   * 安全区域右下角纵坐标
   */
  bottom: number;
  /**
   * 安全区域的宽度，单位逻辑像素
   */
  width: number;
  /**
   * 安全区域的高度，单位逻辑像素
   */
  height: number;
}
interface SafeAreaInsets {
  /**
   * 安全区域左侧插入位置
   */
  left: number;
  /**
   * 安全区域右侧插入位置
   */
  right: number;
  /**
   * 安全区顶部插入位置
   */
  top: number;
  /**
   * 安全区域底部插入位置
   */
  bottom: number;
}
interface GetSystemInfoResult {
  /**
   * 客户端基础库版本
   */
  SDKVersion: string;
  /**
   * 当前运行的客户端
   */
  app?: string;
  /**
   * `manifest.json` 中应用appid。
   */
  appId: string;
  /**
   * 应用设置的语言。仅 App、H5 支持
   */
  appLanguage?: string;
  /**
   * `manifest.json` 中应用名称。和`字节跳动小程序、飞书小程序`字段冲突，原字端与`hostName`一致
   */
  appName: string;
  /**
   * `manifest.json` 中应用版本名称。
   */
  appVersion: string;
  /**
   * `manifest.json` 中应用版本名号
   */
  appVersionCode: string;
  /**
   * 应用资源（wgt）的版本名称。（仅 App 支持）
   */
  appWgtVersion?: string;
  /**
   * 手机品牌。H5 不支持
   */
  brand?: string;
  /**
   * 浏览器名称。`App` 端是系统 webview 的名字，比如 wkwebview、chrome。小程序端为空
   */
  browserName: string;
  /**
   * 浏览器版本、webview 版本。小程序端为空
   */
  browserVersion: string;
  /**
   * 设备 ID
   */
  deviceId: string;
  /**
   * 设备品牌。如：`apple`、`huawei`。H5 不支持
   */
  deviceBrand?: string;
  /**
   * 设备型号
   */
  deviceModel: string;
  /**
   * 设备类型。`phone`、`pad`、`pc`
   */
  deviceType: string;
  /**
   * 设备像素比
   */
  devicePixelRatio: number;
  /**
   * 设备方向。如：`竖屏 portrait`、`横屏 landscape`
   * - portrait: 竖屏
   * - landscape: 横屏
   */
  deviceOrientation: "portrait" | "landscape";
  /**
   * 用户字体大小设置
   */
  fontSizeSetting?: number;
  /**
   * 宿主平台
   */
  host?: string;
  /**
   * 用户字体大小设置
   */
  hostFontSizeSetting?: number;
  /**
   * 客户端基础库版本
   */
  hostSDKVersion?: string;
  /**
   * App、小程序宿主名称，如：`WeChat`、`FeiShu`、`alipay`、`DINGTALK`。H5 不支持
   */
  hostName?: string;
  /**
   * App、小程序宿主版本。如：微信版本号。H5 不支持
   */
  hostVersion?: string;
  /**
   * 小程序宿主语言、app 语言
   */
  hostLanguage?: string;
  /**
   * App 主题 `light`、`dark`。H5 端为空，小程序端为系统当前主题
   */
  hostTheme?: string;
  /**
   * 小程序宿主包名。仅 App 支持，其他平台为空
   */
  hostPackageName?: string;
  /**
   * 程序设置的语言
   */
  language?: string;
  /**
   * 手机型号
   */
  model: string;
  /**
   * ios、android、windows、mac、linux
   */
  osName: string;
  /**
   * 操作系统版本。如 ios 版本，andriod 版本
   */
  osVersion: string;
  /**
   * 操作系统语言，小程序端与 `version` 相同，H5 与浏览器语言一致
   */
  osLanguage?: string;
  /**
   * |操作系统主题 light、dark。小程序端为小程序主题，H5 端为空
   */
  osTheme?: string;
  /**
   * 设备像素比
   */
  pixelRatio: number;
  /**
   * 客户端平台
   */
  platform: string;
  /**
   * 屏幕宽度
   */
  screenWidth: number;
  /**
   * 屏幕高度
   */
  screenHeight: number;
  /**
   * 状态栏的高度
   */
  statusBarHeight?: number;
  /**
   * 设备磁盘容量
   */
  storage?: string;
  /**
   * 宿主平台版本号
   */
  swanNativeVersion?: string;
  /**
   * 操作系统版本
   */
  system: string;
  /**
   * 在竖屏正方向下的安全区域
   */
  safeArea?: SafeArea;
  /**
   * 在竖屏正方向下的安全区域插入位置
   */
  safeAreaInsets?: SafeAreaInsets;
  /**
   * 用户标识。小程序端为空
   */
  ua: string;
  /**
   * uni 编译器版本号
   */
  uniCompileVersion: string;
  /**
   * uni-app 运行平台。如：`app`、`mp-weixin`、`web`
   */
  uniPlatform: string;
  /**
   * uni 运行时版本
   */
  uniRuntimeVersion: string;
  /**
   * 引擎版本号
   */
  version: string;
  /**
   * rom 名称。Android 部分机型获取不到值。iOS 恒为 `ios`
   */
  romName?: string;
  /**
   * rom 版本号。Android 部分机型获取不到值。iOS 恒为 `ios 版本号`
   */
  romVersion?: string;
  /**
   * 可使用窗口宽度
   */
  windowWidth: number;
  /**
   * 可使用窗口高度
   */
  windowHeight: number;
  /**
   * 导航栏的高度
   */
  navigationBarHeight?: number;
  /**
   * 标题栏高度
   */
  titleBarHeight?: number;
  /**
   * 当前电量百分比
   */
  currentBattery?: string;
  /**
   * App平台
   */
  AppPlatform?: string;
  /**
   * 可使用窗口的顶部位置
   */
  windowTop: number;
  /**
   * 可使用窗口的底部位置
   */
  windowBottom: number;
  /**
   * 允许微信使用相册的开关（仅 iOS 有效）
   */
  albumAuthorized?: boolean;
  /**
   * 允许微信使用摄像头的开关
   */
  cameraAuthorized?: boolean;
  /**
   * 允许微信使用定位的开关
   */
  locationAuthorized?: boolean;
  /**
   * 允许微信使用麦克风的开关
   */
  microphoneAuthorized?: boolean;
  /**
   * 允许微信通知的开关
   */
  notificationAuthorized?: boolean;
  /**
   * 允许微信通知带有提醒的开关（仅 iOS 有效）
   */
  notificationAlertAuthorized?: boolean;
  /**
   * 允许微信通知带有标记的开关（仅 iOS 有效）
   */
  notificationBadgeAuthorized?: boolean;
  /**
   * 允许微信通知带有声音的开关（仅 iOS 有效）
   */
  notificationSoundAuthorized?: boolean;
  /**
   * 蓝牙的系统开关
   */
  bluetoothEnabled?: boolean;
  /**
   * 地理位置的系统开关
   */
  locationEnabled?: boolean;
  /**
   * Wi-Fi 的系统开关
   */
  wifiEnabled?: boolean;
  /**
   * 上一次缓存的位置信息
   */
  cacheLocation?: any;
  /**
   * 系统当前主题，取值为light或dark。仅微信小程序支持
   */
  theme?: string;
}
interface PlatForm {
  chooseImage<T extends ChooseImageOptions = ChooseImageOptions>(
    options?: T
  ): PromisifySuccessResult<T, ChooseImageOptions>;
  createSelectorQuery: () => any;
  previewImage: (options: any) => void;
  getSystemInfoSync: () => GetSystemInfoResult;
}

declare module globalThis {
  var wx: PlatForm;
}
declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
