<script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        required: true
      }
    }
  }
</script>

<template>

    <li>
      <a :href="url" :class="active ? 'active' : ''">{{ label }}</a>
    </li>

</template>
  
<style scoped>
    li {
        a {
          color: black;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        a:hover {
          color: rgb(0, 110, 255);
        }
        .active {
          color: rgb(0, 110, 255);
          border-bottom: 4px solid blue;
          padding-bottom: 40px;
        }
    }

</style>