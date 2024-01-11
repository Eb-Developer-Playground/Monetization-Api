import { Component } from '@angular/core';
import { User } from '../_models';
import { AccountService } from '../_services';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: User | null;
  apiList: any[] = []; // Initialize as an empty array

  constructor(private accountService: AccountService, private http: HttpClient, private router: Router) {
    this.user = this.accountService.userValue;
    this.loadApiList();
  }

  // Function to load the description for Receive Payments API

  // Function to load the API list
  loadApiList() {
    this.http.get<any>('../assets/data/apilist.json')
      .subscribe({
        next: (data) => {
          this.apiList = data;
        },
        error: (error) => {
          console.error('Error loading API list:', error);
        }
      });
  }

  // Function to handle the click event for API cards
  onApiCardClick(api: any) {
    // Implement logic to navigate or perform specific actions when a card is clicked
    console.log(`${api.title} card clicked!`);
  }
}
