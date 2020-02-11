import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../services/home/home.service';

@Component({
    selector: 'app-home-group',
    templateUrl: './home-group.component.html',
    styleUrls: ['./home-group.component.scss']
})
export class HomeGroupComponent implements OnInit {

    constructor(
        public homeService: HomeService
    ) {
    }

    ngOnInit() {
    }

}
