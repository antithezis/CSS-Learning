import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card__item">
        <h3 class="card__pan">Basic</h3>
        <h3 class="card__price">Free</h3>
        <div class="card__features card__features--margin">
          Hasta 5 personas
        </div>
        <div class="card__features">Feature 1</div>
        <div class="card__features">Feature 2</div>
        <div class="card__features">Feature 3</div>
        <a href="" class="card__cta">Try it now</a>
      </div>

      <div class="card__item card__item--active">
        <h3 class="card__pan">Basic</h3>
        <h3 class="card__price">Free</h3>
        <div class="card__features card__features--margin">
          Hasta 5 personas
        </div>
        <div class="card__features">Feature 1</div>
        <div class="card__features">Feature 2</div>
        <div class="card__features">Feature 3</div>
        <a href="" class="card__cta">Try it now</a>
      </div>

      <div class="card__item">
        <h3 class="card__pan">Basic</h3>
        <h3 class="card__price">Free</h3>
        <div class="card__features card__features--margin">
          Hasta 5 personas
        </div>
        <div class="card__features">Feature 1</div>
        <div class="card__features">Feature 2</div>
        <div class="card__features">Feature 3</div>
        <a href="" class="card__cta">Try it now</a>
      </div>
    </div>
  `,
  styles: `
      .card {
        width: 100%;
        min-height: 100vh;
      }

      .card__item {
        min-width: 350px;
        width: 30%;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
        text-align: center;
        padding: 40px 0;
        background: #fff;
      }

      .card__item--active {
        background: #5175ff;
      }
    `
})
export class PricingComponent {}
