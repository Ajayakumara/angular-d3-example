import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Chart } from 'angular-highcharts';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    chart: Chart;
    constructor() {}
    init() {
        let chart = new Chart({
          chart: {
            type: 'line',
          },
          
          title: {
            text: 'PSPP'
          },
          
         yAxis: {
                title: {
                    text: 'PSPP'
                }
            }
          ,
          credits: {
            enabled: false
          },
          series: [
          {
            type: 'line',
            name: 'Time',
            data: [2, 1, 4,1,6],
            legend:'asas',
            marker: {
              symbol: 'circle',
                fillColor:'#fff',
                radius: 5,
                   lineColor: '#000',
                   lineWidth: 1
             },
          }
          ]
        });
        chart.addPoint(4);
    this.chart = chart;
    chart.addPoint(5);
    // setTimeout(() => {
    //   chart.addPoint(6);
    // }, 2000);

    chart.ref$.subscribe(console.log);
  }

    ngOnInit() {
        this.init();
    }
}
