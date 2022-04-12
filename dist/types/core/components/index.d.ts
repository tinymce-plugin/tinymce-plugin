interface ComponentsApi {
    custom_elements: string;
    setCustomTags: (customTag: any, setAttribute: any, setValue: any, editor: any, isAssign: any) => void;
    createCustomTags: (customTag: any, init: any, editor: any) => void;
    setStyleSheetList: (customTag: any, styleName: any, text: any, editor: any) => void;
    createHtmlPanel: (editor: any, customTag: any, init: any) => void;
}
declare const componentsApi: ComponentsApi;
export { ComponentsApi, componentsApi };
