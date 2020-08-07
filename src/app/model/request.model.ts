import {BodyParam} from './body-param.model';

export class Request {

  constructor(
    public url?:string,
    public httpMethod?:string,
    public num?:number,
    public pathVariableName?:string,
    public pathVariableResponseSource?:number,
    public pathVariableValue?:string,
    public response?:string,
  ){
  }

  public bodyParams = Array<BodyParam>();
}
