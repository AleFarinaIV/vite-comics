<script>
  import { itemClicked } from "../../data/functions"
  import { menu } from "../../data/headerMenuData"

  export default {
    methods: {
      itemClicked() {
        this.onClick()
      }
    },

    data() {
      return {
        menu
      }
    },
    
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
      },
      onClick: {
        type: Function,
        required: true
      }
    }
  }
</script>

<template>

  <li>
    <a @click="itemClicked" :href="url" :class="{ 'active' : active }">{{ label }}</a>
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