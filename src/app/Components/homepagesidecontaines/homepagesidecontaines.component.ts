import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/Environment/environment.service';
import { Serviceprovider } from 'src/app/Models/serviceProvider';
import { CityService } from 'src/app/Sevices/city.service';
import { ServiceProviderService } from 'src/app/Sevices/service-provider.service';


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

  // baseUrl = 'https://ganeshreddy0212-001-site1.ctempurl.com/uploads';
  ngOnInit(): void {
    this.spService.getServiceProviders().subscribe((data: any) => {
      this.sp = data;
      this.stars = data;
      this.sp = data.map((item: any) => {
        item.fullThumbnailImagePath = `${environment.ImageUrl}/${item.thumnailImagePath}`;
        return item;
    });
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
