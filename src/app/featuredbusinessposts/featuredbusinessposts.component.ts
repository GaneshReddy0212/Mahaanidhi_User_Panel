import { Component } from '@angular/core';
import { Serviceprovider } from '../Models/serviceProvider';
import { ServiceProviderService } from '../Sevices/service-provider.service';

@Component({
  selector: 'app-featuredbusinessposts',
  templateUrl: './featuredbusinessposts.component.html',
  styleUrls: ['./featuredbusinessposts.component.css']
})
export class FeaturedbusinesspostsComponent {


  stars: Serviceprovider[] = [];
  infraDeveloperCount: number = 0;
  HospitalCount: number = 0;
  constructor(private SpService: ServiceProviderService) { }

  ngOnInit(): void {
    this.SpService.getServiceProviders().subscribe((data: any) => {
      this.stars = data;
      this.calculateInfraDeveloperCount();
      this.calculateHospitalCount();
    });
  }

  private calculateInfraDeveloperCount(): void {
    this.infraDeveloperCount = this.stars.filter(s => s.businessName.toLowerCase() === 'top infra company').length;
  }
  private calculateHospitalCount(): void {
    this.HospitalCount = this.stars.filter(s => s.businessName.toLowerCase() === 'lenus hospitals').length;
  }
}
