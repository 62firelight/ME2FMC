import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HoldTheLineService, HtlResult } from 'src/app/services/hold-the-line.service';

@Component({
  selector: 'app-hold-the-line',
  templateUrl: './hold-the-line.component.html',
  styleUrls: ['./hold-the-line.component.css']
})
export class HoldTheLineComponent {
  htlResult: HtlResult;

  @Input() availableSquadmates: any[] = [];
  @Input() calculateHtlEvent = new Observable<boolean>;
  @Input() finishDeathCalculationEvent = new Observable<string[]>;
  @Input() resetEvent = new Observable<boolean>;
  @Output() finishHtlCalculationEvent = new EventEmitter<{
    defenders: string[],
    numberOfHtlDeaths: number
  }>;

  constructor(private htlService: HoldTheLineService) {
    this.htlResult = htlService.getHtlCalculation();
  }

  ngOnInit() {
    this.resetEvent.subscribe(result => {
      this.htlService.reset();
    });
    this.calculateHtlEvent.subscribe(result => {
      const htlDeaths = this.htlService.calculateHtlScore(this.availableSquadmates);

      this.finishHtlCalculationEvent.emit({
        defenders: htlDeaths.defenders,
        numberOfHtlDeaths: htlDeaths.numberOfHtlDeaths
      });
    });
    this.finishDeathCalculationEvent.subscribe(result => {
      this.htlService.setHtlDeaths(result);
    });
  }

}
