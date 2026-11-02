import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Hero } from './pages/home/hero/hero';
import { About } from './pages/home/about/about';
import { Services } from './pages/home/services/services';
import { WhyChooseUs } from './pages/home/why-choose-us/why-choose-us';
import { Projects } from './pages/home/projects/projects';
import { Pmc } from './pages/home/pmc/pmc';
import { Process } from './pages/home/process/process';
import { Stats } from './pages/home/stats/stats';
import { EnquiryComponent } from './components/enquiry/enquiry';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    Navbar,
    Hero,
    About,
    Services,
    WhyChooseUs,
    Projects,
    Pmc,
    Process,
    Stats,
    EnquiryComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}