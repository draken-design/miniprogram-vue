export interface DrDropDownOption {
  key: string;
  name: string;
}
export interface DrDrDropDownProps {
  /**
   * @description 点中颜色
   */
  activeColor?: string | string[];
  /**
   * @description 默认选中
   */
  defaultValue?: string[];
  /**
   * @description 配置列表
   */
  optionList: DrDropDownOption[][];
  /**
   * @description 遮罩层点击事件
   */
  maskClick?: () => void;
}
export interface Val extends DrDropDownOption {
  isActive: boolean;
}
