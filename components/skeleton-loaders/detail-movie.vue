<template>
    <div class="grid-container">
        <div class="card-item">
            <div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
                <Skeleton width="100%" height="500px" class="margin"></Skeleton>
            </div>
        </div>
        <div class="card-item">
            <div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
                
                <div>
                    <Skeleton width="100%" height="20px" class="margin"></Skeleton>
                    <Skeleton width="80%" height="20px" class="margin"></Skeleton>
                    <Skeleton width="100%" height="20px" class="margin"></Skeleton>
                    <Skeleton width="80%" height="20px" class="margin"></Skeleton>
                    <Skeleton width="90%" height="20px" class="margin"></Skeleton><br>
                </div>

                <Skeleton width="90%" height="60px" class="margin"></Skeleton><br>
                <Skeleton width="100%" height="274px" class="margin"></Skeleton>
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
