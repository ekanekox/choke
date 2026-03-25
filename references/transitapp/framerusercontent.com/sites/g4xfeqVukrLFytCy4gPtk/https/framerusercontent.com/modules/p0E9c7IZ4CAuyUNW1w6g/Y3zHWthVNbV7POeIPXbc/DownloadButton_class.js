import {
    jsx as _jsx
} from "react/jsx-runtime";
export function withClass(Component) {
    return props => {
        props.className += " homepage_downloadButton" // Remember to add a space
        ;
        return /*#__PURE__*/ _jsx(Component, { ...props
        });
    };
}
export const __FramerMetadata__ = {
    "exports": {
        "withClass": {
            "type": "reactHoc",
            "name": "withClass",
            "annotations": {
                "framerContractVersion": "1"
            }
        },
        "__FramerMetadata__": {
            "type": "variable"
        }
    }
}
//# sourceMappingURL=./DownloadButton_class.map