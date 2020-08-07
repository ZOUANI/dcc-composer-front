import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Request} from '../model/request.model';
import {BodyParam} from '../model/body-param.model';
import {RequestCollection} from '../model/request-collection.model';
import {RequestDto} from '../model/request-dto.model';

@Injectable({
  providedIn: 'root'
})
export class RequestCollectionService {

  constructor(private http:HttpClient) { }

  public creatingUrl = "http://localhost:8002/request-collection/";
  public findAllUrl = "http://localhost:8002/request-collection/";
  public launchUrl = "http://localhost:8002/request-collection/launch";

  public requestCollection : RequestCollection = new RequestCollection();
  public requestCreate : Request = new Request();
  public bodyParamCreate: BodyParam = new BodyParam();

  public allCollections = Array<RequestCollection>();

  public selectedCollection = new RequestCollection();

  public requestDto = new RequestDto();

  public  resp = "";

  public addBodyParam(){
    let bodyParamClone = new BodyParam(this.bodyParamCreate.name,this.bodyParamCreate.nextName,this.bodyParamCreate.responseSource);
    this.requestCreate.bodyParams.push(bodyParamClone);
    this.bodyParamCreate = new BodyParam();
  }

  public addRequest(){
    let requestClone = new Request(
      this.requestCreate.url,
      this.requestCreate.httpMethod,
      this.requestCollection.requests.length+1,
      this.requestCreate.pathVariableName,
      this.requestCreate.pathVariableResponseSource,
      "",""
    );

    let bodyParamsClone = Object.assign([], this.requestCreate.bodyParams);
    requestClone.bodyParams = bodyParamsClone;
    this.requestCollection.requests.push(requestClone)
    this.requestCreate = new Request();
  }

  saveCollection(){
    console.log(this.requestCollection);
    this.http.post<RequestCollection>(this.creatingUrl,this.requestCollection).subscribe(
      data=>{
        console.log(data);
        this.requestCollection = new RequestCollection();
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  findAll(){
    this.http.get<Array<RequestCollection>>(this.findAllUrl).subscribe(
      data=>{
        this.allCollections = data;
        // console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  launchCollection(){
    this.requestDto.collectionName = this.selectedCollection.name;
    console.log(this.requestDto);
    this.http.post<string>(this.launchUrl,this.requestDto).subscribe(
      data=>{
        this.resp = data;
        console.log(data);
        console.log(this.resp);
      },
      error1 => {
        console.log(error1);
      }
    );
  }

}
