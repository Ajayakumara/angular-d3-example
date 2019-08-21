import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';
import { routerTransition } from '../../router.animations';
import { Color } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements AfterViewInit, OnInit {


    constructor(private httpClient: HttpClient) {

    }

    @ViewChild('myChart', {static: false}) myChart: jqxChartComponent;

    data: any[] = [];
    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };
    public customColor:string = '#1c01f782';

    xAxis: any =
    {
        dataField: 'timestamp',
        type: 'date',
        baseUnit: 'second',
        unitInterval: 5,
        formatFunction: (value: any) => {
            return jqx.dataFormat.formatdate(value, 'mm:ss', 'en-us');
        },
        gridLines: { step: 2 },
        valuesOnTicks: true,
        labels: { angle: -30, offset: { x: -17, y: 0 } }
    };

    valueAxis: any =
    {
        minValue: 0,
        maxValue: 1000,
        title: { text: 'DC_Out_VoltageEU' },
        labels: { horizontalAlignment: 'right' }
    };

    seriesGroups: any[] =
    [
        {
            type: 'stackedcolumn',
            columnsGapPercent: 50,
            alignEndPointsWithIntervals: true,
            valueAxis:
            {
                minValue: 0,
                maxValue: 1000,
                title: { text: 'DC_Out_VoltageEU' }
            },
            series: [
                { dataField: 'value', displayText: 'value', opacity: 1, lineWidth: 2, symbolType: 'circle', fillColorSymbolSelected: 'white', symbolSize: 4 }
            ]
        }
    ];

    seriesGroups1: any[] =
    [
        {
            type: 'stackedcolumn',
            columnsGapPercent: 50,
            alignEndPointsWithIntervals: true,
            valueAxis:
            {
                minValue: 0,
                maxValue: 1000,
                title: { text: 'DC_Out_CurrentEU' }
            },
            series: [
                { dataField: 'value', displayText: 'value', opacity: 1, lineWidth: 2, symbolType: 'circle', fillColorSymbolSelected: 'white', symbolSize: 4 }
            ]
        }
    ];

    colorsSchemesList: string[] = ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'];
    seriesList: string[] = ['splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline'];

    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: false,
        maintainAspectRatio: false,
        legend:
        {
            display: false
        }
    };
    public barChartLabels: string[] = [
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021'
    ];
    public barChartType: string;
    public barChartLegend: boolean;

    public barChartData: any[] = [
        { data: [0, ], }
        // 65, 59, 80, 81, 56, 55, 40,56,45,22,78,12,23,41,90,12
        // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    public barChartColors: Color[] = [
        { backgroundColor: 'blue' },

      ];
      public retrieved_data: any[] = [];
    ngOnInit() {
        this.generateChartData();
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.get_products();
    }
	getWidth(): any {
		if(document.body.offsetWidth < 850) {
			return '45%';
		}
		
		return 850;
    }
    
    ngAfterViewInit(): void {
        const data = this.myChart.source();
        let timer = setInterval(() => {
            let max = 800;
            if (data.length >= 60) {
                data.splice(0, 1);
            }
            const timestamp = new Date();
            timestamp.setSeconds(timestamp.getSeconds());
            timestamp.setMilliseconds(0);
            data.push({ timestamp: timestamp, value: Math.max(100, (Math.random() * 1000) % max) });
            this.myChart.update();
        }, 1000);
    }
    colorsOnChange(event: any): void {
        const value = event.args.item.value;
        this.myChart.colorScheme(value);
        this.myChart.update();
    }
    seriesOnChange(event: any): void {
        const args = event.args;
        if (args) {
            const value = args.item.value;
            this.myChart.seriesGroups()[0].type = value;
            this.myChart.update();
        }
    }

    generateChartData = () => {
        const max = 800;
        const timestamp = new Date();
        for (let i = 0; i < 60; i++) {
            timestamp.setMilliseconds(0);
            timestamp.setSeconds(timestamp.getSeconds() - 1);
            this.data.push({ timestamp: new Date(timestamp.valueOf()), value: Math.max(100, (Math.random() * 1000) % max) });
        }
        this.data = this.data.reverse();
    }



    // events
    public chartClicked(e: any): void {
         console.log(e);
    }

    public chartHovered(e: any): void {
       console.log('Hovered value',e);
    }

      public get_products() {
        this.httpClient.get('http://18.211.133.12/CI/index.php/IotController/fulldata').subscribe((res: { result: { any: any; }; }) => {
            console.log('The http response is:', res);
           
                    const clone = JSON.parse(JSON.stringify(this.barChartData[0].data));
                    const result = res.result;
                    // console.log('the response value is:',result);
                    for (const d in result) {
                        // clone = d.DC_Out_CurrentEU;
                        // this.barChartData = clone;
                        this.barChartData[0].data.push(result[d].DC_Out_CurrentEU);
                        console.log('the response value is:', result[d].DC_Out_CurrentEU);

                    }
            
         });
        }

    // ngOnInit() {
    //     this.barChartType = 'bar';
    //     this.barChartLegend = true;
    //     this.get_products();

    //     // this.doughnutChartType = 'doughnut';
    //     // this.radarChartType = 'radar';
    //     // this.pieChartType = 'pie';
    //     // this.polarAreaLegend = true;
    //     // this.polarAreaChartType = 'polarArea';
    //     // this.lineChartLegend = true;
    //     // this.lineChartType = 'line';
    // }

    test(event, value) {
        // console.log('timeStamp:',event.timeStamp);
        console.log(event, value);
    }
}
