<script>
    export default {
        props: {
            thumb: {
                type: String,
                required: true,
            },
            series: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                required: true,
            }
        }
    }
</script>

<template>
    
    <div class="col-2 p-0 mb-5">
        <div class="d-flex justify-content-center size">
            <img :src="thumb" :alt="series" />
        </div>
        <p class="resize">{{ series.toUpperCase() }}</p>
    </div>

</template>

<style>

    .size {
        width: 200px;
        height: 200px;
        margin-bottom: 20px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;

            transition: transform 0.3s;
            cursor: pointer;
            &:hover {
                transform: scale(1.1);
            }
        }

    }

    .resize {
        width: calc(100% - 10px);
    }

</style>