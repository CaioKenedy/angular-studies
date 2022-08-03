import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FolderForPipe } from './folder-for.pipe';
import { PipeCustomComponent } from './pipe-custom/pipe-custom.component';

@NgModule({
  declarations: [AppComponent, FirstComponentComponent, SecondComponentComponent, FolderForPipe, PipeCustomComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
