import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  styles: [
    `
      .card {
        display: flex;
        width: 90%;
        margin: 0 auto;
        min-height: 100vh;
        justify-content: space-between;
        padding: 80px;
      }

      .card__item {
        background: #fff;
        width: 30%;
        min-height: 600px;
        overflow: hidden;
        padding: 2em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        box-shadow: 0 0 32px -16px rgb(0, 0, 0, 0.5);
      }

      .card__figure {
        height: 50%;
      }

      .card__image {
        width: 90%;
        height: 100%;
        display: block;
        margin: 0 auto;
      }

      .cta {
        display: inline-block;
        background: #6c63ff;
        padding: 15px 30px;
        margin: 1em;
        text-decoration: none;
        color: #fff;
        margin-top: auto;
      }
    `
  ],
  template: `
    <section class="card">
      <div class="card__item">
        <figure class="card__figure">
          <img
            src="assets/flexbox/cards/illustration1.svg"
            class="card__image"
          />
        </figure>

        <div class="card__texts">
          <h2 class="card__title">Card Title</h2>
          <p class="card__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, ut consequatur quam est quos dolorem ipsam repudiandae.
            Dolor minus quos quod eaque quas et exercitationem.
          </p>
        </div>
        <a href="" class="cta">Entra Ahora</a>
      </div>

      <div class="card__item">
        <figure class="card__figure">
          <img
            src="assets/flexbox/cards/illustration2.svg"
            class="card__image"
          />
        </figure>

        <div class="card__texts">
          <h2 class="card__title">Card Title</h2>
          <p class="card__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, ut consequatur quam est quos dolorem ipsam repudiandae.
            Dolor minus quos quod eaque quas et exercitationem.
          </p>
        </div>
        <a href="" class="cta">Entra Ahora</a>
      </div>

      <div class="card__item">
        <figure class="card__figure">
          <img
            src="assets/flexbox/cards/illustration3.svg"
            class="card__image"
          />
        </figure>

        <div class="card__texts">
          <h2 class="card__title">Card Title</h2>
          <p class="card__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, ut consequatur quam est quos dolorem ipsam repudiandae.
            Dolor minus quos quod eaque quas et exercitationem.
          </p>
        </div>
        <a href="" class="cta">Entra Ahora</a>
      </div>
    </section>
  `,
})

export class CardsComponent {}
