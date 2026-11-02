
import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.css'
})
export class Stats {
  readonly highlights = [
    {
      number: '01',
      title: 'Quality Focus',
      description: 'Attention to quality at every stage of the project.'
    },
    {
      number: '02',
      title: 'Planned Execution',
      description: 'A structured approach to planning and coordination.'
    },
    {
      number: '03',
      title: 'Client Commitment',
      description: 'Project decisions guided by client requirements.'
    },
    {
      number: '04',
      title: 'PMC Support',
      description: 'Planning, monitoring, and coordination support.'
    }
  ];
}
