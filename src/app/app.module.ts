import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FolderForPipe } from './folder-for.pipe';
import { PipeCustomComponent } from './pipe-custom/pipe-custom.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { ListsRenderComponent } from './lists-render/lists-render.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { FatherComponentComponent } from './father-component/father-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { Service1ExampleComponent } from './service1-example/service1-example.component';
import { Service2ExampleComponent } from './service2-example/service2-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    FolderForPipe,
    PipeCustomComponent,
    TwoWayDataBindingComponent,
    ListsRenderComponent,
    CustomComponentComponent,
    FatherComponentComponent,
    ChildComponentComponent,
    Service1ExampleComponent,
    Service2ExampleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
