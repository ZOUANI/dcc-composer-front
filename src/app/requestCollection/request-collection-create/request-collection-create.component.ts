import { Component, OnInit } from '@angular/core';
import {Request} from '../../model/request.model';
import {BodyParam} from '../../model/body-param.model';
import {RequestCollectionService} from '../../service/request-collection.service';

@Component({
  selector: 'app-request-collection-create',
  templateUrl: './request-collection-create.component.html',
  styleUrls: ['./request-collection-create.component.css']
})
export class RequestCollectionCreateComponent implements OnInit {

  constructor(private rcs  : RequestCollectionService) { }

  ngOnInit() {
    console.log(this.requestCollection.requests.length);
  }
  // public requests = Array<Request>();
  // public requestCreate : Request = new Request();
  // public bodyParamCreate: BodyParam = new BodyParam();
  public pathVariable: boolean = false;
  public filterData: boolean = false;
  // public index : number = this.requestCollection.requests.length;

  pathVariableSwitch(){
    this.pathVariable = !this.pathVariable;
  }
  filterDataSwitch(){
    this.filterData = !this.filterData;
  }

  // isFirstSwitch(){
  //   this.isFirst = !this.isFirst;
  // }

  get requestCollection(){
    return this.rcs.requestCollection;
  }

  get requestCreate(){
    return this.rcs.requestCreate;
  }

  get bodyParamCreate(){
    return this.rcs.bodyParamCreate;
  }

  addBodyParam(){
    return this.rcs.addBodyParam();
  }

  addRequest(){
    this.filterData = false;
    this.pathVariable = false;
    return this.rcs.addRequest();

  }

  saveCollection(){
    return this.rcs.saveCollection();
  }


}
