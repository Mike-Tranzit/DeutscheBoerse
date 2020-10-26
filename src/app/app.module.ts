import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WrapperModule} from '@components/wrapper.module';
import {ApiHttpInterceptor} from '@app/interseprots/ApiKeyInterceptor';
import {ErrorHttpInterceptor} from './interseprots/ErrorHttpInterceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    WrapperModule
  ],
  providers: [
    ApiHttpInterceptor,
    ErrorHttpInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
