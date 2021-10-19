const unsplashPictures = [
  {
    id: 'cPF2nlWcMY4',
    title: 'Stormtrooper On The Beach',
    description: 'picture of a lego stormtrooper is casually walking on sand',
    width: 600,
    height: 300,
    pathURL: 'images/cPF2nlWcMY4.jpg',
    linkURL: 'https://unsplash.com/photos/cPF2nlWcMY4',
    credit: 'Daniel Cheung',
    creditURL: 'https://unsplash.com/@danielkcheung'
  },

  {
    id: 'ZqqlOZyGG7g',
    title: 'Artist Stormtrooper',
    description: 'picture of a lego stormtrooper that is holding a paint brush and ready to paint',
    width: 600,
    height: 300,
    pathURL: 'images/ZqqlOZyGG7g.jpg',
    linkURL: 'https://unsplash.com/photos/ZqqlOZyGG7g',
    credit: 'Daniel Cheung',
    creditURL: 'https://unsplash.com/@danielkcheung'
  },

  {
    id: 'ml2F5o0nLh8',
    title: 'Micky And Friends',
    description: 'picture of a lego micky mouse hanging with his friends infront of a castle',
    width: 600,
    height: 300,
    pathURL: 'images/ml2F5o0nLh8.jpg',
    linkURL: 'https://unsplash.com/photos/ml2F5o0nLh8',
    credit: 'Rod Long',
    creditURL: 'https://unsplash.com/@rodlong'
  },

  {
    id: '8yCmQODY2SY',
    title: 'Firework Lego Man',
    description: 'picture of a lego man dressed in a firework costume and holding a balloon',
    width: 600,
    height: 300,
    pathURL: 'images/8yCmQODY2SY.jpg',
    linkURL: 'https://unsplash.com/photos/8yCmQODY2SY',
    credit: 'Hello Im Nik',
    creditURL: 'https://unsplash.com/@helloimnik'
  },

  {
    id: 'eTTlZWec6fw',
    title: 'Lego Batman',
    description: 'picture of a lego Batman on a desk listening to music',
    width: 600,
    height: 300,
    pathURL: 'images/eTTlZWec6fw.jpg',
    linkURL: 'https://unsplash.com/photos/eTTlZWec6fw',
    credit: 'Viktor Bystrov',
    creditURL: 'https://unsplash.com/@xokvictor'
  },

  {
    id: 'QfOBbZcHZBw',
    title: 'Lego With A View',
    description: 'picture of a someone holding a lego man looking over a beautiful bridge with a view',
    width: 600,
    height: 300,
    pathURL: 'images/QfOBbZcHZBw.jpg',
    linkURL: 'https://unsplash.com/photos/QfOBbZcHZBw',
    credit: 'Henry',
    creditURL: 'https://unsplash.com/@hurnyh'
  },

  {
    id: '42l3tjsJGyw',
    title: 'Freeze! This is a Hold Up',
    description: 'picture of a lego stormtrooper pointing a gun at c3po ',
    width: 600,
    height: 300,
    pathURL: 'images/42l3tjsJGyw.jpg',
    linkURL: 'https://unsplash.com/photos/42l3tjsJGyw',
    credit: 'Artur Tumasjan',
    creditURL: 'https://unsplash.com/@arturtumasjan'
  },

  {
    id: 'zfbAvm3ocz4',
    title: 'I Am Groot',
    description: 'picture of a lego groot exploring the wilderness',
    width: 600,
    height: 300,
    pathURL: 'images/zfbAvm3ocz4.jpg',
    linkURL: 'https://unsplash.com/photos/zfbAvm3ocz4',
    credit: 'Sid Balachandran',
    creditURL: 'https://unsplash.com/@itookthose'
  },

  {
    id: 'G3eUb_ilKj0',
    title: 'Cold Stormtrooper',
    description: 'picture of a lego stormtrooper walking in the snow on a moonlit night',
    width: 600,
    height: 300,
    pathURL: 'images/G3eUb_ilKj0.jpg',
    linkURL: 'https://unsplash.com/photos/G3eUb_ilKj0',
    credit: 'Umberto',
    creditURL: 'https://unsplash.com/@umby'
  },

  {
    id: 'lBCpc87rtKo',
    title: 'Yoda Is King',
    description: 'picture of a lego stormtrooper and han solo holding up yoda',
    width: 600,
    height: 300,
    pathURL: 'images/lBCpc87rtKo.jpg',
    linkURL: 'https://unsplash.com/photos/lBCpc87rtKo',
    credit: 'Artur Tumasjan',
    creditURL: 'https://unsplash.com/@arturtumasjan'
  }
]

let output = '';
const gallery = document.querySelector('.gallery')

unsplashPictures.forEach(function(picture){
  output += `<figure>
    <h2>${picture.title}</h2>
    <a href="${picture.linkURL}">
      <img src="${picture.pathURL}" alt="${picture.description}" width="${picture.width}" height="${picture.height}">
    </a>
    <figcaption>
      <a href="${picture.creditURL}">
        <span>${picture.credit}</span>
      </a>
    </figcaption>
  </figure>`
})

gallery.innerHTML = output;