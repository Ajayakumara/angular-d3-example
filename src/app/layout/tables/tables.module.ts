import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';

import { ChartModule } from 'angular-highcharts';


@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule,ChartModule],
    declarations: [TablesComponent]
})
export class TablesModule {}
