declare let keys: {
    (o: object): string[];
    (o: {}): string[];
};
declare let __assign: Function;
declare let hasOwnProperty: (v: PropertyKey) => boolean;
declare var isNullable: (a: null | undefined) => boolean;
declare var isNonNullable: (a: any) => boolean;
declare const getFormatStyle: (style: any) => string | undefined;
declare const getObjStyle: (style: any) => any;
/**
 * 获取样式
 *
 * @param {*} className
 * @param {*} content
 * @return {*}
 */
declare const getStyleSheetClass: (className: any, content: any) => any;
/**
 * 尺寸测量
 *
 * @param {*} node
 * @param {*} styles
 * @param {*} dimension
 * @param {*} defaultValue
 * @return {*}
 */
declare var getDimension: (node: any, styles: any, dimension: any, defaultValue: any) => any;
declare const toHump: (name: any) => any;
declare const toLine: (name: any) => any;
declare const toHyphen: (name: string) => string;
declare var getCurrentValue: (block: any, styleName: any) => string;
declare let getButtonsStyle: (obj: any, style: any) => string;
/**
 *
 *
 * @param {*} func
 * @param {number} delay
 * @param {number} [outTime]
 */
declare const setIntervalFn: (func: (clear: () => void) => void, delay: number, outTime?: number | undefined) => void;
declare let getTp$ComponentFn: (customTag: any, fnName: any) => any;
/**
 *
 *  数值转换px单位
 * @param {*} data 转换的数据
 * @param {*} noPerCent 是否不带百分号
 * @return {*}
 */
declare const autoToPX: (data: any, noPerCent: any) => any;
/**
 * 翻译元素
 * @param text
 * @returns
 */
declare const tp$Translate: (text: any) => any;
declare const createSkt: (opt: any) => string;
declare const createHtmlPanel: (editor: any, panelID: any, dataList: any) => string;
export { __assign, createSkt, setIntervalFn, keys, hasOwnProperty, isNullable, isNonNullable, getFormatStyle, getObjStyle, getCurrentValue, toHyphen, toHump, toLine, getButtonsStyle, getTp$ComponentFn, autoToPX, tp$Translate, createHtmlPanel, getDimension, getStyleSheetClass };
