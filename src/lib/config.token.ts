// lib/config.token.ts
import { InjectionToken } from '@angular/core';

export interface LibConfig {
  apiUrl: string;
  log(msg: string): void;
}

export const LIB_CONFIG = new InjectionToken<LibConfig>('LIB_CONFIG');
