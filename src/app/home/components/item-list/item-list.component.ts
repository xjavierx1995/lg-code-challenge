import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ObjectDetails } from 'src/app/core/classes/object-details';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {

  @Input() objectId: number;

  objectDetail: ObjectDetails = new ObjectDetails();
  @Output() emitDetail: EventEmitter<any> = new EventEmitter();

  constructor(public homeService: HomeService) { }

  ngOnInit(): void{
    this.getObjectById();
  }

  /**
   * The function gets an object by its id and assigns it to the objectDetail variable.
   */
  getObjectById(){
    this.homeService.getObjectById(this.objectId).subscribe((res: ObjectDetails) => {
      this.objectDetail = new ObjectDetails(res);
    });
    
  }

  /**
   * When the user clicks on a list item, the item's details are emitted to the parent component.
   * @param {ObjectDetails} item - ObjectDetails - this is the object that is being passed to the
   * parent component
   */
  openDetail(item: ObjectDetails){
    this.emitDetail.emit(item);
  }

}
