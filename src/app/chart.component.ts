import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  chart: Chart;

  ngOnInit() {
    this.init();
  }

  addPoint() {
    if (this.chart) {
      this.chart.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
  }

  addSerie() {
    // this.chart.addSeries({
    //   type: 'line',
    //   name: 'Line ' + Math.floor(Math.random() * 10),
    //   data: [
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10)
    //   ]
    // });
  }

  removePoint() {
    this.chart.removePoint(this.chart.ref.series[0].data.length - 1);
  }

  removeSerie() {
    this.chart.removeSeries(this.chart.ref.series.length - 1);
  }

  init() {
    let chart = new Chart({
      chart: {
        type: 'line',
         
        
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [{
        type: 'line',
        name: 'Line 1',
        data: [1, 2, 3],
        marker: {
            fillColor:'#fff',
            radius: 5,
               lineColor: '#000',
               lineWidth: 1
         },
      },
      {
        type: 'line',
        name: 'Line 1',
        data: [0, 3, 4,1,6],
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
    setTimeout(() => {
      chart.addPoint(6);
    }, 2000);

    chart.ref$.subscribe(console.log);
  }

}
