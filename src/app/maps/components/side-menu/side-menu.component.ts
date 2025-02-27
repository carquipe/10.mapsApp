import { Component, OnInit } from '@angular/core';


interface MenuItem {
  route: string;
  name: string;
}
@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.menuItems);

  }

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', name: 'Full-Screen' },
    { route: '/maps/zoom-range', name: 'Zoom-Range' },
    { route: '/maps/markers', name: 'Markers' },
    { route: '/maps/properties', name: 'Houses' },
  ];

}
