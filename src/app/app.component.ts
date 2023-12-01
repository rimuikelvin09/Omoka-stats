import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onComponentSelected(component: string): void {
    // Implement the logic to handle the selected component
    console.log(`Selected component: ${component}`);
  }
  title = 'Omoka-app';
}
