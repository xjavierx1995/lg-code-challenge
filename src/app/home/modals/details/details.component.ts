import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ObjectDetails } from 'src/app/core/classes/object-details';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  name: string;
  @Input() objectId: number;

  objectDetail: ObjectDetails = new ObjectDetails();

  constructor(
    private modalCtrl: ModalController,
    public homeService: HomeService
    ) {}

  ngOnInit(): void{
    this.getObjectById();
  }

  getObjectById(){
    this.homeService.getObjectById(this.objectId).subscribe((res: ObjectDetails) => {
      console.log(res);
      this.objectDetail = new ObjectDetails(res);
    });
    
  }

  close() {
    return this.modalCtrl.dismiss(null, '');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

}
