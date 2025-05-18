import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { TerminalCardComponent } from '../../components/terminal-card/terminal-card.component';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule, TerminalCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  namesIconsLucide = [
    { icon: "Github" },
    { icon: "Linkedin" },
    { icon: "Mail" },
  ]
}
