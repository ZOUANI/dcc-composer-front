export class RequestDto {
  constructor(
    public collectionName?:string,
    public pathVariable:string = "",
    public bodyParams:string = ""
  ){

}
}
