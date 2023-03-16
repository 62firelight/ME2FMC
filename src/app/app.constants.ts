import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { infiltrationTeam } from './interfaces/InfiltrationTeam';
import { LongWalkTeam } from './interfaces/LongWalkTeam';
import { OculusSquadmates } from './interfaces/OculusSquadmates';
import { ShipUpgrades } from './interfaces/ShipUpgrades';
import { Squadmates } from './interfaces/Squadmates';

@Injectable({
    providedIn: 'root'
})
export class AppConstants {
    public SQUADMATES: FormGroup<Squadmates> = this.fb.nonNullable.group({
        zaeed: this.fb.nonNullable.group({
            name: ['Zaeed'],
            recruited: [true],
            loyal: [true],
            inCurrentSquad: [false],
            deathReason: ['']
        }),
        legion: this.fb.nonNullable.group({
            name: ['Legion'],
            recruited: [true],
            loyal: [true],
            inCurrentSquad: [false],
            deathReason: ['']
        }),
        samara: this.fb.nonNullable.group({
            name: ['Samara'],
            recruited: [true],
            loyal: [true],
            inCurrentSquad: [false],
            deathReason: ['']
        }),
        tali: this.fb.nonNullable.group({
            name: ['Tali'],
            recruited: [true],
            loyal: [true],
            inCurrentSquad: [false],
            deathReason: ['']
        }),
        mordin: this.fb.nonNullable.group({
            name: ['Mordin'],
            recruited: [{ value: true, disabled: true }, Validators.requiredTrue],
            loyal: [true],
            inCurrentSquad: [false],
            deathReason: ['']
        }),
        garrus: this.fb.nonNullable.group({
            name: ['Garrus'],
            recruited: [{ value: true, disabled: true }, Validators.requiredTrue],
            loyal: [true],
            inCurrentSquad: [false],
            deathReason: ['']
        }),
        miranda: this.fb.nonNullable.group({
            name: ['Miranda'],
            recruited: [{ value: true, disabled: true }, Validators.requiredTrue],
            loyal: [true],
            inCurrentSquad: [false],
            deathReason: ['']
        }),
        grunt: this.fb.nonNullable.group({
            name: ['Grunt'],
            recruited: [true],
            loyal: [true],
            inCurrentSquad: [false],
            deathReason: ['']
        }),
        jacob: this.fb.nonNullable.group({
            name: ['Jacob'],
            recruited: [{ value: true, disabled: true }, Validators.requiredTrue],
            loyal: [true],
            inCurrentSquad: [false],
            deathReason: ['']
        }),
        thane: this.fb.nonNullable.group({
            name: ['Thane'],
            recruited: [true],
            loyal: [true],
            inCurrentSquad: [false],
            deathReason: ['']
        }),
        jack: this.fb.nonNullable.group({
            name: ['Jack'],
            recruited: [{ value: true, disabled: true }, Validators.requiredTrue],
            loyal: [true],
            inCurrentSquad: [false],
            deathReason: ['']
        }),
        kasumi: this.fb.nonNullable.group({
            name: ['Kasumi'],
            recruited: [true],
            loyal: [true],
            inCurrentSquad: [false],
            deathReason: ['']
        }),
    });;

    public SHIP_UPGRADES: FormGroup<ShipUpgrades> = this.fb.nonNullable.group({
        armor: this.fb.nonNullable.group({
            name: ['Heavy Ship Armor'],
            included: [true]
        }),
        shield: this.fb.nonNullable.group({
            name: ['Multicore Shielding'],
            included: [true]
        }),
        weapons: this.fb.nonNullable.group({
            name: ['Thanix Cannon'],
            included: [true]
        })
    });

    public OCULUS_SQUADMATES: FormGroup<OculusSquadmates> = this.fb.nonNullable.group({
        oculusSquadmate1: ['', Validators.required],
        oculusSquadmate2: ['', Validators.required]
    });

    public INFILTRATION_TEAM: FormGroup<infiltrationTeam> = this.fb.nonNullable.group({
        techSpecialist: ['', Validators.required],
        fireteamOneLeader: ['', Validators.required]
    });

    public LONG_WALK_TEAM: FormGroup<LongWalkTeam> = this.fb.nonNullable.group({
        bioticSpecialist: ['', Validators.required],
        fireteamTwoLeader: ['', Validators.required],
        crewEscort: ['', Validators.required],
        swarmSquadmate1: ['', Validators.required],
        swarmSquadmate2: ['', Validators.required]
    });

    constructor(private fb: FormBuilder) { }
}