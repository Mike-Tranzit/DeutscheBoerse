import {InjectionToken} from '@angular/core';
import {Settings} from '@models/types/settings.type';

export const API_SETTINGS_TOKEN = new InjectionToken<Settings>('API_SETTINGS');
export const SETTINGS = {
  apiKey: '22abac33-55b0-4a5e-ac4b-8304cd73659d'
};
