import {Component, OnInit} from '@angular/core';
import {FlagsService} from '../../services/flags/flags.service';
import {colorEnums} from '../../../../shared/button/enums/color.enums';
import {environment} from '../../../../../../environments/environment';
import {Location} from '@angular/common';
import {ErrorService} from '../../../../../services/error/error.service';

@Component({
    selector: 'app-flags',
    templateUrl: './flags.component.html',
    styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit {

    objectKeys = Object.keys;
    colorEnums = colorEnums;
    environment = environment;

    constructor(public flagsService: FlagsService,
                private location: Location,
                private errorService: ErrorService
    ) {
    }

    async ngOnInit() {
    }

    /**
     * Update Flag
     * @param id Flag ID
     */
    async update(id) {
        await this.flagsService.set(id, !environment.flags[id]);
    }

    /**
     * Reset all Flags to default
     */
    async reset() {
        await this.flagsService.reset();
    }

    async exit() {
        try {
            await this.location.back();
        } catch (err) {
            this.errorService.throw(err, true);
        }
    }

}
