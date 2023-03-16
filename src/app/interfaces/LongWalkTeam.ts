import { FormControl } from "@angular/forms";

export interface LongWalkTeam {
    bioticSpecialist: FormControl<string>;
    fireteamTwoLeader: FormControl<string>;
    crewEscort: FormControl<string>;
    swarmSquadmate1: FormControl<string>;
    swarmSquadmate2: FormControl<string>;
}