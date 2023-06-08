import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { EventBusService } from './shared/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = []
  isLoggedIn = false
  isUserLoggedIn = false
  showAdminBoard = false
  username: string

  eventBusSub?: Subscription;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser()
      this.roles = user.roles

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN')
      this.isUserLoggedIn = this.roles.includes('ROLE_USER')
      this.username = user.username
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout()
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res)
        this.storageService.clean()

        this.router.navigate(['/home'])
      },
      error: err => {
        console.log(err)
      }
    });
  }
}
