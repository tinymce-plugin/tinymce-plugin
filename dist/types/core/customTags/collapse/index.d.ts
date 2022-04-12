declare const _default: {
    name: string;
    template: {
        innerHTML: string;
    };
    isContentEditable: boolean;
    connectedCallback: () => void;
    tpComponentCmdFn: {
        upData: (_self: any, _props: {
            style: any;
            editor: any;
        }) => void;
    };
    contentEditableFn: (_self: any, _isEditable: any, _customtag: any, editor: any) => void;
    isHeaderEditable: boolean;
    headerEditableFn: (_self: any, _isEditable: any, _customtag: any, editor: any) => void;
    parserFn: (node: any, customtag: any) => void;
    serializerFn: (node: any, customtag: any) => void;
};
export default _default;
