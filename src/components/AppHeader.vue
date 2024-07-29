<script>
export default {

}
</script>

<template>

    <div class="container p-3">
        <div class="row">
            <div class="col-12 d-flex align-items-center justify-content-between">
                <img src="../assets/img/dc-logo.png" alt="dc-logo">

                <ul class="list-unstyled d-flex">
                    <li> 
                        <a href="#">CHARACTERS</a>
                    </li>
                    <li> 
                        <a href="#" class="active">COMICS</a>
                    </li>
                    <li> 
                        <a href="#">MOVIES</a>
                    </li>
                    <li> 
                        <a href="#">TV</a>
                    </li>
                    <li> 
                        <a href="#">GAMES</a>
                    </li>
                    <li> 
                        <a href="#">COLLECTIBLES</a>
                    </li>
                    <li> 
                        <a href="#">VIDEOS</a>
                    </li>
                    <li> 
                        <a href="#">FANS</a>
                    </li>
                    <li> 
                        <a href="#">NEWS</a>
                    </li>
                    <li> 
                        <a href="#">SHOP</a>
                    </li>
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
        }
        .active {
            color: rgb(0, 110, 255);
            border-bottom: 4px solid blue;
            padding-bottom: 40px;
        }
    }

}
</style>