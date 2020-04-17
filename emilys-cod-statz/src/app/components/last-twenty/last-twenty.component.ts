import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-last-twenty',
  templateUrl: './last-twenty.component.html',
  styleUrls: ['./last-twenty.component.scss']
})
export class LastTwentyComponent implements OnInit {
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[] = ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5', 'Game 6', 'Game 7', 'Game 8', 'Game 9',
   'Game 10', 'Game 11', 'Game 12', 'Game 13', 'Game 14', 'Game 15', 'Game 16', 'Game 17', 'Game 18', 'Game 19', 'Game 20'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    annotation: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  public kills = [];
  public damage = [];

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.kills = [];
    this.damage = [];
    this.getStats();
  }

  private getStats() {
    this.statsService.getStats().subscribe((res: any) => {
      console.log(res);
      res.body.matches.forEach(match => {
        this.kills.push(match.playerStats.kills);
        this.damage.push(match.playerStats.damageDone);
      });
      this.lineChartData = [
        { data: this.kills, label: 'Kills' },
      ];

      console.log(this.lineChartData);
      console.log(this.kills);
      console.log(this.damage);
    });
  }

}
