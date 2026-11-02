
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  readonly projects = [
    {
      number: '01',
      category: 'RESIDENTIAL',
      title: 'Residential Construction',
      description: 'A residential project concept focused on functional spaces and thoughtful design.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
      alt: 'Contemporary residential architecture'
    },
    {
      number: '02',
      category: 'COMMERCIAL',
      title: 'Commercial Development',
      description: 'A commercial building concept emphasizing practical layouts and modern architecture.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85',
      alt: 'Modern commercial building exterior'
    },
    {
      number: '03',
      category: 'PROJECT MANAGEMENT',
      title: 'Project Planning & Coordination',
      description: 'A project management concept highlighting planning, coordination, and progress monitoring.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85',
      alt: 'Architectural plans and building design'
    }
  ];
}
