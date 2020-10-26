import {Inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse, HTTP_INTERCEPTORS
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_SETTINGS_TOKEN} from '@tokens/settings.token';
import {Settings} from '@models/types/settings.type';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor(@Inject(API_SETTINGS_TOKEN) readonly apiSettings: Settings) {
  }

  addApiKey(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        'X-DBP-APIKEY': this.apiSettings.apiKey,
        'Content-Type': 'application/json',
        'Accept-Encodin': 'gzip'
      }
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addApiKey(request));
  }
}

export const ApiHttpInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiKeyInterceptor,
  multi: true,
};
