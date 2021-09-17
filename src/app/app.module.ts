import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { HeaderComponent } from './exercise2/header/header.component';
import { ContentComponent } from './exercise2/content/content.component';
import { SidebarComponent } from './exercise1/sidebar/sidebar.component';
import { FooterComponent } from './exercise2/footer/footer.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { BannerComponent } from './exercise2/banner/banner.component';
import { DataBindingComponent } from './exercise2/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';

// @NgModule: Decorator
// Các options trong decorator được gọi là metadata

@NgModule({
  declarations: [
    // Nơi khai báo tất cả component được quản lý bởi module này, khi tạo component mới thì phải khai báo vào module quản lí nó.
    AppComponent,
    HelloComponent,
    Exercise1Component,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
    Exercise2Component,
    BannerComponent,
    DataBindingComponent,
  ],
  imports: [
    // Nơi khai báo những module được sử dụng trong module này
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  // Nơi khai báo services
  providers: [],
  // Nơi khai báo component chạy đầu tiên trong module này
  bootstrap: [AppComponent],
})
export class AppModule {}
