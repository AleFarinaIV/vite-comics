<script>
export default {
    
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
                                <li>Characters</li>
                                <li>Comics</li>
                                <li>Movies</li>
                                <li>TV</li>
                                <li>Games</li>
                                <li>Videos</li>
                                <li>News</li>
                            </ul>
                            <h6>SHOP</h6>
                            <ul class="list-unstyled">
                                <li>Shop DC</li>
                                <li>Shop DC Collectibles</li>
                            </ul>
                        </div>
                        <div class="col-4 p-0">
                            <h6>DC</h6>
                            <ul class="list-unstyled">
                                <li>Thermes Of Use</li>
                                <li>Privacy policy (New)</li>
                                <li>Ad Choices</li>
                                <li>Advertising</li>
                                <li>Jobs</li>
                                <li>Subscriptions</li>
                                <li>Talent Workshops</li>
                                <li>CPSC Certificates</li>
                                <li>Ratings</li>
                                <li>Shop Help</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div class="col-4 p-0">
                            <h6>SITES</h6>
                            <ul class="list-unstyled">
                                <li>DC</li>
                                <li>MAD MAgazine</li>
                                <li>MDC Kids</li>
                                <li>DC Universe</li>
                                <li>DC Power Visa</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg_grey py-4">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex align-items-center justify-content-between">
                        <button>SIGN-UP NOW!</button>
                        <div id="footer-right" class="d-flex align-items-center justify-content-between">
                            <h4><a href="#">FOLLOW US</a></h4>
                            <div id="icon-container">
                                <img src="../assets/img/footer-facebook.png" alt="">
                                <img src="../assets/img/footer-twitter.png" alt="">
                                <img src="../assets/img/footer-youtube.png" alt="">
                                <img src="../assets/img/footer-pinterest.png" alt="">
                                <img src="../assets/img/footer-periscope.png" alt="">
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
    }

    .bg_grey {
        background-color: #303030;
    }

    ul {
        margin-top: 10px;
        li {
            font-size: 12px;
            color: grey;
        }
    }
</style>