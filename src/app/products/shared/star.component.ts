import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'star-rating',
    templateUrl: './star.component.html',
    styleUrls: [
        './star.component.css'
    ]
})
export class StarComponent implements OnChanges {

    starDivWidth:number = 75;
    @Input() rating:number = 5; // become input property. get value by property binding
    starWidth:number;
    @Output() ratingNotification:EventEmitter<number> = new EventEmitter<number>();
    ngOnChanges() {
        this.starWidth = this.rating * this.starDivWidth/5;
    }

    onClick() {
        this.ratingNotification.emit(this.rating);
    }

}