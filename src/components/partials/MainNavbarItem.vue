<script>
    export default {
      props: {
        logo: {
          type: String,
          required: true
        },
        text: {
          type: String,
          required: true
        },
        url: {
          type: String,
          required: true
        }
      }
    }
</script>

<template>

    <a :href="url">
      <div id="logo_img_container" class="d-flex justify-content-center align-items-center">
        <img :src="logo" :alt="text">
        <p>{{ text }}</p>
      </div>
    </a>
    
</template>

<style scoped>


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

    img {
      width: 50px;
      margin-right: 10px;
    }

    #logo_img_container {
      text-align: center;
    }

</style>