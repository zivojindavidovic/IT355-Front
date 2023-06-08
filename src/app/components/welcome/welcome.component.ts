import { Component, OnInit } from '@angular/core';

declare function animateImage():any

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  ngOnInit(): void {
    animateImage()
  }

}
