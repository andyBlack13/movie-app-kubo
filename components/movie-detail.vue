<template>
  <div class="p-dialog p-component" style="display: block; font-family: 'Roboto'">
    <button @click="goBack" class="back-button">← Regresar</button>
    <div class="p-dialog-content">
      <div class="movie-details">
        <img :src="'https://image.tmdb.org/t/p/w500' + props.movie.poster_path" :alt="props.movie.title" class="movie-poster">
        <div class="movie-info">
          <div class="p-dialog-header">
            <h3 class="title-movie">{{ props.movie.title }} ({{ props.movie.release_date }})</h3>
          </div>

          <div>
            <div class="genres-container">
              <span v-for="genre in props.movie.genres" :key="genre.id" class="genre-box">{{ genre.name }}</span>
            </div>
          </div><br>

          <div>
            <div class="rating">
              <span v-for="index in 5" :key="index" :class="getStarClass(index)"></span>
              <span class="rating-value">{{ props.movie.vote_average.toFixed(1) }}</span>
            </div>
          </div>



          <p>{{ props.movie.overview }}</p>
          <p><strong>Presupuesto:</strong> ${{ props.movie.budget.toLocaleString() }}</p>
          <p><strong>Idioma Original:</strong> {{ props.movie.original_language }}</p>
          <p><strong>Duración:</strong> {{ props.movie.runtime }} minutos</p>
          <p><strong>Status:</strong> {{ props.movie.status }}</p>
          <p><strong>Tagline:</strong> {{ props.movie.tagline }}</p>
          <p><strong>Popularidad:</strong> {{ props.movie.popularity }}</p>
          Sitio Web: <a :href="props.movie.homepage" target="_blank"> {{ props.movie.homepage }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .title-movie {
    font-size: xx-large;
  }

  .movie-details {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .movie-poster {
    max-width: 500px;
    margin-right: 20px;
    position: relative;
    display: block;
    mask-image: linear-gradient(
      to bottom, 
      rgba(0, 0, 0, 0) 0%, 
      rgba(0, 0, 0, 0.9) 15%, 
      rgba(0, 0, 0, 0.2) 100%
    );
    mask-size: cover;
    mask-position: center;
  }

  .movie-info {
    flex: 1;
  }

  @media (max-width: 768px) {
    .movie-details {
      flex-direction: column;
      align-items: center;
    }

    .movie-poster {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  .rating {
    display: flex;
    align-items: center;
  }

  .rating .star {
    color: #d3d3d3;
    font-size: 1.5em;
    margin-right: 5px;
    display: inline-block;
  }

  .rating .full::before {
    content: '★';
    color: #f5c518;
  }

  .rating .half::before {
    content: '★';
    color: #f5c518;
    position: relative;
  }

  .rating .half::after {
    content: '☆';
    color: #d3d3d3;
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    overflow: hidden;
  }

  .rating-value {
    font-size: 16pt;
    color: #c2c2c2;
    margin-left: 10px;
  }

  .genres-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 5px;
  }

  .genre-box {
    background-color: #f0f0f0;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 0.9em;
    color: #333;
    display: inline-block;
  }

  .back-button {
    background-color: #434343;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .back-button:active,
  .back-button:focus,
  .back-button:hover {
    background-color: #b1b1b1;
  }

</style>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  import type { IMovieDetail } from '~/interfaces/IMovieDetail'

  const props = defineProps<{
    movie: IMovieDetail;
  }>()

  const router = useRouter()
  
  // ajustar, no quedo bien
  const getStarClass = (index: number) => {
    if (props.movie.vote_average >= index) {
      return 'star full'
    } else if (props.movie.vote_average >= index - 0.5) {
      return 'star half'
    } else {
      return 'star'
    }
  }

  const goBack = () => {
    router.go(-1)
  }

  // eemitir evento de cierre
  const emit = defineEmits(['close'])
</script>
