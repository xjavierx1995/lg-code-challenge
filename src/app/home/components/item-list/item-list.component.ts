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

  getObjectById(){
    this.homeService.getObjectById(this.objectId).subscribe((res: ObjectDetails) => {
      this.objectDetail = new ObjectDetails(res);
    });
    
  }

  openDetail(item){
    console.log(item);
  }

}
