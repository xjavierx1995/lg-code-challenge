import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Filter } from '../core/classes/filter';
import { ObjectResponse } from '../core/classes/objectResponse';
import { HomeService } from './home.service';
import { DetailsComponent } from './modals/details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  objectsList: ObjectResponse;

  constructor(
    public homeService: HomeService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void{
    this.getObjectsByDepartment();
  }

  getObjects(){
    this.homeService.getObjects().subscribe((res: ObjectResponse) => {
      this.objectsList = res
    });
  }

  getObjectsByDepartment(){
    this.homeService.getObjectsByDepartment('1').subscribe((res: ObjectResponse) => {
      this.objectsList = res
    });
  }

  async openDetail(item){
    
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: {objectId: item}
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    console.log(data, role);
    
  }

  search(params: Filter){
    let filters = new Filter(params)
    this.homeService.doSearch(filters).subscribe((res: ObjectResponse) =>{
      this.objectsList = res
    })
  }
}
