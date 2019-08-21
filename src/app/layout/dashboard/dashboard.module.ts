import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { CommonModule } from '@angular/common';
// import { AppComponent } from './app.component';

import { jqxChartModule } from 'jqwidgets-ng/jqxchart';

import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule,
        Ng2Charts,
        CommonModule,
        jqxChartModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ],
    providers: [],
    bootstrap: [DashboardComponent]
})
export class DashboardModule {}
