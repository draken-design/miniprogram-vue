// interface ChooseImageCropOptions {
//   /**
//    * 裁剪的宽度，单位为px，用于计算裁剪宽高比。
//    */
//   width: number;
//   /**
//    * 裁剪的高度，单位为px，用于计算裁剪宽高比。
//    */
//   height: number;
//   /**
//    * 取值范围为1-100，数值越小，质量越低（仅对jpg格式有效）。默认值为80。
//    */
//   quality?: number;
//   /**
//    * 是否将width和height作为裁剪保存图片真实的像素值。默认值为true。注：设置为false时在裁剪编辑界面显示图片的像素值，设置为true时不显示。
//    */
//   resize?: boolean;
//   /**
//    * 是否将裁剪的图片保存到手机相册里，默认值为false。
//    */
//   saveToAlbum?: boolean;
// }
// type PromisifySuccessResult<
//   P,
//   T extends {
//     success?: (...args: any[]) => void;
//   },
//   R = void
// > = P extends {
//   success: any;
// }
//   ? R
//   : P extends { fail: any }
//   ? R
//   : P extends { complete: any }
//   ? R
//   : Promise<Parameters<Exclude<T["success"], undefined>>[0]>;
// interface File extends Blob {
//   readonly lastModified: number;
//   readonly name: string;
//   readonly webkitRelativePath: string;
// }
// interface ChooseImageSuccessCallbackResultFile {
//   /**
//    * 本地文件路径
//    */
//   path: string;
//   /**
//    * 本地文件大小，单位：B
//    */
//   size: number;
// }
// interface ChooseImageSuccessCallbackResult {
//   /**
//    * 图片的本地文件路径列表
//    */
//   tempFilePaths: string | string[];
//   /**
//    * 图片的本地文件列表，每一项是一个 File 对象
//    */
//   tempFiles:
//     | ChooseImageSuccessCallbackResultFile
//     | ChooseImageSuccessCallbackResultFile[]
//     | File
//     | File[];
// }
// interface ChooseImageOptions {
//   /**
//    * 最多可以选择的图片张数，默认9
//    */
//   count?: number;
//   /**
//    * original 原图，compressed 压缩图，默认二者都有
//    */
//   sizeType?: string | string[];
//   /**
//    * album 从相册选图，camera 使用相机，默认二者都有
//    */
//   sourceType?: string[];
//   /**
//    * 根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。
//    */
//   extension?: string[];
//   /**
//    * 图像裁剪参数，设置后 sizeType 失效。
//    */
//   crop?: ChooseImageCropOptions;
//   /**
//    * 成功则返回图片的本地文件路径列表 tempFilePaths
//    */
//   success?: (result: ChooseImageSuccessCallbackResult) => void;
//   /**
//    * 接口调用失败的回调函数
//    */
//   fail?: (result: any) => void;
//   /**
//    * 接口调用结束的回调函数（调用成功、失败都会执行）
//    */
//   complete?: (result: any) => void;
// }

// interface PlatForm {
//   chooseImage<T extends ChooseImageOptions = ChooseImageOptions>(
//     options?: T
//   ): PromisifySuccessResult<T, ChooseImageOptions>;
// }
