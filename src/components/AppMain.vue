<script>
import { main_navbar } from '../data/mainNavbarData';
import MainNavbarItem from './partials/MainNavbarItem.vue';
import { comics_array } from '../data/comicsContentData'
import ContentComicsSection from './partials/ContentComicsSection.vue';

export default {

    components: {
        MainNavbarItem,
        ContentComicsSection,
    },

    data() {
        return {
            main_navbar,
            comics_array,
        }
    }
}
</script>

<template>

    <div id="series_label" class="text-center">
        <P class="mb-4">CURRENT SERIES</P>
    </div>
    
    <div id="main" class="bg_black text-white">
        <div class="container py-5">
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <ContentComicsSection 
                        v-for="comic, index in comics_array"
                        :key="index"
                        :series="comic.series"
                        :type="comic.type"
                        :thumb="comic.thumb"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="container text-center">
            <button class="mb-4">LOAD MORE</button>
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
    
    #series_label {
        position: relative;
        width: 250px;

        P {
            position: absolute;
            top: -25px;
            right: -30px;
            color: white;
            font-size: 24px;
            font-weight: bold;
            padding: 7px 15px;
            background-color: #0C7CEC;
        }
    }


    button {
        border: none;
        color: white;
        font-size: 14px;
        font-weight: bold;
        padding: 7px 50px;
        background-color: #0C7CEC;
    }

    #main_navbar {
        min-height: 170px;
        overflow-x: hidden;
    }
    

    .bg_black {
        background-color: black;
    }

</style>
