import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello',
  imports: [CommonModule, FormsModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent {
  name: string = '';
  greeting: string = '';

  sayHello() {
    this.greeting = `Hello, ${this.name}!, nice to meet you!`;
  }
}
