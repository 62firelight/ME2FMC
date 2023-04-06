import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { SquadmatesStatusPipe } from './pipes/squadmates-status.pipe';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { SquadmateStatusComponent } from './components/squadmate-status/squadmate-status.component';
import { ShipUpgradesComponent } from './components/ship-upgrades/ship-upgrades.component';
import { OculusSquadmatesComponent } from './components/oculus-squadmates/oculus-squadmates.component';
import { InfiltrationTeamComponent } from './components/infiltration-team/infiltration-team.component';
import { LongWalkTeamComponent } from './components/long-walk-team/long-walk-team.component';
import { FinalBattleTeamComponent } from './components/final-battle-team/final-battle-team.component';
import { HoldTheLineComponent } from './components/hold-the-line/hold-the-line.component';
import { FinalOutcomeComponent } from './components/final-outcome/final-outcome.component';
import { SummaryComponent } from './components/summary/summary.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialog } from './components/calculator/confirm-dialog';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    SquadmatesStatusPipe,
    SquadmateStatusComponent,
    ShipUpgradesComponent,
    OculusSquadmatesComponent,
    InfiltrationTeamComponent,
    LongWalkTeamComponent,
    FinalBattleTeamComponent,
    HoldTheLineComponent,
    FinalOutcomeComponent,
    SummaryComponent,
    CalculatorComponent,
    ConfirmDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    MatSelectModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    ClipboardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
