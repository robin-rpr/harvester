import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../services/home/home.service';

@Component({
    selector: 'app-home-node',
    templateUrl: './home-node.component.html',
    styleUrls: ['./home-node.component.scss']
})
export class HomeNodeComponent implements OnInit {

    constructor(
        public homeService: HomeService
    ) {
    }

    ngOnInit() {
    }

}
