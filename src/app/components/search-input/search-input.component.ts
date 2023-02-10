import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})

export class SearchInputComponent {
  @Output() searchInput: EventEmitter<string> = new EventEmitter();

  changeSearchInput(event: Event) {
    const search = event.target as HTMLInputElement;
    this.searchInput.emit( search.value );
	}

}
