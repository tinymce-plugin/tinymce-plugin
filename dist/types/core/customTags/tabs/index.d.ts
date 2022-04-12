declare const _default: {
    name: string;
    styleSheet: {
        selector: string;
        styleSheetList: {
            default: {
                'tp-tabs': string;
                'tp-tabs_top': string;
                'tp-tabs_label.checked': string;
                'tp-tabs_main': string;
                'tp-tab_main.checked': string;
            };
        };
    };
    styleSheetLoadList: {};
    styleFn: () => void;
    state: {
        count: number;
    };
    tpComponentDeleteFn: () => void;
    tpComponentMonitorCmd: () => void;
    tpComponentCmdFn: {
        tabAdd: (_self: any, _props: any) => void;
        tabDelete: (_self: any, _props: any) => void;
        delete: (_self: any, _props: any) => void;
        getStyle: (_self: any, _props: any) => void;
        setStyle: (_self: any, _props: any) => void;
    };
    template: {
        innerHTML: string;
    };
    connectedCallback: (shadowRoot: any, dom: any) => void;
    isContentEditable: boolean;
    contentEditableFn: (_self: any, _isEditable: any, _customtag: any) => void;
    isHeaderEditable: boolean;
    headerEditableFn: (_self: any, _isEditable: any, _customtag: any) => void;
    parserFn: (node: any, customtag: any) => void;
    serializerFn: (node: any, customtag: any) => void;
};
export default _default;
