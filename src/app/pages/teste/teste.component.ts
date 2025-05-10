import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { TerminalCardComponent } from '../../components/terminal-card/terminal-card.component';

@Component({
  selector: 'app-teste',
  imports: [LucideAngularModule, TerminalCardComponent],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {

}
