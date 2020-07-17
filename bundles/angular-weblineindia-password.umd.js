(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/angular-fontawesome'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-weblineindia-password', ['exports', '@angular/core', '@fortawesome/free-solid-svg-icons', '@fortawesome/angular-fontawesome', '@angular/forms', '@angular/common'], factory) :
    (factory((global['angular-weblineindia-password'] = {}),global.ng.core,null,null,global.ng.forms,global.ng.common));
}(this, (function (exports,i0,freeSolidSvgIcons,angularFontawesome,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PasswordService = (function () {
        function PasswordService() {
        }
        PasswordService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        PasswordService.ctorParameters = function () { return []; };
        /** @nocollapse */ PasswordService.ngInjectableDef = i0.defineInjectable({ factory: function PasswordService_Factory() { return new PasswordService(); }, token: PasswordService, providedIn: "root" });
        return PasswordService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PasswordComponent = (function () {
        function PasswordComponent() {
            this.faEye = freeSolidSvgIcons.faEye;
            this.faEyeSlash = freeSolidSvgIcons.faEyeSlash;
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
            this.change = new i0.EventEmitter();
            this.focus = new i0.EventEmitter();
            this.blur = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'lib-password',
                        template: "<input\n  [type]=\"passwordFieldType\"\n  class=\"form-control\"\n  [placeholder]=\"placeholder\"\n  [ngModel]=\"value\"\n  [name]=\"name\"\n  [id]=\"id\"\n  #password=\"ngModel\"\n  [disabled]=\"disabled\"\n  [tabindex]=\"tabindex\"\n  [minlength]=\"paswordMinLength\"\n  [maxlength]=\"paswordMaxLength\"\n  (focus)=\"onFocus($event)\"\n  (blur)=\"onBlur($event)\"\n  (input)=\"onChange($event)\"\n  autofocus\n/>\n\n<span *ngIf=\"isViewPassword\">\n  <span *ngIf=\"value\" class=\"password-eye\">\n    <span *ngIf=\"passwordFieldType === 'text'\">\n      <fa-icon [icon]=\"faEye\" (click)=\"passwordVisibility()\"></fa-icon>\n    </span>\n    <span *ngIf=\"passwordFieldType === 'password'\">\n      <fa-icon [icon]=\"faEyeSlash\" (click)=\"passwordVisibility()\"></fa-icon>\n    </span>\n  </span>\n</span>\n\n<div class=\"md-errors-spacer\" *ngIf=\"password.invalid && password.touched\">\n  <div *ngIf=\"password.errors && password.invalid\">\n    <p class=\"error-text\">{{ passwordErrorName }}</p>\n  </div>\n</div>\n",
                        styles: [".form-control{width:50%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.error-text{color:red}"]
                    },] },
        ];
        PasswordComponent.propDecorators = {
            paswordMinLength: [{ type: i0.Input }],
            paswordMaxLength: [{ type: i0.Input }],
            passwordFieldType: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            tabindex: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            passwordErrorName: [{ type: i0.Input }],
            isViewPassword: [{ type: i0.Input }],
            change: [{ type: i0.Output }],
            focus: [{ type: i0.Output }],
            blur: [{ type: i0.Output }]
        };
        return PasswordComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PasswordModule = (function () {
        function PasswordModule() {
        }
        PasswordModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angularFontawesome.FontAwesomeModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            common.CommonModule
                        ],
                        declarations: [PasswordComponent],
                        exports: [PasswordComponent]
                    },] },
        ];
        return PasswordModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.PasswordService = PasswordService;
    exports.PasswordComponent = PasswordComponent;
    exports.PasswordModule = PasswordModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13ZWJsaW5laW5kaWEtcGFzc3dvcmQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLXdlYmxpbmVpbmRpYS1wYXNzd29yZC9saWIvcGFzc3dvcmQuc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci13ZWJsaW5laW5kaWEtcGFzc3dvcmQvbGliL3Bhc3N3b3JkLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci13ZWJsaW5laW5kaWEtcGFzc3dvcmQvbGliL3Bhc3N3b3JkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGZhRXllLCBmYUV5ZVNsYXNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZTogYDxpbnB1dFxuICBbdHlwZV09XCJwYXNzd29yZEZpZWxkVHlwZVwiXG4gIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgW25nTW9kZWxdPVwidmFsdWVcIlxuICBbbmFtZV09XCJuYW1lXCJcbiAgW2lkXT1cImlkXCJcbiAgI3Bhc3N3b3JkPVwibmdNb2RlbFwiXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIFt0YWJpbmRleF09XCJ0YWJpbmRleFwiXG4gIFttaW5sZW5ndGhdPVwicGFzd29yZE1pbkxlbmd0aFwiXG4gIFttYXhsZW5ndGhdPVwicGFzd29yZE1heExlbmd0aFwiXG4gIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXG4gIChpbnB1dCk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgYXV0b2ZvY3VzXG4vPlxuXG48c3BhbiAqbmdJZj1cImlzVmlld1Bhc3N3b3JkXCI+XG4gIDxzcGFuICpuZ0lmPVwidmFsdWVcIiBjbGFzcz1cInBhc3N3b3JkLWV5ZVwiPlxuICAgIDxzcGFuICpuZ0lmPVwicGFzc3dvcmRGaWVsZFR5cGUgPT09ICd0ZXh0J1wiPlxuICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFFeWVcIiAoY2xpY2spPVwicGFzc3dvcmRWaXNpYmlsaXR5KClcIj48L2ZhLWljb24+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwicGFzc3dvcmRGaWVsZFR5cGUgPT09ICdwYXNzd29yZCdcIj5cbiAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhRXllU2xhc2hcIiAoY2xpY2spPVwicGFzc3dvcmRWaXNpYmlsaXR5KClcIj48L2ZhLWljb24+XG4gICAgPC9zcGFuPlxuICA8L3NwYW4+XG48L3NwYW4+XG5cbjxkaXYgY2xhc3M9XCJtZC1lcnJvcnMtc3BhY2VyXCIgKm5nSWY9XCJwYXNzd29yZC5pbnZhbGlkICYmIHBhc3N3b3JkLnRvdWNoZWRcIj5cbiAgPGRpdiAqbmdJZj1cInBhc3N3b3JkLmVycm9ycyAmJiBwYXNzd29yZC5pbnZhbGlkXCI+XG4gICAgPHAgY2xhc3M9XCJlcnJvci10ZXh0XCI+e3sgcGFzc3dvcmRFcnJvck5hbWUgfX08L3A+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLmZvcm0tY29udHJvbHt3aWR0aDo1MCU7cGFkZGluZzoxMnB4IDIwcHg7bWFyZ2luOjhweCAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjoxcHggc29saWQgI2NjYztib3gtc2l6aW5nOmJvcmRlci1ib3h9LmVycm9yLXRleHR7Y29sb3I6cmVkfWBdXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ29tcG9uZW50IHtcblxuICBmYUV5ZTogYW55ID0gZmFFeWU7XG4gIGZhRXllU2xhc2g6IGFueSA9IGZhRXllU2xhc2g7XG5cbiAgQElucHV0KCkgcGFzd29yZE1pbkxlbmd0aDogTnVtYmVyID0gMztcbiAgQElucHV0KCkgcGFzd29yZE1heExlbmd0aDogTnVtYmVyID0gMjU1O1xuICBASW5wdXQoKSBwYXNzd29yZEZpZWxkVHlwZTogU3RyaW5nID0gXCJwYXNzd29yZFwiO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB2YWx1ZTogU3RyaW5nO1xuICBASW5wdXQoKSB0YWJpbmRleDogTnVtYmVyID0gMTtcbiAgQElucHV0KCkgaWQ6IFN0cmluZyA9IFwicGFzc3dvcmRcIjtcbiAgQElucHV0KCkgbmFtZTogU3RyaW5nID0gXCJwYXNzd29yZFwiO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogU3RyaW5nID0gXCJwYXNzd29yZFwiO1xuICBASW5wdXQoKSBwYXNzd29yZEVycm9yTmFtZTogU3RyaW5nID1cbiAgICBcIlRoZSBwYXNzd29yZCBmaWVsZCBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVyc1wiO1xuICBASW5wdXQoKSBpc1ZpZXdQYXNzd29yZDogQm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG9uRm9jdXMoZXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICB9XG4gIG9uQmx1cihldmVudCkge1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgfVxuICBvbkNoYW5nZShldmVudCkge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG4gIHBhc3N3b3JkVmlzaWJpbGl0eSgpIHtcbiAgICB0aGlzLnBhc3N3b3JkRmllbGRUeXBlID1cbiAgICAgIHRoaXMucGFzc3dvcmRGaWVsZFR5cGUgPT09IFwicGFzc3dvcmRcIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3Bhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnOyBcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSAsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Bhc3N3b3JkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Bhc3N3b3JkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiZmFFeWUiLCJmYUV5ZVNsYXNoIiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkZvbnRBd2Vzb21lTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs4QkFKRDs7Ozs7OztBQ0FBOzt5QkE0Q2VDLHVCQUFLOzhCQUNBQyw0QkFBVTtvQ0FFUSxDQUFDO29DQUNELEdBQUc7cUNBQ0YsVUFBVTs0QkFDbEIsS0FBSzs0QkFFTixDQUFDO3NCQUNQLFVBQVU7d0JBQ1IsVUFBVTsrQkFDSCxVQUFVO3FDQUV2QyxrREFBa0Q7a0NBQ2pCLElBQUk7MEJBRUQsSUFBSUMsZUFBWSxFQUFPO3lCQUN4QixJQUFJQSxlQUFZLEVBQU87d0JBRXhCLElBQUlBLGVBQVksRUFBTzs7Ozs7O1FBRTNELG1DQUFPOzs7O1lBQVAsVUFBUSxLQUFLO2dCQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCOzs7OztRQUNELGtDQUFNOzs7O1lBQU4sVUFBTyxLQUFLO2dCQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZCOzs7OztRQUNELG9DQUFROzs7O1lBQVIsVUFBUyxLQUFLO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCOzs7O1FBQ0QsOENBQWtCOzs7WUFBbEI7Z0JBQ0UsSUFBSSxDQUFDLGlCQUFpQjtvQkFDcEIsSUFBSSxDQUFDLGlCQUFpQixLQUFLLFVBQVUsR0FBRyxNQUFNLEdBQUcsVUFBVSxDQUFDO2FBQy9EOztvQkExRUZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLGtnQ0FrQ1g7d0JBQ0MsTUFBTSxFQUFFLENBQUMsZ0pBQWdKLENBQUM7cUJBQzNKOzs7dUNBTUVDLFFBQUs7dUNBQ0xBLFFBQUs7d0NBQ0xBLFFBQUs7K0JBQ0xBLFFBQUs7NEJBQ0xBLFFBQUs7K0JBQ0xBLFFBQUs7eUJBQ0xBLFFBQUs7MkJBQ0xBLFFBQUs7a0NBQ0xBLFFBQUs7d0NBQ0xBLFFBQUs7cUNBRUxBLFFBQUs7NkJBRUxDLFNBQU07NEJBQ05BLFNBQU07MkJBRU5BLFNBQU07O2dDQS9EVDs7Ozs7OztBQ0FBOzs7O29CQU1DQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxvQ0FBaUI7NEJBQ2pCQyxpQkFBVzs0QkFDWEMseUJBQW1COzRCQUNuQkMsbUJBQVk7eUJBQ2I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7d0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO3FCQUM3Qjs7NkJBZkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=