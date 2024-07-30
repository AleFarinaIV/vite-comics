<script>
import { menu } from "../data/headerMenuData"
import HeaderMenuItem from "./partials/HeaderMenuItem.vue";
export default {

    components: {
        HeaderMenuItem,
    },

    data() {
        return {
            menu
        }
    },
    methods: {
        itemClicked(index) {
            this.menu.forEach((item, i) => {
                item.active = (i === index)
            });
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

                    <HeaderMenuItem 
                    v-for="section, index in menu" 
                    :key="index" 
                    :label="section.label"
                    :url="section.url"
                    :active="section.active"
                    :onClick="() => itemClicked(index)"
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

</style>