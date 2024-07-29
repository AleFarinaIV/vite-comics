<script>
export default {
    data() {
        return {
            menu: [
                {
                    label: 'CHARACTERS',
                    url: '#',
                    active: false,
                },
                {
                    label: 'COMICS',
                    url: '#',
                    active: true,
                },
                {
                    label: 'MOVIES',
                    url: '#',
                    active: false,
                },
                {
                    label: 'TV',
                    url: '#',
                    active: false,
                },
                {
                    label: 'GAMES',
                    url: '#',
                    active: false,
                },
                {
                    label: 'COLLECTIBLES',
                    url: '#',
                    active: false,
                },
                {
                    label: 'VIDEOS',
                    url: '#',
                    active: false,
                },
                {
                    label: 'FANS',
                    url: '#',
                    active: false,
                },
                {
                    label: 'NEWS',
                    url: '#',
                    active: false,
                },
                {
                    label: 'SHOP',
                    url: '#',
                    active: false,
                }
            ]
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
                    <li v-for="section, index in menu" :key="index"> 
                        <a :href="section.url" :class="section.active ? 'active' : ' ' ">{{ section.label }}</a>
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