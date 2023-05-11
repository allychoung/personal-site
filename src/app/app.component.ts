import { Component } from '@angular/core';
import projects from './projects-data';
import skills from './skills-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'personal-site';
  projects = projects;
  skills = skills;
}

