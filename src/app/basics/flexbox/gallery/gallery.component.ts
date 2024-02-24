import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  styleUrl: './gallery.component.css',
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
