import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  styleUrl: './cards.component.css',
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
