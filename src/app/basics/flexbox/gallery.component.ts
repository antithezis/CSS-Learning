import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  styles: [
    `
      .gallery {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        padding: 60px 0;
      }

      .gallery__title {
        font-size: 2rem;
        margin-bottom: 1.5em;
      }

      .gallery__container {
        width: 100%;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
      }

      .gallery__picture {
        min-width: 200px;
        /* flex-basis: 350px; */
        /* flex-grow: 1; */
        flex: 350px;
      }

      .gallery__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `,
  ],
  template: `
    <main class="gallery">
      <h2 class="gallery__title">Galeria de imagenes Flexbox</h2>
      <section class="gallery__container">
        <figure class="gallery__picture">
          <img src="assets/flexbox/gallery/image1.jpg" class="gallery__image" />
        </figure>
        <figure class="gallery__picture">
          <img src="assets/flexbox/gallery/image2.jpg" class="gallery__image" />
        </figure>
        <figure class="gallery__picture">
          <img src="assets/flexbox/gallery/image3.jpg" class="gallery__image" />
        </figure>
        <figure class="gallery__picture">
          <img src="assets/flexbox/gallery/image4.jpg" class="gallery__image" />
        </figure>
        <figure class="gallery__picture">
          <img src="assets/flexbox/gallery/image5.jpg" class="gallery__image" />
        </figure>
        <figure class="gallery__picture">
          <img src="assets/flexbox/gallery/image6.jpg" class="gallery__image" />
        </figure>
      </section>
    </main>
  `,
})
export class GalleryComponent {}
