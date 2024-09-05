import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'formly-form-viewer',
  standalone: true,
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"
                   [ngClass]="customFieldClass">
      </formly-form>
      <ion-button type="submit">Submit</ion-button>
    </form>
  `,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyIonicModule,
    IonicModule
  ],
  styles: [`
    .default-formly-field {
      margin-bottom: 15px;
      padding: 10px;
    }
  `]
})
export class FormlyViewerComponent implements OnInit {
  @Input() form: FormGroup = new FormGroup({});
  @Input() fields: FormlyFieldConfig[] = [];
  @Input() model: any = {};
  @Input() options: FormlyFormOptions = {};
  @Input() customFieldClass: string = 'default-formly-field';

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      console.log(this.model);
    }
  }
}
