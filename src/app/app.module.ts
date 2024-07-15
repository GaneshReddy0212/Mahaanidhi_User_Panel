import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Components/about/about.component';
import { AdvancedSearchComponent } from './Components/advanced-search/advanced-search.component';
import { AlloffersComponent } from './Components/alloffers/alloffers.component';
import { AllpagesNavbarComponent } from './Components/allpages-navbar/allpages-navbar.component';
import { AllusersComponent } from './Components/allusers/allusers.component';
import { ArticlesComponent } from './Components/articles/articles.component';
import { BlogpostComponent } from './Components/blogpost/blogpost.component';
import { ButtonOfterclickSideComponent } from './Components/button-ofterclick-side/button-ofterclick-side.component';
import { CategorieshomeComponent } from './Components/categorieshome/categorieshome.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CreatebusinessComponent } from './Components/createbusiness/createbusiness.component';
import { FeaturedbusinesspostsComponent } from './Components/featuredbusinessposts/featuredbusinessposts.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GroceriesComponent } from './Components/groceries/groceries.component';
import { HomeComponent } from './Components/home/home.component';
import { HomeadvancedsearchComponent } from './Components/homeadvancedsearch/homeadvancedsearch.component';
import { HomepagesidecontainesComponent } from './Components/homepagesidecontaines/homepagesidecontaines.component';
import { HometoplocationsComponent } from './Components/hometoplocations/hometoplocations.component';
import { HospitalsComponent } from './Components/hospitals/hospitals.component';
import { ImgtopinfracompanyComponent } from './Components/imgtopinfracompany/imgtopinfracompany.component';
import { InfradevelopersComponent } from './Components/infradevelopers/infradevelopers.component';
import { LocationComponent } from './Components/location/location.component';
import { MainhomeComponent } from './Components/mainhome/mainhome.component';
import { MainnavbarComponent } from './Components/mainnavbar/mainnavbar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NewsComponent } from './Components/news/news.component';
import { PricingComponent } from './Components/pricing/pricing.component';
import { PrivacyandpolicyComponent } from './Components/privacyandpolicy/privacyandpolicy.component';
import { RecentspostsComponent } from './Components/recentsposts/recentsposts.component';
import { RestaurantComponent } from './Components/restaurant/restaurant.component';
import { SearchComponent } from './Components/search/search.component';
import { SiderecentpostsComponent } from './Components/siderecentposts/siderecentposts.component';
import { SignupComponent } from './Components/signup/signup.component';
import { TermsandconditionsComponent } from './Components/termsandconditions/termsandconditions.component';
import { TopbusinessesComponent } from './Components/topbusinesses/topbusinesses.component';
import { TopusersinhomepageComponent } from './Components/topusersinhomepage/topusersinhomepage.component';
// import { AdvancedsearchComponent } from './advancedsearch/advancedsearch.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdvancedSearchComponent,
    PricingComponent,
    AllusersComponent,
    AboutComponent,
    LocationComponent,
    NewsComponent,
    BlogpostComponent,
    ArticlesComponent,
    RestaurantComponent,
    CreatebusinessComponent,
    AlloffersComponent,
    ContactComponent,
    SignupComponent,
    // SigninComponent,
    FeaturedbusinesspostsComponent,
    RecentspostsComponent,
    SearchComponent,
    TopbusinessesComponent,
    SiderecentpostsComponent,
    HometoplocationsComponent,
    MainnavbarComponent,
    FooterComponent,
    HomeadvancedsearchComponent,
    CategorieshomeComponent,
    TopusersinhomepageComponent,
    MainhomeComponent,
    HomepagesidecontainesComponent,
    InfradevelopersComponent,
    GroceriesComponent,
    HospitalsComponent,
    ButtonOfterclickSideComponent,
    AllpagesNavbarComponent,
    ImgtopinfracompanyComponent,
    PrivacyandpolicyComponent,
    TermsandconditionsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
