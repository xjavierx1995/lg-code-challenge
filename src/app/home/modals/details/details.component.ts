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

  @Input() objectDetail: ObjectDetails;

  constructor(
    private modalCtrl: ModalController,
    public homeService: HomeService
    ) {}

  ngOnInit(): void{ }

  close() {
    return this.modalCtrl.dismiss();
  }

}
