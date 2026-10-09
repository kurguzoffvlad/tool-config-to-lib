import {ModuleWithProviders, NgModule} from '@angular/core';
import { ToolConfigToLibComponent } from './tool-config-to-lib.component';
import {LIB_CONFIG, IConfigToLib} from "./config.token";

@NgModule({
  declarations: [
    ToolConfigToLibComponent
  ],
  imports: [
  ],
  exports: [
    ToolConfigToLibComponent
  ]
})
export class ToolConfigToLibModule {
  static forRoot(config: IConfigToLib): ModuleWithProviders<ToolConfigToLibModule> {
    return {
      ngModule: ToolConfigToLibModule,
      providers: [{ provide: LIB_CONFIG, useValue: config }]
    };
  }
}
