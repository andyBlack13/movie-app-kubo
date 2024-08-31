// https://nuxt.com/docs/api/configuration/nuxt-config


// importar tema Aura para el modo estilo en mi proyecto
import Aura from '@primevue/themes/aura'
//import Nora from '@primevue/themes/nora';
//import Lora from '@primevue/themes/lora';


//Configuraciones
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      //Api Key como variable
      tmdbApiKey: process.env.TMDB_API_KEY,
    },
  },
  modules: [
    '@primevue/nuxt-module'
  ],
  //Configuracion de temas y estilos
  //integracion con primevue
  primevue: {
    usePrimeVue: true,
    autoImport: true||false,
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
          preset: Aura,
          options: {
              prefix: 'p',
              darkModeSelector: 'system',
              cssLayer: false
          }
      }
    },
    components: {
      include: '*',
      //prefix: 'Prime', // Example <PrimeButton /> and <PrimeDataTable />
      //exclude: ['Galleria', 'Carousel']
    },
    directives: {
      include: '*',
      //exclude: ['Ripple']
  }
  }
    
})