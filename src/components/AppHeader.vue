<script>
import MenuItem from "../components/MenuItem.vue";
import { menu } from "../data/headerMenuData"

export default {

    components: {
        MenuItem,
    },

    data() {
        return {
            menu
        }
    }
}
</script>

<template>

    <div class="container p-3">
        <div class="row">
            <div class="col-12 d-flex align-items-center justify-content-between">
                <img src="../assets/img/dc-logo.png" alt="dc-logo">

                <ul class="list-unstyled d-flex">

                    <MenuItem 
                    v-for="section, index in menu" 
                    :key="index" 
                    :label="section.label"
                    :url="section.url"
                    :active="section.active"
                    />

                </ul>
            </div>
        </div>
    </div>

</template>

<style scoped>

img {
    width: 70px;
}

ul {
    li {
        margin: 0 15px;
        font-size: 12px;
        font-weight: bold;
        a {
            color: black;
            text-decoration: none;
            transition: color 0.3s ease;
            &:hover {
                color: rgb(0, 110, 255);
            }
        }
        .active {
            color: rgb(0, 110, 255);
            border-bottom: 4px solid blue;
            padding-bottom: 40px;
        }
    }

}
</style>