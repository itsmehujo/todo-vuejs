<template>
    <div class="no-task pa-3" style="display: flex; flex-direction: column; justify-content: center;">
        <v-icon size="400%" color="primary">
            mdi-check
        </v-icon>
        <div class="text-h5 primary--text">
            No task created yet
        </div>
    </div>
</template>

<style scoped>
    div.no-task {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>