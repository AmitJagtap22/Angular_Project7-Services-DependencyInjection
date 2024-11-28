import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DemoComponent,Child1Component,Child2Component,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularAssignment10';
}
