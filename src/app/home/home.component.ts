import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = 'none';
        document.getElementById("container").style.display = 'block';
    }.bind(this), 1500);
  }

}
