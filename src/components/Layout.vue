<template>
  <div class="layout">
    <Product :shop_id="$route.params.shop_id" />
    <Comment :shop_id="$route.params.shop_id" :user_id="$route.params.user_id" />
  </div>
</template>

<script>
import Product from "./Product.vue";
import Comment from "./Comment.vue";

export default {
  name: "layout",
  components: {
    Product,
    Comment
  }
};
</script>

<style>

</style>
