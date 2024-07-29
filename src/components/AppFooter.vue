<script>
export default {
    data() {
        return {
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
    <div class="bg_footer text-white">
        <div class="container p-4">
            <div class="row">
                <div class="col-4">
                    <div class="row">
                        <div class="col-4 p-0">
                            <h6>DC COMICS</h6>
                            <ul class="list-unstyled">
                                <li><a href="">Characters </a> </li>
                                <li><a href="">Comics </a> </li>
                                <li><a href="">Movies </a> </li>
                                <li><a href="">TV </a> </li>
                                <li><a href="">Games </a> </li>
                                <li><a href="">Videos </a> </li>
                                <li><a href="">News </a> </li>
                            </ul>
                            <h6>SHOP</h6>
                            <ul class="list-unstyled">
                                <li><a href="">Shop DC</a></
                                <li><a href="">Shop DC Collectibles</a></li>
                            </ul>
                        </div>
                        <div class="col-4 p-0">
                            <h6>DC</h6>
                            <ul class="list-unstyled">
                                <li><a href="">Thermes Of Use</a></li>
                                <li><a href="">Privacy policy (New)</a></li>
                                <li><a href="">Ad Choices</a></li>
                                <li><a href="">Advertising </a> </li>
                                <li><a href="">Jobs </a> </li>
                                <li><a href="">Subscriptions </a></li>
                                <li><a href="">Talent Workshops</a></li>
                                <li><a href="">CPSC Certificates</a></li>
                                <li><a href="">Ratings </a></li>
                                <li><a href="">Shop Help</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="col-4 p-0">
                            <h6>SITES</h6>
                            <ul class="list-unstyled">
                                <li><a href="">DC </a></li>
                                <li><a href="">MAD Magazine</a></li>
                                <li><a href="">MDC Kids</a></li>
                                <li><a href="">DC Universe</a></li>
                                <li><a href="">DC Power Visa</a></li>
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
                        <button>SIGN-UP NOW!</button>
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
                }
            }
        }

        #logo_jumbo_dc {
            width: 450px;
            top: 150px;
            right: 260px;
        }
    }
</style>