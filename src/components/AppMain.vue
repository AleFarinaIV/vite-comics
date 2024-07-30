<script>
import MainNavbarItem from './partials/MainNavbarItem.vue';
import { main_navbar } from '../data/mainNavbarData';

export default {

    components: {
        MainNavbarItem
    },

    data() {
        return {
            main_navbar
        }
    }
}
</script>

<template>

    <div id="main" class="bg_black text-white">
        <div class="container py-5">
            <div class="row">
                <div class="col-12">
                    <h4> --> Content goes here <-- </h4>
                </div>
            </div>
        </div>
        <div id="main_navbar" class="container-full bg-primary">
            <div class="row justify-content-center align-items-center pt-5">
                
                <MainNavbarItem
                v-for="section, index in main_navbar" 
                :key="index"
                :logo="section.logo"
                :text="section.text"
                :url="section.url"
                id="main_navbar_section" 
                class="col-2" 
                />
            </div>
        </div>
    </div>

</template>

<style scoped>

    #main_navbar {
        min-height: 150px;
        overflow-x: hidden;
    }
    

    .bg_black {
        background-color: black;
    }

</style>
