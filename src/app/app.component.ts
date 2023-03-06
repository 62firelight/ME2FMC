import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ME2FMC';

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  squadmateColumns = ['name', 'recruited', 'loyal'];
  squadmateStatusData = [
    { name: 'Zaeed', recruited: true, loyal: true },
    { name: 'Legion', recruited: true, loyal: true },
    { name: 'Samara', recruited: true, loyal: true },
    { name: 'Tali', recruited: true, loyal: true },
    { name: 'Mordin', recruited: true, loyal: true },
    { name: 'Garrus', recruited: true, loyal: true },
    { name: 'Miranda', recruited: true, loyal: true },
    { name: 'Grunt', recruited: true, loyal: true },
    { name: 'Jacob', recruited: true, loyal: true },
    { name: 'Thane', recruited: true, loyal: true },
    { name: 'Jack', recruited: true, loyal: true },
    { name: 'Kasumi', recruited: true, loyal: true }
  ];
  requiredSquadmates = [
    'Jacob',
    'Miranda',
    'Mordin',
    'Garrus',
    'Jack',
  ];

  shipUpgradeColumns = ['name', 'included'];
  shipUpgradeData = [
    { name: 'Heavy Ship Armor', included: false },
    { name: 'Multicore Shielding', included: false },
    { name: 'Thanix Cannon', included: false }
  ];

  ventSpecialists = [
    'Tali',
    'Mordin',
    'Thane',
    'Kasumi',
    'Garrus',
    'Jacob',
    'Legion',
  ];
  fireteamLeaders = [
    'Tali',
    'Mordin',
    'Zaeed',
    'Grunt',
    'Samara',
    'Jack',
    'Thane',
    'Kasumi',
    'Garrus',
    'Miranda',
    'Jacob',
    'Legion',
  ];

  bioticSpecialists = [
    'Samara',
    'Jack',
    'Thane',
    'Miranda',
    'Jacob',
  ];

  constructor(private _formBuilder: FormBuilder) {}
}
