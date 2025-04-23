import { Component, OnInit, inject } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule],
})
export class AppComponent implements OnInit {
  private lib = inject(FaIconLibrary);
  private cfg = inject(FaConfig);

  ngOnInit(): void {
    this.cfg.defaultPrefix = 'fas';   // ✔ muda para sólido
    this.lib.addIcons(faUser);        // registra o ícone
  }
}