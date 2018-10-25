import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../shared/servers/settings/settings.service';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../shared/servers/notification/notification.service';

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.scss'],
  providers: [SettingsService]
})
export class LineChartsComponent implements OnInit {
  dataGroup: Array<any>;
  echartsIntance: any;
  chartOption: any;
  settings: any;

  titleSizes: Array<number>;
  subtitleSizes: Array<number>;

  constructor(private settingsService: SettingsService, public translate: TranslateService, private notificationService: NotificationService) {
    this.dataGroup = [{
      title: '邮件营销',
      xData: '周一,周二,周三,周四,周五,周六,周日',
      yData: '120, 132, 101, 134, 90, 230, 210'
    }];
    this.settings = {
      'titleChecked': true,
      'title': '折线图',
      'subtitle': 'power by echarts',
      'titleColor': '',
      'subtitleColor': '',
      'titleFontSize': '',
      'subtitleFontSize': '',
      'itemGap': 10,
      'titleTop': 0,
      'titleLeft': 0,
      'borderColor': '',
      'borderWidth': 0,
      'legendChecked': true,
      'legendTop': 0,
      'legendLeft': 50,
      'legendOrient': 'horizontal',
      'legendItemGap': 10,
      'isSelectedMode': true,
      'legendFontSize': '',
      'legendColor': '',
      'legendBorderColor': '',
      'legendBorderWidth': '',
      'gridChecked': false,
      'gridTop': 17,
      'gridLeft': 3,
      'gridRight': 4,
      'gridBottom': 12,
      'containLabel': true,
      'gridBorderWidth': '',
      'gridBorderColor': '',
      'xAxisPosition': '',
      'xAxisType': '',
      'xAxisName': '',
      'xAxisNameLocation': '',
      'xAxisFontSize': '',
      'xAxisColor': '',
      'xAxisItemGap': 15
    };
    this.setChartOption();  // 初始化echarts
  }

  ngOnInit() {
    this.titleSizes = this.subtitleSizes = [
      8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
      28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
    ];
    this.notificationService.getData().subscribe(
      value => {
        switch (value.id) {
          case 'series':
            this.dataGroup = value.message;
        }
        this.reloadEcharts();
      }
    )
  }

  // 重新加载echarts
  reloadEcharts() {
    this.setChartOption();
    this.echartsIntance.setOption(this.chartOption, {
      notMerge: true
    });
  }

  setChartOption() {
    this.chartOption = this.settingsService.setChartOption(this.settings, this.dataGroup);
  }

  onChartInit(ec) {
    this.echartsIntance = ec;
  }


  /*clearData(){
    this.dataGroup = [];
    this.reloadEcharts();
  }*/

}
