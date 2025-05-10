import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-terminal-card',
  imports: [NgClass, LucideAngularModule ],
  templateUrl: './terminal-card.component.html',
  styleUrl: './terminal-card.component.css'
})
export class TerminalCardComponent {

  colorsBtn = [
    {color: "bg-red-500"},
    {color: "bg-yellow-500"},
    {color: "bg-green-500"}
  ]

  textItems = [
    {variable: "String name", atribute: '"Arthur Sousa"'},
    {variable: "int age", atribute: "21"},
  ];
  stackItems = [
    {label: '"Java"', caracter: ", "},
    {label: '"Springboot"', caracter: ", "},
    {label: '"Angular"', caracter: ", "},
    {label: '"MySQL"', caracter: ", "},
    {label: '"Tailwind"', caracter: ""},
  ];


}
