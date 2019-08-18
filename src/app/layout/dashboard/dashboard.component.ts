import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Color } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    
  
    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: false,
        maintainAspectRatio: false,
        legend:
        {
            display:false
        }
    };
    public barChartLabels: string[] = [
        '4.30',
        '4.35',
        '4.40',
        '4.45',
        '4.50',
        '4.55',
        '5.00',
        '5.05',
        '5.10',
        '5.15',
        '5.20',
        '5.25',
        '5.30',
        '5.35',
        '5.40',
        '5.45'
    ];
    public barChartType: string;
    public barChartLegend: boolean;

    public barChartData: any[] = [
        { data: [] }
        //65, 59, 80, 81, 56, 55, 40,56,45,22,78,12,23,41,90,12
        // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public barChartColors: Color[] = [
        { backgroundColor: 'blue' },
        
      ]
      public retrieved_data: any[] = []

      public get_products(){
        this.httpClient.get('http://18.211.133.12/CI/index.php/IotController/fulldata').subscribe((res: { result: { any : any; }; })=>{
            console.log('The http response is:',res);
            // let data = { data: [65, 59, 80, 81, 56, 55, 40,56,45,22,78,12,23,41,90,12], };
            // this.retrieved_data.push(res);
            // this.barChartData.push(data);

            // let data = [
            //     { data: [35, 59, 80, 81, 56, 55, 40,56,45,22,78,12,23,41,90,12], }
            // ];
            // let clone = JSON.parse(JSON.stringify(this.barChartData[0].data));
           
            //   clone = data;
            //   this.barChartData = clone;
            // console.log('method:',data);
                    let clone = JSON.parse(JSON.stringify(this.barChartData[0].data));
                    let result = res.result;
                    //console.log('the response value is:',result);
                    for(let d in result)
                    {
                        // clone = d.DC_Out_CurrentEU;
                        // this.barChartData = clone;
                        this.barChartData[0].data.push(result[d].DC_Out_CurrentEU);
                        console.log('the response value is:',result[d].DC_Out_CurrentEU);
                         
                    }    
            // res && res.map((i,val) => {
            //     // DC_Out_CurrentEU
                
            // })
         });
        }
        

    constructor(private httpClient: HttpClient) {
        
    }

    ngOnInit() {
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.get_products();
        
        // this.doughnutChartType = 'doughnut';
        // this.radarChartType = 'radar';
        // this.pieChartType = 'pie';
        // this.polarAreaLegend = true;
        // this.polarAreaChartType = 'polarArea';
        // this.lineChartLegend = true;
        // this.lineChartType = 'line';
    }
}