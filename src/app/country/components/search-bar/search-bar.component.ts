import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [],
})
export class SearchBarComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();
  @Input() error: boolean = false;
  @Input() placeholder: string = '';

  condition: string = '';
  debouncer: Subject<string> = new Subject();

  constructor() {}

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((value: any) => {
      this.onDebounce.emit(value);
    });
  }
  search(): void {
    this.onEnter.emit(this.condition);
  }

  keyPressed() {
    this.debouncer.next(this.condition);
  }
}
