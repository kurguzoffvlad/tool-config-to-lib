import { Inject, Injectable } from '@angular/core';
import { LIB_CONFIG, IConfigToLib } from './config.token';

@Injectable({
  providedIn: 'root'
})
export class ToolConfigToLibService {

  constructor(@Inject(LIB_CONFIG) private cfg: IConfigToLib) {};

  public doSomething() {
    this.cfg.log('called');
    return this.cfg.apiUrl;
  }

}
