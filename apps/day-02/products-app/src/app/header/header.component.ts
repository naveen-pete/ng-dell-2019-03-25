import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // template: `
  //   <h2>Inline Header</h2>
  //   <p>Demonstrates inline template</p>
  // `,
  styleUrls: ['./header.component.css']
  // styles: [
  //   ` h2 { color: red; } `,
  //   ` p { font-family: 'times new roman'; } `
  // ]
})
export class HeaderComponent {
  today = Date.now();
}