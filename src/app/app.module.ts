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
// C??c options trong decorator ???????c g???i l?? metadata

@NgModule({
  declarations: [
    // N??i khai b??o t???t c??? component ???????c qu???n l?? b???i module n??y, khi t???o component m???i th?? ph???i khai b??o v??o module qu???n l?? n??.
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
    // N??i khai b??o nh???ng module ???????c s??? d???ng trong module n??y
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
  // N??i khai b??o services
  providers: [],
  // N??i khai b??o component ch???y ?????u ti??n trong module n??y
  bootstrap: [AppComponent],
})
export class AppModule {}
