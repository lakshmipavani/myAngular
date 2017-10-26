import { Component} from '@angular/core';
import { ChartModule } from 'angular2-highcharts';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent{

  constructor() {
        this.chart1 = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2]
            }]
        };
        
         this.chart2 = {
          chart2a: { type: 'spline' },
          title: { text : 'dynamic data example'},
          series: [{ data: [2,3,5,8,13] }]
        };
        setInterval(() => this.chart2a.series[0].addPoint(Math.random() * 10), 1000);


        this.chart3 = {
            title : { text : 'mouseOver series events example' },
            series: [
              { name : 'serie 1', data: [29.9, 71.5, 106.4, 129.2, 45,13,120], },
              { name : 'serie 2',  data: [-29.9, 4, -106.4, 0, 10,-100, 120] }
            ]
        };

         this.chart4 = {
            title : { text : 'point select event example' },
            chart: { zoomType: 'x'},
            series: [{ 
              data: [29.9, 71.5, 106.4, 129.2, 45,13,120], 
              allowPointSelect: true
            }]
        };

         this.chart5 = {
            title : { text : 'chart selection event example' },
            chart: { zoomType: 'x'},
            series: [{ data: [29.9, 71.5, 106.4, 129.2, 45,13,120], }]
        };

        this.chart6 = {
          chart: {
            zoomType: 'xy'
          },
          title : { text : 'simple chart' },
          series : [{
            animation: false,
            type: 'line',
            data: [
              [-1743913407000, 29.5], 
              [-1743813407000, 28.5], 
              [-1743713407000, 27.5], 
              [-1743613407000, 26.5], 
              [-1743513407000, 25.5], 
              [-1743413407000, 24.5],
              [-1743313407000, 23.5],
              [-1743213407000, 22.5],
              [-1743113407000, 20.5],
              [-1743013407000, 21.5],
              [-1742913407000, 22.5],
              [-1742813407000, 23.5],
              [-1742713407000, 24.5],
              [-1742613407000, 25.5],
              [-1742513407000, 26.5],
              [-1742413407000, 27.5],
              [-1742313407000, 28.5],
              [-1742213407000, 29.5]
            ]
          }],
          xAxis : {
            type: 'datetime',
            ordinal: false
          }
      };

    }
        chart1: Object;
        chart2: Object;
        chart2a : any;
        serieName: any;
        point: any;
        from:any;
        to:any;
        minX:any;
        minY:any;
        maxX:any;
        maxY:any;
        
         saveInstance(chartInstance) {
            this.chart2a = chartInstance;
         }

        chart3: Object;
        onSeriesMouseOver (e) {
           this.serieName = e.context.name;
        }

        chart4: Object;
        onPointSelect (e) {
          this.point = e.context.y;
        }

        chart5: Object;
        onChartSelection (e) {
           this.from = e.originalEvent.xAxis[0].min.toFixed(2);
           this.to = e.originalEvent.xAxis[0].max.toFixed(2);
        }
       
       chart6: Object;
       onAfterSetExtremesX (e) {
	      this.minX = e.context.min;
	      this.maxX = e.context.max;
	   }
      onAfterSetExtremesY (e) {
	      this.minY = e.context.min;
	      this.maxY = e.context.max;
	  }

}
