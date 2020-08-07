import { Component, OnInit } from '@angular/core';
import {RequestCollectionService} from '../../service/request-collection.service';
import {RequestCollection} from '../../model/request-collection.model';

@Component({
  selector: 'app-request-collection-launch',
  templateUrl: './request-collection-launch.component.html',
  styleUrls: ['./request-collection-launch.component.css']
})
export class RequestCollectionLaunchComponent implements OnInit {

  constructor(private rcs : RequestCollectionService) { }

  ngOnInit() {
    this.rcs.findAll();
    this.setSelected(null);
  }
  // json = "";

  get selectedCollection(){
    return this.rcs.selectedCollection;
  }

  get allCollections(){
    return this.rcs.allCollections;
  }

  setSelected(item : RequestCollection){
    console.log(item)
    this.requestDto.bodyParams = "";
    this.rcs.selectedCollection = item;
    if (item.requests[0].bodyParams.length !== 0){
      this.requestDto.bodyParams += "{\n";
      for (let i of item.requests[0].bodyParams) {
        this.requestDto.bodyParams += "\t\t\""+i.name+"\" : \" \"";
        if (item.requests[0].bodyParams.indexOf(i) !== item.requests[0].bodyParams.length-1 ) {
          this.requestDto.bodyParams += ",\n"
        }
      }
      this.requestDto.bodyParams += "\n}";
    }
  }

  launchCollection(){
    return this.rcs.launchCollection();
  }

  get requestDto(){
    return this.rcs.requestDto;
  }

  get resp(){
    return this.rcs.resp;
  }


}
