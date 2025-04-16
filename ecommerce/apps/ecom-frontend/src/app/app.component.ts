import { Component, OnInit, inject } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // 1) Correto: injeta o serviço FaIconLibrary, anotando o tipo explicitamente
  private faIconLibrary: FaIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void {
    // 2) Registra todos os ícones definidos no array
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}