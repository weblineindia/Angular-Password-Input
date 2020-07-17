import { Injectable, Component, Input, Output, EventEmitter, NgModule, defineInjectable } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PasswordService {
    constructor() { }
}
PasswordService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
PasswordService.ctorParameters = () => [];
/** @nocollapse */ PasswordService.ngInjectableDef = defineInjectable({ factory: function PasswordService_Factory() { return new PasswordService(); }, token: PasswordService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PasswordComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PasswordModule {
}
PasswordModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FontAwesomeModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule
                ],
                declarations: [PasswordComponent],
                exports: [PasswordComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { PasswordService, PasswordComponent, PasswordModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13ZWJsaW5laW5kaWEtcGFzc3dvcmQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FuZ3VsYXItd2VibGluZWluZGlhLXBhc3N3b3JkL2xpYi9wYXNzd29yZC5zZXJ2aWNlLnRzIiwibmc6Ly9hbmd1bGFyLXdlYmxpbmVpbmRpYS1wYXNzd29yZC9saWIvcGFzc3dvcmQuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXdlYmxpbmVpbmRpYS1wYXNzd29yZC9saWIvcGFzc3dvcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZmFFeWUsIGZhRXllU2xhc2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wYXNzd29yZCcsXG4gIHRlbXBsYXRlOiBgPGlucHV0XG4gIFt0eXBlXT1cInBhc3N3b3JkRmllbGRUeXBlXCJcbiAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gIFtuYW1lXT1cIm5hbWVcIlxuICBbaWRdPVwiaWRcIlxuICAjcGFzc3dvcmQ9XCJuZ01vZGVsXCJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgW3RhYmluZGV4XT1cInRhYmluZGV4XCJcbiAgW21pbmxlbmd0aF09XCJwYXN3b3JkTWluTGVuZ3RoXCJcbiAgW21heGxlbmd0aF09XCJwYXN3b3JkTWF4TGVuZ3RoXCJcbiAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcbiAgKGlucHV0KT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICBhdXRvZm9jdXNcbi8+XG5cbjxzcGFuICpuZ0lmPVwiaXNWaWV3UGFzc3dvcmRcIj5cbiAgPHNwYW4gKm5nSWY9XCJ2YWx1ZVwiIGNsYXNzPVwicGFzc3dvcmQtZXllXCI+XG4gICAgPHNwYW4gKm5nSWY9XCJwYXNzd29yZEZpZWxkVHlwZSA9PT0gJ3RleHQnXCI+XG4gICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUV5ZVwiIChjbGljayk9XCJwYXNzd29yZFZpc2liaWxpdHkoKVwiPjwvZmEtaWNvbj5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJwYXNzd29yZEZpZWxkVHlwZSA9PT0gJ3Bhc3N3b3JkJ1wiPlxuICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFFeWVTbGFzaFwiIChjbGljayk9XCJwYXNzd29yZFZpc2liaWxpdHkoKVwiPjwvZmEtaWNvbj5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbjwvc3Bhbj5cblxuPGRpdiBjbGFzcz1cIm1kLWVycm9ycy1zcGFjZXJcIiAqbmdJZj1cInBhc3N3b3JkLmludmFsaWQgJiYgcGFzc3dvcmQudG91Y2hlZFwiPlxuICA8ZGl2ICpuZ0lmPVwicGFzc3dvcmQuZXJyb3JzICYmIHBhc3N3b3JkLmludmFsaWRcIj5cbiAgICA8cCBjbGFzcz1cImVycm9yLXRleHRcIj57eyBwYXNzd29yZEVycm9yTmFtZSB9fTwvcD5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AuZm9ybS1jb250cm9se3dpZHRoOjUwJTtwYWRkaW5nOjEycHggMjBweDttYXJnaW46OHB4IDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JveC1zaXppbmc6Ym9yZGVyLWJveH0uZXJyb3ItdGV4dHtjb2xvcjpyZWR9YF1cbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDb21wb25lbnQge1xuXG4gIGZhRXllOiBhbnkgPSBmYUV5ZTtcbiAgZmFFeWVTbGFzaDogYW55ID0gZmFFeWVTbGFzaDtcblxuICBASW5wdXQoKSBwYXN3b3JkTWluTGVuZ3RoOiBOdW1iZXIgPSAzO1xuICBASW5wdXQoKSBwYXN3b3JkTWF4TGVuZ3RoOiBOdW1iZXIgPSAyNTU7XG4gIEBJbnB1dCgpIHBhc3N3b3JkRmllbGRUeXBlOiBTdHJpbmcgPSBcInBhc3N3b3JkXCI7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHZhbHVlOiBTdHJpbmc7XG4gIEBJbnB1dCgpIHRhYmluZGV4OiBOdW1iZXIgPSAxO1xuICBASW5wdXQoKSBpZDogU3RyaW5nID0gXCJwYXNzd29yZFwiO1xuICBASW5wdXQoKSBuYW1lOiBTdHJpbmcgPSBcInBhc3N3b3JkXCI7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBTdHJpbmcgPSBcInBhc3N3b3JkXCI7XG4gIEBJbnB1dCgpIHBhc3N3b3JkRXJyb3JOYW1lOiBTdHJpbmcgPVxuICAgIFwiVGhlIHBhc3N3b3JkIGZpZWxkIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzXCI7XG4gIEBJbnB1dCgpIGlzVmlld1Bhc3N3b3JkOiBCb29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgb25Gb2N1cyhldmVudCkge1xuICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gIH1cbiAgb25CbHVyKGV2ZW50KSB7XG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICB9XG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cbiAgcGFzc3dvcmRWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMucGFzc3dvcmRGaWVsZFR5cGUgPVxuICAgICAgdGhpcy5wYXNzd29yZEZpZWxkVHlwZSA9PT0gXCJwYXNzd29yZFwiID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCI7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7IFxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlICxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUGFzc3dvcmRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUGFzc3dvcmRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEOztxQkE0Q2UsS0FBSzswQkFDQSxVQUFVO2dDQUVRLENBQUM7Z0NBQ0QsR0FBRztpQ0FDRixVQUFVO3dCQUNsQixLQUFLO3dCQUVOLENBQUM7a0JBQ1AsVUFBVTtvQkFDUixVQUFVOzJCQUNILFVBQVU7aUNBRXZDLGtEQUFrRDs4QkFDakIsSUFBSTtzQkFFRCxJQUFJLFlBQVksRUFBTztxQkFDeEIsSUFBSSxZQUFZLEVBQU87b0JBRXhCLElBQUksWUFBWSxFQUFPOzs7Ozs7SUFFM0QsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4Qjs7Ozs7SUFDRCxNQUFNLENBQUMsS0FBSztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3ZCOzs7OztJQUNELFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7Ozs7SUFDRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQjtZQUNwQixJQUFJLENBQUMsaUJBQWlCLEtBQUssVUFBVSxHQUFHLE1BQU0sR0FBRyxVQUFVLENBQUM7S0FDL0Q7OztZQTFFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtDWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxnSkFBZ0osQ0FBQzthQUMzSjs7OytCQU1FLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLO2lCQUNMLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7NkJBRUwsS0FBSztxQkFFTCxNQUFNO29CQUNOLE1BQU07bUJBRU4sTUFBTTs7Ozs7OztBQy9EVDs7O1lBTUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM3Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9