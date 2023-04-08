type PromisifySuccessResult<P, T extends AsyncMethodOptionLike> = P extends {
  success: any;
}
  ? void
  : P extends { fail: any }
  ? void
  : P extends { complete: any }
  ? void
  : Promise<Parameters<Exclude<T["success"], undefined>>[0]>;
interface ChooseMediaSuccessCallbackResult {
  /** 本地临时文件列表 */
  tempFiles: MediaFile[];
  /** 文件类型，有效值有 image 、video、mix */
  type: string;
  errMsg: string;
}
type ChooseMediaCompleteCallback = (res: GeneralCallbackResult) => void;
type ChooseMediaFailCallback = (res: GeneralCallbackResult) => void;
type ChooseMediaSuccessCallback = (
  result: ChooseMediaSuccessCallbackResult
) => void;
interface GeneralCallbackResult {
  /** 错误信息 */
  errMsg: string;
}
interface ChooseMediaSuccessCallbackResult {
  /** 本地临时文件列表 */
  tempFiles: MediaFile[];
  /** 文件类型，有效值有 image 、video、mix */
  type: string;
  errMsg: string;
}
interface ChooseMediaOption {
  /** 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头
   *
   * 可选值：
   * - 'back': 使用后置摄像头;
   * - 'front': 使用前置摄像头; */
  camera?: "back" | "front";
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  complete?: ChooseMediaCompleteCallback;
  /** 最多可以选择的文件个数，基础库2.25.0前，最多可支持9个文件，2.25.0及以后最多可支持20个文件 */
  count?: number;
  /** 接口调用失败的回调函数 */
  fail?: ChooseMediaFailCallback;
  /** 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 60s 之间。不限制相册。 */
  maxDuration?: number;
  /** 文件类型
   *
   * 可选值：
   * - 'image': 只能拍摄图片或从相册选择图片;
   * - 'video': 只能拍摄视频或从相册选择视频;
   * - 'mix': 可同时选择图片和视频; */
  mediaType?: Array<"image" | "video" | "mix">;
  /** 是否压缩所选文件，基础库2.25.0前仅对 mediaType 为 image 时有效，2.25.0及以后对全量 mediaType 有效 */
  sizeType?: string[];
  /** 图片和视频选择的来源
   *
   * 可选值：
   * - 'album': 从相册选择;
   * - 'camera': 使用相机拍摄; */
  sourceType?: Array<"album" | "camera">;
  /** 接口调用成功的回调函数 */
  success?: ChooseMediaSuccessCallback;
}
module globalThis {
  var wx: {
    chooseMedia<T extends ChooseMediaOption = ChooseMediaOption>(
      option: T
    ): PromisifySuccessResult<T, ChooseMediaOption>;
  };
}
declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
