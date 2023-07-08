import { Component } from '@angular/core';
import skills from 'src/data/skills-data';
import projects from 'src/data/projects-data';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.less', '../app.component.less']
})
export class HomeScreenComponent {
  skills = skills; 
  projects = projects;
}
