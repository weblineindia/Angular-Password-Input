import { EventEmitter } from "@angular/core";
export declare class PasswordComponent {
    faEye: any;
    faEyeSlash: any;
    paswordMinLength: Number;
    paswordMaxLength: Number;
    passwordFieldType: String;
    disabled: boolean;
    value: String;
    tabindex: Number;
    id: String;
    name: String;
    placeholder: String;
    passwordErrorName: String;
    isViewPassword: Boolean;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    blur: EventEmitter<any>;
    onFocus(event: any): void;
    onBlur(event: any): void;
    onChange(event: any): void;
    passwordVisibility(): void;
}
