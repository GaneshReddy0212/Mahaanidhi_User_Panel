import { Component, OnInit } from '@angular/core';
// import { ServiceProviderService } from '../Sevices/service-provider.service';
// import { Serviceprovider } from '../Models/serviceProvider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  stars = [1, 2, 3, 4, 5];
  rating = 0;

  updateRating(r: any) {
    this.rating = r;
    console.log(r)
  }
  // stars: Serviceprovider[] = [];

  // constructor(private SpService: ServiceProviderService) { }

  // ngOnInit(): void {
  //   this.SpService.getServiceProviders().subscribe((data: any) => {
  //     this.stars = data;
  //   });
  // }

  // getRatingArray(rating: number): any[] {
  //   return Array.from({ length: rating });
  // }
}



