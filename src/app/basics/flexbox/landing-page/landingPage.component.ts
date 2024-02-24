import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  styleUrl: './landingPage.component.css',
  template: `
    <header class="hero">
      <nav class="nav">
        <section class="nav__container container">
          <figure class="nav__logo">
            <h2 class="nav__title">Antithezis</h2>
          </figure>

          <div class="nav__links">
            <a href="#" class="nav__link">Inicio</a>
            <a href="#" class="nav__link">Acerca de</a>
            <a href="#" class="nav__link">Contacto</a>
          </div>
        </section>
      </nav>

      <section class="hero__main container">
        <div class="hero__texts">
          <h1 class="hero__title">Bienvenido a Antithezis Design</h1>
          <p class="hero__paragraph">
            Aprende diseño web moderno, con nuestros cursos gratis o premium
          </p>
          <a href="#" class="cta">Aprende Ahora</a>
        </div>

        <figure class="hero__picture">
          <img src="assets/flexbox/flexboximg.svg" class="hero__img" />
        </figure>
      </section>
    </header>
  `,
})
export class LandingPageComponent {}
