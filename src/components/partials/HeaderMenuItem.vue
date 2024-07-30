<script>
  export default {
    props: {
      label: {
        type: String,
        required: Boolean
      },
      url: {
        type: String,
        required: Boolean
      },
      active: {
        type: Boolean,
        required: Boolean
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

</style>