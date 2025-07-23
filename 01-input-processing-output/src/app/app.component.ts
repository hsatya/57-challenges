import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, HelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Input Processing Output';
}
