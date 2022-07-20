import { Form, Input } from 'antd';
export { Form } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useController } from 'react-hook-form';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var isDEV = function () {
    var _a, _b;
    // @ts-ignore
    if (!((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV))
        return false;
    // @ts-ignore
    if (['development', 'dev'].includes((_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b.NODE_ENV))
        return true;
    return false;
};
var isFalsy = function (value) {
    if (value === null)
        return true;
    if (value === undefined)
        return true;
    if (value === false)
        return true;
    return false;
};
var warning = function (isTruthy) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    if (isDEV() && isTruthy) {
        console.warn.apply(console, params);
    }
};

// 如果直接赋值给 FormItem, 会导致 FormItem 里头 labelCol in props 的逻辑判断为 true， 从而使设置的布局未生效
var getLayoutProps = function (_a) {
    var labelAlign = _a.labelAlign, labelCol = _a.labelCol, wrapperCol = _a.wrapperCol;
    var layoutProps = {};
    if (labelAlign) {
        layoutProps["labelAlign"] = labelAlign;
    }
    if (labelCol) {
        layoutProps["labelCol"] = labelCol;
    }
    if (wrapperCol) {
        layoutProps["wrapperCol"] = wrapperCol;
    }
    return layoutProps;
};
var getRules = function (rules, options) {
    var newRules = __assign({}, rules);
    if (options === null || options === void 0 ? void 0 : options.required) {
        if (typeof (options === null || options === void 0 ? void 0 : options.required) === "string") {
            newRules.required = options.required;
        }
        else {
            newRules.required = "".concat(options === null || options === void 0 ? void 0 : options.label, "\u4E0D\u80FD\u4E3A\u7A7A");
        }
    }
    return newRules;
};
var getValidateStatus = function (fieldState) {
    var validateStatus = "";
    if (fieldState === null || fieldState === void 0 ? void 0 : fieldState.error) {
        validateStatus = "error";
    }
    if (fieldState.isDirty && !(fieldState === null || fieldState === void 0 ? void 0 : fieldState.error)) {
        validateStatus = "success";
    }
    return validateStatus;
};
var getHelpMessage = function (fieldState) {
    var _a;
    return (_a = fieldState === null || fieldState === void 0 ? void 0 : fieldState.error) === null || _a === void 0 ? void 0 : _a.message;
};
var getPlaceholder = function (_a) {
    var metadata = _a.metadata, componentType = _a.componentType, labelText = _a.labelText;
    if (!isFalsy(metadata === null || metadata === void 0 ? void 0 : metadata.props.placeholder))
        return metadata === null || metadata === void 0 ? void 0 : metadata.props.placeholder;
    if (componentType === "select") {
        return "\u8BF7\u9009\u62E9".concat(labelText);
    }
    return "\u8BF7\u8F93\u5165".concat(labelText);
};
var InternalFormItem = function (props) {
    var _a;
    var name = props.name, control = props.control, defaultValue = props.defaultValue, label = props.label, _b = props.labelText, labelText = _b === void 0 ? label : _b, labelCol = props.labelCol, wrapperCol = props.wrapperCol, labelAlign = props.labelAlign, _c = props.rules, rules = _c === void 0 ? {} : _c, required = props.required, hasFeedback = props.hasFeedback, style = props.style, _d = props.valuePropName, valuePropName = _d === void 0 ? "value" : _d, _e = props.trigger, trigger = _e === void 0 ? "onChange" : _e, getValueFromEvent = props.getValueFromEvent, hostUIValueState = props.hostUIValueState, antdProps = __rest(props, ["name", "control", "defaultValue", "label", "labelText", "labelCol", "wrapperCol", "labelAlign", "rules", "required", "hasFeedback", "style", "valuePropName", "trigger", "getValueFromEvent", "hostUIValueState"]);
    var _f = useState(function () {
        if (field) {
            if (hostUIValueState) {
                return hostUIValueState(field.value);
            }
        }
    }), UIValueState = _f[0], setUIValueState = _f[1];
    /**
     * 为了解决在生产环境无法正确判断children的组件名称这个问题，
     * 改用判断formitem下的DOM节点是否包含了特定的classname，
     * 这边要注意不应该去设置 children的 ref，因为外部可能还会设置ref属性，所以这边通过设置 formitem 的 ref
     */
    var formItemRef = useRef();
    var _g = useState(""), childrenComponentType = _g[0], setChildrenComponentType = _g[1];
    var layoutProps = getLayoutProps({ labelCol: labelCol, wrapperCol: wrapperCol, labelAlign: labelAlign });
    var isRequired = required || Object.keys(rules).includes("required");
    var rulesProp = getRules(rules, { required: required, label: labelText });
    warning(React.isValidElement(label) && typeof labelText !== "string", "label 被设置为 ReactElement, 请正确设置 labelText 为[纯文本 string]以保证校验提示本文的正确性");
    useEffect(function () {
        var dom = ReactDOM.findDOMNode(formItemRef.current);
        var selectNodelist = dom.querySelectorAll(".ant-select");
        switch (true) {
            case selectNodelist.length > 0:
                setChildrenComponentType("select");
                break;
            default:
                setChildrenComponentType("");
                break;
        }
    }, []);
    var _h = useController({
        name: name,
        control: control,
        rules: rulesProp,
        defaultValue: defaultValue,
    }), field = _h.field, fieldState = _h.fieldState;
    var validateStatus = getValidateStatus(fieldState);
    var help = getHelpMessage(fieldState);
    var placeholder = getPlaceholder({
        metadata: props.children,
        componentType: childrenComponentType,
        labelText: labelText,
    });
    var proxyProps = (_a = {},
        _a[valuePropName] = field.value,
        _a[trigger] = function (event) {
            var _a;
            var _b, _c;
            var value = event;
            if (getValueFromEvent) {
                value = getValueFromEvent(event);
            }
            field.onChange(value);
            if (hostUIValueState) {
                var uValue = hostUIValueState(value);
                setUIValueState(uValue);
            }
            // @ts-expect-error
            if ((_c = (_b = props.children) === null || _b === void 0 ? void 0 : _b.props) === null || _c === void 0 ? void 0 : _c[trigger]) {
                // @ts-expect-error
                (_a = props.children.props)[trigger].apply(_a, arguments);
            }
        },
        _a);
    return (React.createElement(Form.Item, __assign({}, antdProps, { label: label, required: isRequired, validateStatus: validateStatus, help: help, hasFeedback: hasFeedback }, layoutProps, { style: style, ref: formItemRef }), React.cloneElement(props.children, __assign(__assign(__assign(__assign({}, field), proxyProps), { placeholder: placeholder }), (hostUIValueState && {
        value: UIValueState,
    })))));
};
var PureFormItem = Form.Item;

var PlainText = React.forwardRef(function (props, ref) {
    var value = props.value, _a = props.hidePlaceholder, hidePlaceholder = _a === void 0 ? false : _a, _b = props.placeholder, placeholder = _b === void 0 ? '-' : _b, spanProps = __rest(props, ["value", "hidePlaceholder", "placeholder"]);
    return (React.createElement("span", __assign({ ref: ref }, spanProps), value || (!hidePlaceholder && placeholder)));
});

function CustomInput(props) {
    var control = props.control, name = props.name, label = props.label, textPrefix = props.textPrefix, textCenter = props.textCenter, textPost = props.textPost, required = props.required, decorator = props.decorator, children = props.children, className = props.className, rules = props.rules, trigger = props.trigger;
    var n = decorator ? "".concat(decorator, "#").concat(name) : name;
    return (React.createElement("div", { className: "CustomInput hookForm ".concat(className ? className : "") },
        textPrefix && React.createElement("div", { className: "text-prefix" }, textPrefix),
        React.createElement(InternalFormItem, { label: label, required: required, name: n, control: control, rules: rules, trigger: trigger }, children ? children : React.createElement(Input, null)),
        (textCenter || textPost) && (React.createElement("div", { className: textCenter ? "text-center" : "text-post" }, textCenter ? textCenter : textPost))));
}

export { CustomInput, InternalFormItem as FormItem, PlainText, PureFormItem };
