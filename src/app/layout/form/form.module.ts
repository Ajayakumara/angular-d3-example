import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'angular-highcharts';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule,ChartModule],
    declarations: [FormComponent]
})
export class FormModule {}
