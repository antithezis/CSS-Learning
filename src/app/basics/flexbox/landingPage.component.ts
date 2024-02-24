import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  styles: [
    `
      .container {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        overflow: hidden;
      }

      .nav {
        background: #143d64;
        height: var(--height-nav);
        color: #fff;
      }

      .nav__container {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .nav__link {
        color: #fff;
        text-decoration: none;
        margin-left: 1em;
      }

      .hero__main {
        display: flex;
        height: calc(100vh - var(--height-nav));
        align-items: center;
        min-height: 600px;
      }

      .hero__texts {
        flex: 1;
      }

      .hero__picture {
        flex: 1;
      }

      .hero__img {
        width: 100%;
        max-width: 450px;
        display: block;
        margin: 0 auto;
      }

      .hero__title {
        font-size: 3rem;
      }

      .hero__paragraph {
        font-size: 1.5rem;
        font-weight: 300;
      }

      .cta {
        background: #6c63ff;
        display: inline-block;
        padding: 15px 30px;
        margin-top: 1.5em;
        color: #fff;
        text-decoration: none;
        border-radius: 6px;
      }

      @media screen and (max-width: 900px) {
        :root {
          --height-nav: 100px;
        }

        .nav__container {
          flex-direction: column;
          justify-content: space-evenly;
        }

        .hero__main {
          flex-direction: column;
          padding: 40px 0;
        }

        .hero__picture {
          order: -1;
        }

        .hero__img {
          max-width: 380px;
        }

        .hero__texts {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        .hero__title {
          font-size: 2.5rem;
        }

        .hero__paragraph {
          font-size: 1rem;
        }
      }
    `,
  ],
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
