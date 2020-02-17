import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {typeEnums} from '../../enums/home-iab.enum';
import {Observable} from 'rxjs';
import {DomSanitizer, SafeHtml, SafeResourceUrl} from '@angular/platform-browser';
import {filter, map, takeWhile} from 'rxjs/operators';
import {colorEnums} from '../../../../../enums/color.enums';
import {IElement} from '../../models/home-iab.model';
import {HttpService} from '../../../../../services/http/http.service';

@Component({
    selector: 'app-home-iab',
    templateUrl: './home-iab.component.html',
    styleUrls: ['./home-iab.component.scss'],
})
export class HomeIabComponent implements AfterViewInit, OnDestroy {
    @ViewChild('iframe', {read: ElementRef}) private iframe: ElementRef;
    @Input() type: typeEnums;
    @Input() url: string;
    @Output() selection: EventEmitter<IElement> = new EventEmitter<IElement>();

    typeEnums = typeEnums;
    colorEnums = colorEnums;
    private alive = true;
    readonly selector: string;

    constructor(private sanitizer: DomSanitizer) {
    }

    ngAfterViewInit() {
        this.iframe.nativeElement.src = this.url;
    }

    refresh() {
        this.iframe.nativeElement.contentWindow.location.reload();
    }

    navigate(url) {
        this.iframe.nativeElement.src = url;
    }

    back() {
        this.iframe.nativeElement.contentWindow.location.back();
    }

    forward() {
        this.iframe.nativeElement.contentWindow.location.forward();
    }


    ngOnDestroy() {
        this.alive = false;
    }
}
