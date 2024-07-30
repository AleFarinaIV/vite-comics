<script>
export default {
    data() {
        return {
            dc_comics: [
                {
                    label: 'Characters',
                    url: '#',
                },
                {
                    label: 'Comics',
                    url: '#',
                },
                {
                    label: 'Movies',
                    url: '#',
                },
                {
                    label: 'TV',
                    url: '#',
                },
                {
                    label: 'Games',
                    url: '#',
                },
                {
                    label: 'Videos',
                    url: '#',
                },
                {
                    label: 'News',
                    url: '#',
                },
            ],

            shop_section: [
                {
                    label: 'Shop DC',
                    url: '#'
                },
                {
                    label: 'Collectibles',
                    url: '#'
                },
            ],

            dc_section: [
                {
                    label: 'Thermes Of Use',
                    url: '#'
                },
                {
                    label: 'Privacy policy (New)',
                    url: '#'
                },
                {
                    label: 'Ad Choices',
                    url: '#'
                },
                {
                    label: 'Advertising',
                    url: '#'
                },
                {
                    label: 'Jobs',
                    url: '#'
                },
                {
                    label: 'Subscriptions',
                    url: '#'
                },
                {
                    label: 'Talent Workshops',
                    url: '#'
                },
                {
                    label: 'CPSC Certificates',
                    url: '#'
                },
                {
                    label: 'Ratings',
                    url: '#'
                },
                {
                    label: 'Shop Help',
                    url: '#'
                },
                {
                    label: 'Contact Us',
                    url: '#'
                },
            ],

            sites_section: [
                {
                    label: 'DC',
                    url: '#'
                },
                {
                    label: 'MAD Magazine',
                    url: '#'
                },
                {
                    label: 'MDC Kids',
                    url: '#'
                },
                {
                    label: 'DC Universe',
                    url: '#'
                },
                {
                    label: 'CDC Power Visa',
                    url: '#'
                },
            ],

            social_media: [
                { 
                    icon_url: './src/assets/img/footer-facebook.png', 
                    url: '#'

                },
                { 
                    icon_url: './src/assets/img/footer-twitter.png',  
                    url: '#'

                },
                { 
                    icon_url: './src/assets/img/footer-youtube.png',  
                    url: '#'

                },
                { 
                    icon_url: './src/assets/img/footer-pinterest.png', 
                    url: '#'

                },
                {
                    icon_url: './src/assets/img/footer-periscope.png',
                    url: '#'
                }
            ]
        }
    }
}
</script>

<template>
    <div class="bg_footer text-white position-relative">
        <div class="container p-4">
            <div class="row">
                <div class="col-4">
                    <div class="row">
                        <div class="col-4 p-0">
                            <h6>DC COMICS</h6>
                            <ul class="list-unstyled">
                                <li v-for="link, index in dc_comics">
                                    <a :href="link.url">{{ link.label }}</a>
                                </li>
                            </ul>
                            <h6>SHOP</h6>
                            <ul class="list-unstyled">
                                <li v-for="link, index in shop_section">
                                    <a :href="link.url">{{ link.label }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-4 p-0">
                            <h6>DC</h6>
                            <ul class="list-unstyled">
                                <li v-for="link, index in dc_section">
                                    <a :href="link.url">{{ link.label }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-4 p-0">
                            <h6>SITES</h6>
                            <ul class="list-unstyled">
                                <li v-for="link, index in sites_section">
                                    <a :href="link.url">{{ link.label }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <img id="logo_jumbo_dc" class="position-absolute" src="../assets/img/dc-logo-bg.png" alt="">
                </div>
            </div>
        </div>
        <div class="bg_grey py-4 position-relative z-1">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex align-items-center justify-content-between">
                        <button><a href="#">SIGN-UP NOW!</a></button>
                        <div id="footer-right" class="d-flex align-items-center justify-content-between">
                            <h4><a href="#">FOLLOW US</a></h4>
                            <div id="icon-container">
                                <a :href="social_icon.url" v-for="social_icon, index in social_media" :key="index">
                                    <img :src="social_icon.icon_url" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .bg_footer {
        background-image: url(../assets/img/footer-bg.jpg);
        background-size: cover;

        button {
            background-color: #303030;
            color: white;
            border: 3px solid #0C7CEC;
            padding: 10px 20px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            &:hover {
                background-color: #0C7CEC;
            }
            a {
                color: white;
                text-decoration: none;
            }
        }

        .bg_grey {
            background-color: #303030;
        }

        ul {
            margin-top: 10px;
            li {
                font-size: 12px;
                a {
                    text-decoration: none;
                    color: grey;
                    &:hover {
                        color: #0C7CEC;
                    }
                }
            }
        }

        #footer-right {
            a {
                text-decoration: none;
                font-size: 18px;
            }
            #icon-container {
                img {
                    margin-left: 15px;
                    width: 30px;
                    &:hover {
                        transform: scale(1.1);
                        transition: transform 0.3s ease;
                    }
                }
            }
        }

        #logo_jumbo_dc {
            width: 460px;
            right: 250px;
            top: -80px;
        }
    }
</style>