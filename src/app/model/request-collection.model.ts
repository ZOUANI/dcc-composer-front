import {Request} from './request.model';

export class RequestCollection {

  constructor(
    public name?: string,
    public description?: string,
  ) {
  }

  public requests = Array<Request>();

}
