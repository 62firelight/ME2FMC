import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squadmatesStatus',
  pure: false
})
export class SquadmatesStatusPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): string {
    var squadmateStatus = '';

    for (var squadmate of value) {
      squadmateStatus += squadmate.name + ' - ';

      if (squadmate.deathReason.length == 0) {
        squadmateStatus += 'Alive\n';
      } else {
        squadmateStatus += 'Dead (' + squadmate.deathReason + ")\n";
      }
    }

    return squadmateStatus;
  }

}
