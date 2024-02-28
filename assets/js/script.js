// clase Multimedia, recibe url
class Multimedia {
  constructor(url) {
    this._url = url;
  }

  get url() {
    return this._url();
  }

  setInicio() {
    console.log('Este método es para realizar un cambio en la URL del video');
  }
}

// clase Reproductor que extiende de Multimedia, recibe url e id
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }

  // Método para ejecutar el setData del iife
  playMultimedia(iife) {
    iife.setData(this._url, this._id);
  }

  // Método para agregar un inicio al video
  setInicio(tiempo) {
    const iFrame = document.getElementById(this._id);
    iFrame.setAttribute('src', `${this._url}?start=${tiempo}`);
  }
}

// IIFE para encapsular el método setData
const iife = (() => {
  // Método privado para cambiar el atributo url del iFrame
  function _setData(url, id) {
    const iFrame = document.getElementById(id);
    iFrame.setAttribute('src', url);
  }

  return {
    // Método público para cambiar el atributo url del iFrame
    setData: (url, id) => {
      _setData(url, id);
    },
  };
})();



// Instancias de la clase Reproductor
const musica = new Reproductor(
  'https://www.youtube.com/embed/5PSNL1qE6VY',
  'musica'
);
const pelicula = new Reproductor(
  'https://www.youtube.com/embed/5PSNL1qE6VY',
  'peliculas'
);
const serie = new Reproductor(
  'https://www.youtube.com/embed/5PSNL1qE6VY',
  'series'
);

// Ejecución de los métodos
musica.playMultimedia(iife);
pelicula.playMultimedia(iife);
serie.playMultimedia(iife);

// Cambio de inicio de los videos
serie.setInicio(30);
