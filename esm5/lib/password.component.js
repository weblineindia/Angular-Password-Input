/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
var PasswordComponent = /** @class */ (function () {
    function PasswordComponent() {
        this.faEye = faEye;
        this.faEyeSlash = faEyeSlash;
        this.paswordMinLength = 3;
        this.paswordMaxLength = 255;
        this.passwordFieldType = "password";
        this.disabled = false;
        this.tabindex = 1;
        this.id = "password";
        this.name = "password";
        this.placeholder = "password";
        this.passwordErrorName = "The password field must be at least 3 characters";
        this.isViewPassword = true;
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    PasswordComponent.prototype.onFocus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.focus.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PasswordComponent.prototype.onBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.blur.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PasswordComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.change.emit(event);
    };
    /**
     * @return {?}
     */
    PasswordComponent.prototype.passwordVisibility = /**
     * @return {?}
     */
    function () {
        this.passwordFieldType =
            this.passwordFieldType === "password" ? "text" : "password";
    };
    PasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-password',
                    template: "<input\n  [type]=\"passwordFieldType\"\n  class=\"form-control\"\n  [placeholder]=\"placeholder\"\n  [ngModel]=\"value\"\n  [name]=\"name\"\n  [id]=\"id\"\n  #password=\"ngModel\"\n  [disabled]=\"disabled\"\n  [tabindex]=\"tabindex\"\n  [minlength]=\"paswordMinLength\"\n  [maxlength]=\"paswordMaxLength\"\n  (focus)=\"onFocus($event)\"\n  (blur)=\"onBlur($event)\"\n  (input)=\"onChange($event)\"\n  autofocus\n/>\n\n<span *ngIf=\"isViewPassword\">\n  <span *ngIf=\"value\" class=\"password-eye\">\n    <span *ngIf=\"passwordFieldType === 'text'\">\n      <fa-icon [icon]=\"faEye\" (click)=\"passwordVisibility()\"></fa-icon>\n    </span>\n    <span *ngIf=\"passwordFieldType === 'password'\">\n      <fa-icon [icon]=\"faEyeSlash\" (click)=\"passwordVisibility()\"></fa-icon>\n    </span>\n  </span>\n</span>\n\n<div class=\"md-errors-spacer\" *ngIf=\"password.invalid && password.touched\">\n  <div *ngIf=\"password.errors && password.invalid\">\n    <p class=\"error-text\">{{ passwordErrorName }}</p>\n  </div>\n</div>\n",
                    styles: [".form-control{width:50%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.error-text{color:red}"]
                },] },
    ];
    PasswordComponent.propDecorators = {
        paswordMinLength: [{ type: Input }],
        paswordMaxLength: [{ type: Input }],
        passwordFieldType: [{ type: Input }],
        disabled: [{ type: Input }],
        value: [{ type: Input }],
        tabindex: [{ type: Input }],
        id: [{ type: Input }],
        name: [{ type: Input }],
        placeholder: [{ type: Input }],
        passwordErrorName: [{ type: Input }],
        isViewPassword: [{ type: Input }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        blur: [{ type: Output }]
    };
    return PasswordComponent;
}());
export { PasswordComponent };
if (false) {
    /** @type {?} */
    PasswordComponent.prototype.faEye;
    /** @type {?} */
    PasswordComponent.prototype.faEyeSlash;
    /** @type {?} */
    PasswordComponent.prototype.paswordMinLength;
    /** @type {?} */
    PasswordComponent.prototype.paswordMaxLength;
    /** @type {?} */
    PasswordComponent.prototype.passwordFieldType;
    /** @type {?} */
    PasswordComponent.prototype.disabled;
    /** @type {?} */
    PasswordComponent.prototype.value;
    /** @type {?} */
    PasswordComponent.prototype.tabindex;
    /** @type {?} */
    PasswordComponent.prototype.id;
    /** @type {?} */
    PasswordComponent.prototype.name;
    /** @type {?} */
    PasswordComponent.prototype.placeholder;
    /** @type {?} */
    PasswordComponent.prototype.passwordErrorName;
    /** @type {?} */
    PasswordComponent.prototype.isViewPassword;
    /** @type {?} */
    PasswordComponent.prototype.change;
    /** @type {?} */
    PasswordComponent.prototype.focus;
    /** @type {?} */
    PasswordComponent.prototype.blur;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci13ZWJsaW5laW5kaWEtcGFzc3dvcmQvIiwic291cmNlcyI6WyJsaWIvcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7OztxQkEyQ3ZELEtBQUs7MEJBQ0EsVUFBVTtnQ0FFUSxDQUFDO2dDQUNELEdBQUc7aUNBQ0YsVUFBVTt3QkFDbEIsS0FBSzt3QkFFTixDQUFDO2tCQUNQLFVBQVU7b0JBQ1IsVUFBVTsyQkFDSCxVQUFVO2lDQUV2QyxrREFBa0Q7OEJBQ2pCLElBQUk7c0JBRUQsSUFBSSxZQUFZLEVBQU87cUJBQ3hCLElBQUksWUFBWSxFQUFPO29CQUV4QixJQUFJLFlBQVksRUFBTzs7Ozs7O0lBRTNELG1DQUFPOzs7O0lBQVAsVUFBUSxLQUFLO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7Ozs7O0lBQ0Qsa0NBQU07Ozs7SUFBTixVQUFPLEtBQUs7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2Qjs7Ozs7SUFDRCxvQ0FBUTs7OztJQUFSLFVBQVMsS0FBSztRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCOzs7O0lBQ0QsOENBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0tBQy9EOztnQkExRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsa2dDQWtDWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxnSkFBZ0osQ0FBQztpQkFDM0o7OzttQ0FNRSxLQUFLO21DQUNMLEtBQUs7b0NBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSztvQ0FDTCxLQUFLO2lDQUVMLEtBQUs7eUJBRUwsTUFBTTt3QkFDTixNQUFNO3VCQUVOLE1BQU07OzRCQS9EVDs7U0EwQ2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZmFFeWUsIGZhRXllU2xhc2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wYXNzd29yZCcsXG4gIHRlbXBsYXRlOiBgPGlucHV0XG4gIFt0eXBlXT1cInBhc3N3b3JkRmllbGRUeXBlXCJcbiAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gIFtuYW1lXT1cIm5hbWVcIlxuICBbaWRdPVwiaWRcIlxuICAjcGFzc3dvcmQ9XCJuZ01vZGVsXCJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgW3RhYmluZGV4XT1cInRhYmluZGV4XCJcbiAgW21pbmxlbmd0aF09XCJwYXN3b3JkTWluTGVuZ3RoXCJcbiAgW21heGxlbmd0aF09XCJwYXN3b3JkTWF4TGVuZ3RoXCJcbiAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcbiAgKGlucHV0KT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICBhdXRvZm9jdXNcbi8+XG5cbjxzcGFuICpuZ0lmPVwiaXNWaWV3UGFzc3dvcmRcIj5cbiAgPHNwYW4gKm5nSWY9XCJ2YWx1ZVwiIGNsYXNzPVwicGFzc3dvcmQtZXllXCI+XG4gICAgPHNwYW4gKm5nSWY9XCJwYXNzd29yZEZpZWxkVHlwZSA9PT0gJ3RleHQnXCI+XG4gICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUV5ZVwiIChjbGljayk9XCJwYXNzd29yZFZpc2liaWxpdHkoKVwiPjwvZmEtaWNvbj5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJwYXNzd29yZEZpZWxkVHlwZSA9PT0gJ3Bhc3N3b3JkJ1wiPlxuICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFFeWVTbGFzaFwiIChjbGljayk9XCJwYXNzd29yZFZpc2liaWxpdHkoKVwiPjwvZmEtaWNvbj5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbjwvc3Bhbj5cblxuPGRpdiBjbGFzcz1cIm1kLWVycm9ycy1zcGFjZXJcIiAqbmdJZj1cInBhc3N3b3JkLmludmFsaWQgJiYgcGFzc3dvcmQudG91Y2hlZFwiPlxuICA8ZGl2ICpuZ0lmPVwicGFzc3dvcmQuZXJyb3JzICYmIHBhc3N3b3JkLmludmFsaWRcIj5cbiAgICA8cCBjbGFzcz1cImVycm9yLXRleHRcIj57eyBwYXNzd29yZEVycm9yTmFtZSB9fTwvcD5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AuZm9ybS1jb250cm9se3dpZHRoOjUwJTtwYWRkaW5nOjEycHggMjBweDttYXJnaW46OHB4IDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JveC1zaXppbmc6Ym9yZGVyLWJveH0uZXJyb3ItdGV4dHtjb2xvcjpyZWR9YF1cbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDb21wb25lbnQge1xuXG4gIGZhRXllOiBhbnkgPSBmYUV5ZTtcbiAgZmFFeWVTbGFzaDogYW55ID0gZmFFeWVTbGFzaDtcblxuICBASW5wdXQoKSBwYXN3b3JkTWluTGVuZ3RoOiBOdW1iZXIgPSAzO1xuICBASW5wdXQoKSBwYXN3b3JkTWF4TGVuZ3RoOiBOdW1iZXIgPSAyNTU7XG4gIEBJbnB1dCgpIHBhc3N3b3JkRmllbGRUeXBlOiBTdHJpbmcgPSBcInBhc3N3b3JkXCI7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHZhbHVlOiBTdHJpbmc7XG4gIEBJbnB1dCgpIHRhYmluZGV4OiBOdW1iZXIgPSAxO1xuICBASW5wdXQoKSBpZDogU3RyaW5nID0gXCJwYXNzd29yZFwiO1xuICBASW5wdXQoKSBuYW1lOiBTdHJpbmcgPSBcInBhc3N3b3JkXCI7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBTdHJpbmcgPSBcInBhc3N3b3JkXCI7XG4gIEBJbnB1dCgpIHBhc3N3b3JkRXJyb3JOYW1lOiBTdHJpbmcgPVxuICAgIFwiVGhlIHBhc3N3b3JkIGZpZWxkIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzXCI7XG4gIEBJbnB1dCgpIGlzVmlld1Bhc3N3b3JkOiBCb29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgb25Gb2N1cyhldmVudCkge1xuICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gIH1cbiAgb25CbHVyKGV2ZW50KSB7XG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICB9XG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cbiAgcGFzc3dvcmRWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMucGFzc3dvcmRGaWVsZFR5cGUgPVxuICAgICAgdGhpcy5wYXNzd29yZEZpZWxkVHlwZSA9PT0gXCJwYXNzd29yZFwiID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCI7XG4gIH1cbn1cbiJdfQ==