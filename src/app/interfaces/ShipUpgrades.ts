import { FormControl, FormGroup } from "@angular/forms";

export interface ShipUpgrades {
    armor: FormGroup<{
        name: FormControl<string>;
        included: FormControl<boolean>;
    }>;
    shield: FormGroup<{
        name: FormControl<string>;
        included: FormControl<boolean>;
    }>;
    weapons: FormGroup<{
        name: FormControl<string>;
        included: FormControl<boolean>;
    }>;
}