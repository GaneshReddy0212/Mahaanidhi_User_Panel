import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  { path: "", component: MainhomeComponent },
  { path: "main-home", component: MainhomeComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "advancedsearch", component: AdvancedSearchComponent },
  { path: "pricing", component: PricingComponent },
  { path: "allusers", component: AllusersComponent },
  { path: "about", component: AboutComponent },
  { path: "location", component: LocationComponent },
  { path: "news", component: NewsComponent },
  { path: "blogpost", component: BlogpostComponent },
  { path: "articles", component: ArticlesComponent },
  { path: "Restaurant", component: RestaurantComponent },
  { path: "createbusiness", component: CreatebusinessComponent },
  { path: "alloffers", component: AlloffersComponent },
  { path: "contact", component: ContactComponent },
  { path: "signup", component: SignupComponent },
  // {path:"signin",component:SigninComponent},
  { path: "featuredbusinessposts", component: FeaturedbusinesspostsComponent },
  { path: "recentsposts", component: RecentspostsComponent },
  { path: "search", component: SearchComponent },
  { path: "topbusinesses", component: TopbusinessesComponent },
  { path: "siderecentposts", component: SiderecentpostsComponent },
  { path: "hometoplocations", component: HometoplocationsComponent },
  { path: "mainnavbar", component: MainnavbarComponent },
  { path: "footer", component: FooterComponent },
  { path: "homeadvancedsearch", component: HomeadvancedsearchComponent },
  { path: "categorieshome", component: CategorieshomeComponent },
  { path: "topusersinhomepage", component: TopusersinhomepageComponent },

  { path: "homepagesidecontaines", component: HomepagesidecontainesComponent },
  { path: "infradevelopers", component: InfradevelopersComponent },
  { path: "groceries", component: GroceriesComponent },
  { path: "hospitals", component: HospitalsComponent },
  { path: "button-ofterclick-side", component: ButtonOfterclickSideComponent },
  { path: "allpagesnavbar", component: AllpagesNavbarComponent },
  { path: "imgtopinfracompany/:id", component: ImgtopinfracompanyComponent },
  { path: "privacyandpolicy", component: PrivacyandpolicyComponent },
  { path: "termsandconditions", component: TermsandconditionsComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
