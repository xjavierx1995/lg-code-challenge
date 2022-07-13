import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Filter } from '../core/classes/filter';
import { ObjectDetails } from '../core/classes/object-details';
import { ObjectResponse } from '../core/classes/objectResponse';
import { HomeService } from './home.service';
import { DetailsComponent } from './modals/details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  objectsList: number[];

  constructor(
    public homeService: HomeService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void{
    // this.getObjects();
    this.getObjectsByDepartment(3);
  }

  getObjects(){
    this.homeService.getObjects().subscribe((res: ObjectResponse) => {
      this.objectsList = res.objectIDs.slice(0, 10);
    });
  }

  getObjectsByDepartment(departmentId: number){
    this.homeService.getObjectsByDepartment(departmentId).subscribe((res: ObjectResponse) => {
      this.objectsList = res.objectIDs.slice(0, 20);
    });
  }

  async openDetail(item: ObjectDetails){
    
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: {objectDetail: item}
    });
    modal.present();
    
  }

  search(params: Filter){
    let filters = new Filter(params)
    this.homeService.doSearch(filters).subscribe((res: ObjectResponse) =>{
      this.objectsList = res.objectIDs.slice(0, 20);
    })
  }
}
