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
  ) { }

  ngOnInit(): void {
    this.getObjectsByDepartment(3);
  }

  /**
   * It gets a list of objects from the server and assigns it to the objectsList variable.
   */
  getObjects() {
    this.homeService.getObjects().subscribe((res: ObjectResponse) => {
      if (res.total > 0) {
        this.objectsList = res.objectIDs.slice(0, 20);
      } else {
        this.objectsList = [];
      }
    });
  }

  /**
   * It gets a list of objects by department ID.
   * @param {number} departmentId - number - the id of the department
   */
  getObjectsByDepartment(departmentId: number) {
    this.homeService.getObjectsByDepartment(departmentId).subscribe((res: ObjectResponse) => {
      if (res.total > 0) {
        this.objectsList = res.objectIDs.slice(0, 20);
      } else {
        this.objectsList = [];
      }
    });
  }

  /**
   * It creates a modal with the DetailsComponent component, and passes the objectDetail object to the
   * component.
   * @param {ObjectDetails} item - ObjectDetails
   */
  async openDetail(item: ObjectDetails) {

    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: { objectDetail: item }
    });
    modal.present();

  }

  /**
   * It takes a Filter object, creates a new Filter object, and then passes that new Filter object to a
   * service that returns an ObjectResponse object.
   * @param {Filter} params - Filter
   */
  search(params: Filter) {
    let filters = new Filter(params)
    this.homeService.doSearch(filters).subscribe((res: ObjectResponse) => {
      if (res.total > 0) {
        this.objectsList = res.objectIDs.slice(0, 20);
      } else {
        this.objectsList = [];
      };
    })
  }
}
