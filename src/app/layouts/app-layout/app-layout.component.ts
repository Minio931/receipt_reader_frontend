import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './_components/navigation/navigation.component';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css',
  imports: [RouterOutlet, NavigationComponent],
})
export class AppLayoutComponent {
  title = 'receipt_reader_fronted';
}
