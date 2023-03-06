import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ME2FMC';

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

  shipUpgradeColumns = ['name', 'included'];
  shipUpgradeData = [
    { name: 'Heavy Ship Armor', included: false },
    { name: 'Multicore Shielding', included: false },
    { name: 'Thanix Cannon', included: false }
  ];

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  ventSpecialists = [
    {value: 'tali', viewValue: 'Tali'},
    {value: 'mordin', viewValue: 'Mordin'},
    {value: 'thane', viewValue: 'Thane'},
    {value: 'kasumi', viewValue: 'Kasumi'},
    {value: 'garrus', viewValue: 'Garrus'},
    {value: 'jacob', viewValue: 'Jacob'},
    {value: 'legion', viewValue: 'Legion'},
  ];
}
