
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-process',
  imports: [RouterLink],
  templateUrl: './process.html',
  styleUrl: './process.css'
})
export class Process {
  readonly steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description:
        'We discuss your project vision, requirements, priorities, and expectations.'
    },
    {
      number: '02',
      title: 'Planning & Assessment',
      description:
        'We review the project scope and identify the planning and coordination needs.'
    },
    {
      number: '03',
      title: 'Coordination & Execution',
      description:
        'Project activities are coordinated around the agreed scope and responsibilities.'
    },
    {
      number: '04',
      title: 'Progress Review',
      description:
        'Progress is reviewed and relevant updates are communicated to stakeholders.'
    }
  ];
}
