<template>
    <div class="grid-container">
        <div v-for="n in 20" :key="n" class="card-item">
            <div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
                <Skeleton width="100%" height="250px" class="margin"></Skeleton>
                <div>
                    <Skeleton width="10rem" class="mb-2 margin"></Skeleton>
                    <Skeleton width="5rem" class="mb-2 margin"></Skeleton>
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }

  .card-item {
    display: flex;
    flex-direction: column;
  }

  .margin {
    margin-bottom: 5px;
  }
</style>
