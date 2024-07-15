import { Component, OnInit } from '@angular/core';
import { Serviceprovider } from '../Models/serviceProvider';
import { ServiceProviderService } from '../Sevices/service-provider.service';
import { CityService } from '../Sevices/city.service';

@Component({
  selector: 'app-homepagesidecontaines',
  templateUrl: './homepagesidecontaines.component.html',
  styleUrls: ['./homepagesidecontaines.component.css']
})
export class HomepagesidecontainesComponent implements OnInit {
  constructor(private spService: ServiceProviderService, private cityService: CityService) { }
  sp: any[] = [];
  city: any[] = [];
  stars: Serviceprovider[] = [];
  ngOnInit(): void {
    this.spService.getServiceProviders().subscribe((data: any) => {
      this.sp = data;
      this.stars = data;
    });
    this.cityService.getCities().subscribe((data: any) => {
      this.city = data
    });
  }
  getSPName(cityId: number): string {
    const State = this.city.find(c => c.id === cityId);
    return State ? State.name : '';
  }



  getRatingArray(rating: number): any[] {
    return Array.from({ length: rating });
  }
}
