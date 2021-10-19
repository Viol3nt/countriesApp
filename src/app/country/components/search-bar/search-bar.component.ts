import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Country } from '../../interfaces/countries.interface';

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
  @Input() suggestedCountries: Country[] = [];

  condition: string = '';
  debouncer: Subject<string> = new Subject();
  showSuggestions: boolean = false;

  constructor() {}

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((value: any) => {
      this.onDebounce.emit(value);
    });
  }
  search(): void {
    this.showSuggestions = false;
    this.onEnter.emit(this.condition);
  }

  keyPressed() {
    this.showSuggestions = true;
    this.debouncer.next(this.condition);
  }
}
