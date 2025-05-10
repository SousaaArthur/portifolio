import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navItems = [
    {label: "Home", router: ""},
    {label: "Sobre", router: ""},
    {label: "Habilidades", router: ""},
    {label: "Projetos", router: ""},
    {label: "Contato", router: ""}
  ]

}
