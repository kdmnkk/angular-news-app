import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { NewsDataService } from '@core/data-services/news-data.service';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CountryInterface } from '@core/interfaces/country.interface';
import { COUNTRIES } from '@core/const/countries';

interface FormInterface {
  q: FormControl<string>;
  category: FormControl<string>;
  country: FormControl<CountryInterface | null>;
}

@Component({
  selector: 'app-news-filter',
  standalone: true,
  imports: [NgbTypeaheadModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './news-filter.component.html',
  styleUrl: './news-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsFilterComponent {
  private dataService = inject(NewsDataService);

  public formGroup = new FormGroup<FormInterface>({
    q: new FormControl('', { nonNullable: true }),
    category: new FormControl('', { nonNullable: true }),
    country: new FormControl(null),
  })

  constructor() {}

  public formatter = (country: CountryInterface) => country.name;

	public search: OperatorFunction<string, readonly CountryInterface[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			filter((term) => term.length >= 2),
			map((term) => COUNTRIES.filter((country) => new RegExp(term, 'mi').test(country.name)).slice(0, 10)),
		);

  public setFilters(): void {
    this.dataService.setQuery({
      ...this.formGroup.value,
      country: this.formGroup.value.country?.code.toLocaleLowerCase() || ''
    });
  }

  public clearFilters(): void {
    this.formGroup.reset();
    this.dataService.setQuery({});
  }
}
