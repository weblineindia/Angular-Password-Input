/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
export class PasswordComponent {
    constructor() {
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
    onFocus(event) {
        this.focus.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.blur.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.change.emit(event);
    }
    /**
     * @return {?}
     */
    passwordVisibility() {
        this.passwordFieldType =
            this.passwordFieldType === "password" ? "text" : "password";
    }
}
PasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-password',
                template: `<input
  [type]="passwordFieldType"
  class="form-control"
  [placeholder]="placeholder"
  [ngModel]="value"
  [name]="name"
  [id]="id"
  #password="ngModel"
  [disabled]="disabled"
  [tabindex]="tabindex"
  [minlength]="paswordMinLength"
  [maxlength]="paswordMaxLength"
  (focus)="onFocus($event)"
  (blur)="onBlur($event)"
  (input)="onChange($event)"
  autofocus
/>

<span *ngIf="isViewPassword">
  <span *ngIf="value" class="password-eye">
    <span *ngIf="passwordFieldType === 'text'">
      <fa-icon [icon]="faEye" (click)="passwordVisibility()"></fa-icon>
    </span>
    <span *ngIf="passwordFieldType === 'password'">
      <fa-icon [icon]="faEyeSlash" (click)="passwordVisibility()"></fa-icon>
    </span>
  </span>
</span>

<div class="md-errors-spacer" *ngIf="password.invalid && password.touched">
  <div *ngIf="password.errors && password.invalid">
    <p class="error-text">{{ passwordErrorName }}</p>
  </div>
</div>
`,
                styles: [`.form-control{width:50%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.error-text{color:red}`]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci13ZWJsaW5laW5kaWEtcGFzc3dvcmQvIiwic291cmNlcyI6WyJsaWIvcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUF5Q3RFLE1BQU07O3FCQUVTLEtBQUs7MEJBQ0EsVUFBVTtnQ0FFUSxDQUFDO2dDQUNELEdBQUc7aUNBQ0YsVUFBVTt3QkFDbEIsS0FBSzt3QkFFTixDQUFDO2tCQUNQLFVBQVU7b0JBQ1IsVUFBVTsyQkFDSCxVQUFVO2lDQUV2QyxrREFBa0Q7OEJBQ2pCLElBQUk7c0JBRUQsSUFBSSxZQUFZLEVBQU87cUJBQ3hCLElBQUksWUFBWSxFQUFPO29CQUV4QixJQUFJLFlBQVksRUFBTzs7Ozs7O0lBRTNELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7Ozs7O0lBQ0QsTUFBTSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2Qjs7Ozs7SUFDRCxRQUFRLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCOzs7O0lBQ0Qsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUI7WUFDcEIsSUFBSSxDQUFDLGlCQUFpQixLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7S0FDL0Q7OztZQTFFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtDWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxnSkFBZ0osQ0FBQzthQUMzSjs7OytCQU1FLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLO2lCQUNMLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7NkJBRUwsS0FBSztxQkFFTCxNQUFNO29CQUNOLE1BQU07bUJBRU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGZhRXllLCBmYUV5ZVNsYXNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZTogYDxpbnB1dFxuICBbdHlwZV09XCJwYXNzd29yZEZpZWxkVHlwZVwiXG4gIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgW25nTW9kZWxdPVwidmFsdWVcIlxuICBbbmFtZV09XCJuYW1lXCJcbiAgW2lkXT1cImlkXCJcbiAgI3Bhc3N3b3JkPVwibmdNb2RlbFwiXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIFt0YWJpbmRleF09XCJ0YWJpbmRleFwiXG4gIFttaW5sZW5ndGhdPVwicGFzd29yZE1pbkxlbmd0aFwiXG4gIFttYXhsZW5ndGhdPVwicGFzd29yZE1heExlbmd0aFwiXG4gIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXG4gIChpbnB1dCk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgYXV0b2ZvY3VzXG4vPlxuXG48c3BhbiAqbmdJZj1cImlzVmlld1Bhc3N3b3JkXCI+XG4gIDxzcGFuICpuZ0lmPVwidmFsdWVcIiBjbGFzcz1cInBhc3N3b3JkLWV5ZVwiPlxuICAgIDxzcGFuICpuZ0lmPVwicGFzc3dvcmRGaWVsZFR5cGUgPT09ICd0ZXh0J1wiPlxuICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFFeWVcIiAoY2xpY2spPVwicGFzc3dvcmRWaXNpYmlsaXR5KClcIj48L2ZhLWljb24+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwicGFzc3dvcmRGaWVsZFR5cGUgPT09ICdwYXNzd29yZCdcIj5cbiAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhRXllU2xhc2hcIiAoY2xpY2spPVwicGFzc3dvcmRWaXNpYmlsaXR5KClcIj48L2ZhLWljb24+XG4gICAgPC9zcGFuPlxuICA8L3NwYW4+XG48L3NwYW4+XG5cbjxkaXYgY2xhc3M9XCJtZC1lcnJvcnMtc3BhY2VyXCIgKm5nSWY9XCJwYXNzd29yZC5pbnZhbGlkICYmIHBhc3N3b3JkLnRvdWNoZWRcIj5cbiAgPGRpdiAqbmdJZj1cInBhc3N3b3JkLmVycm9ycyAmJiBwYXNzd29yZC5pbnZhbGlkXCI+XG4gICAgPHAgY2xhc3M9XCJlcnJvci10ZXh0XCI+e3sgcGFzc3dvcmRFcnJvck5hbWUgfX08L3A+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLmZvcm0tY29udHJvbHt3aWR0aDo1MCU7cGFkZGluZzoxMnB4IDIwcHg7bWFyZ2luOjhweCAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjoxcHggc29saWQgI2NjYztib3gtc2l6aW5nOmJvcmRlci1ib3h9LmVycm9yLXRleHR7Y29sb3I6cmVkfWBdXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ29tcG9uZW50IHtcblxuICBmYUV5ZTogYW55ID0gZmFFeWU7XG4gIGZhRXllU2xhc2g6IGFueSA9IGZhRXllU2xhc2g7XG5cbiAgQElucHV0KCkgcGFzd29yZE1pbkxlbmd0aDogTnVtYmVyID0gMztcbiAgQElucHV0KCkgcGFzd29yZE1heExlbmd0aDogTnVtYmVyID0gMjU1O1xuICBASW5wdXQoKSBwYXNzd29yZEZpZWxkVHlwZTogU3RyaW5nID0gXCJwYXNzd29yZFwiO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB2YWx1ZTogU3RyaW5nO1xuICBASW5wdXQoKSB0YWJpbmRleDogTnVtYmVyID0gMTtcbiAgQElucHV0KCkgaWQ6IFN0cmluZyA9IFwicGFzc3dvcmRcIjtcbiAgQElucHV0KCkgbmFtZTogU3RyaW5nID0gXCJwYXNzd29yZFwiO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogU3RyaW5nID0gXCJwYXNzd29yZFwiO1xuICBASW5wdXQoKSBwYXNzd29yZEVycm9yTmFtZTogU3RyaW5nID1cbiAgICBcIlRoZSBwYXNzd29yZCBmaWVsZCBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVyc1wiO1xuICBASW5wdXQoKSBpc1ZpZXdQYXNzd29yZDogQm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG9uRm9jdXMoZXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICB9XG4gIG9uQmx1cihldmVudCkge1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgfVxuICBvbkNoYW5nZShldmVudCkge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG4gIHBhc3N3b3JkVmlzaWJpbGl0eSgpIHtcbiAgICB0aGlzLnBhc3N3b3JkRmllbGRUeXBlID1cbiAgICAgIHRoaXMucGFzc3dvcmRGaWVsZFR5cGUgPT09IFwicGFzc3dvcmRcIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiO1xuICB9XG59XG4iXX0=