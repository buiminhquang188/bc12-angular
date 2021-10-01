// Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

// Component
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { StructuralComponent } from './directive/structural/structural.component';
import { AttributeComponent } from './directive/attribute/attribute.component';
import { HightlightDirective } from './my-directives/hightlight.directive';
import { HoverButtonDirective } from './my-directives/hover-button.directive';
import { InteractionComponent } from './interaction/interaction.component';
import { ChildComponent } from './interaction/child/child.component';
import { MaterialComponent } from './material/material.component';
import { DemoServiceComponent } from './demo-service/demo-service.component';
import { FirstComponent } from './demo-service/first/first.component';
import { SecondComponent } from './demo-service/second/second.component';
import { AccountManagementComponent } from './demo-service/account-management/account-management.component';
import { AccountListComponent } from './demo-service/account-management/account-list/account-list.component';
import { AddAccountComponent } from './demo-service/account-management/add-account/add-account.component';
import { HomeComponent } from './components/home/home.component';
import { TheaterComponent } from './components/theater/theater.component';
import { ReviewComponent } from './components/review/review.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
    DirectiveComponent,
    StructuralComponent,
    AttributeComponent,
    HightlightDirective,
    HoverButtonDirective,
    InteractionComponent,
    ChildComponent,
    MaterialComponent,
    DemoServiceComponent,
    FirstComponent,
    SecondComponent,
    AccountManagementComponent,
    AccountListComponent,
    AddAccountComponent,
    HomeComponent,
    TheaterComponent,
    ReviewComponent,
    ContactComponent,
    MovieDetailComponent,
    FormsComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    PageNotFoundComponent,
  ],
  imports: [
    // Nơi khai báo những module được sử dụng trong module này
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  // Nơi khai báo services
  providers: [],
  // Nơi khai báo component chạy đầu tiên trong module này
  bootstrap: [AppComponent],
})
export class AppModule {}
