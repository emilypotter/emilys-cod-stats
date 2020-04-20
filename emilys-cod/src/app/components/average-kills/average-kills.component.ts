import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats.service';

@Component({
  selector: 'app-average-kills',
  templateUrl: './average-kills.component.html',
  styleUrls: ['./average-kills.component.scss']
})
export class AverageKillsComponent implements OnInit {

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.getStats();
  }

  private getStats() {
    this.statsService.getStats().subscribe((res: any) => {
      console.log(res);
    });
  }

}
