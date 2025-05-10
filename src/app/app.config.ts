import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { LucideAngularModule, Download, Code, ArrowRight,Linkedin, Github, Mail, User } from "lucide-angular";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    importProvidersFrom(LucideAngularModule.pick({Download, Code, ArrowRight, Linkedin, Github, Mail, User}))
  ]
};
