import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    chart: Chart;
    constructor() {
        
    }
    init() {
        let chart = new Chart({
          chart: {
            type: 'pie',
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
            type: 'pie',
            name: 'DCC',
            data: [
                // ['Firefox',   45.0],
                // ['IE',       26.8],
                {
                   name: 'Chrome',
                   y: 12.8,
                   sliced: true,
                //    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',      0.7]
            ],
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
  init1() {
    let chart1 = new Chart({
      chart: {
        type: 'pie',
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
        type: 'pie',
        name: 'DCC',
        data: [
            // ['Firefox',   45.0],
            // ['IE',       26.8],
            {
               name: 'Chrome',
               y: 12.8,
               sliced: true,
            //    selected: true
            },
            ['Safari',    8.5],
            ['Opera',     6.2],
            ['Others',      0.7]
        ],
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
    chart1.addPoint(4);
        this.chart = chart1;
        chart1.addPoint(5);
// setTimeout(() => {
//   chart.addPoint(6);
// }, 2000);

chart1.ref$.subscribe(console.log);
}

    ngOnInit() {
        this.init();
        this.init1();
       
      
    }
}
