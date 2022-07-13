import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Departments, DepartmentsResponse } from 'src/app/core/classes/departments';
import { Filter } from 'src/app/core/classes/filter';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {

  public filterForm: FormGroup;
  public departments: Departments[]
  @Output() emitSearch: EventEmitter<Filter> = new EventEmitter();

  constructor(
    public formBuilder: FormBuilder,
    public homeService: HomeService
  ) { }

  ngOnInit() {
    this.getDepartments();
    this.doValidations();
  }

  /**
   * The function getDepartments() is a function that is called when the component is initialized. It
   * calls the getDepartments() function in the homeService.ts file, which returns an observable of
   * type DepartmentsResponse. The observable is then subscribed to, and the departments property of
   * the component is set to the departments property of the DepartmentsResponse object.
   */
  getDepartments(){
    this.homeService.getDepartments().subscribe((res: DepartmentsResponse) => {
      this.departments = res.departments;
    });
    
  }

 /**
  * It creates a form group with three form controls
  */
  doValidations(){
    this.filterForm = this.formBuilder.group({
      q: new FormControl('', Validators.required),
      departmentId: new FormControl(''),
      hasImages: new FormControl(),
    });
  }

  /**
   * If the form is valid, emit the form value.
   */
  search(){

    this.filterForm.markAllAsTouched()
    if (this.filterForm.valid) { 
      this.emitSearch.emit(this.filterForm.value)
    }
  }

}
