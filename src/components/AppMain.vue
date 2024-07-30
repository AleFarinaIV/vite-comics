<script>
export default {
    data() {
        return {
            main_navbar: [
                {
                    logo: './src/assets/img/buy-comics-digital-comics.png',
                    text: 'DIGITAL COMICS',
                    url: '#'
                },
                {
                    logo: './src/assets/img/buy-comics-merchandise.png',
                    text: 'DC MERCHANDISE',
                    url: '#'
                },
                {
                    logo: './src/assets/img/buy-comics-subscriptions.png',
                    text: 'SUBSCRIPTION',
                    url: '#'
                },
                {
                    logo: './src/assets/img/buy-comics-shop-locator.png',
                    text: 'COMIC SHOP LOCATOR',
                    url: '#'
                },
                {
                    logo: './src/assets/img/buy-dc-power-visa.svg',
                    text: 'DC POWER VISA',
                    url: '#'
                },
            ]
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
                <div id="main_navbar_section" class="col-2" v-for="section, index in main_navbar" :key="index">
                    <a :href="section.url">
                        <div id="logo_img_container" class="d-flex justify-content-center align-items-center">
                            <img :src="section.logo" alt="">
                            <p>{{ section.text }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    
    #main_navbar {
        min-height: 150px;
        overflow-x: hidden;

        img {
            width: 40px;
        }

        p {
            margin-left: 15px;
            font-size: 12px;
            margin-bottom: 0;
        }

        a {
            color: white;
            text-decoration: none;
        }

        #main_navbar_section {
            transition: transform 0.3s ease;
            &:hover {
                transform: scale(1.1);
            }
        }
    }

    /* Chiedere come poter modificare un'immagine specifica*/
    /* #logo_img_container {
        img:nth-child(*) {
            height: 10px;
        }
    } */

    .bg_black {
        background-color: black;
    }
</style>
