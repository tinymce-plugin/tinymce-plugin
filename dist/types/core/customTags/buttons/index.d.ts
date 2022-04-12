declare const _default: {
    name: string;
    template: {
        innerHTML: string;
    };
    styleSheetList: {
        default: {
            'tp-buttons': string;
            'tp-buttons:hover': string;
            'tp-buttons::before': string;
            'tp-buttons::after': string;
        };
    };
    isContentEditable: boolean;
    connectedCallback: () => void;
    tpComponentCmdFn: {
        upData: (_self: any, _props: any) => void;
    };
    contentEditableFn: (_self: any, _isEditable: any, _customtag: any, editor: any) => void;
    isHeaderEditable: boolean;
    parserFn: (node: any, customtag: any, editor: any) => void;
    serializerFn: (node: any, customtag: any) => void;
};
export default _default;
