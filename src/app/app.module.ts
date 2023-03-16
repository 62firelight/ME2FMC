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

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    SquadmatesStatusPipe,
    SquadmateStatusComponent
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
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
