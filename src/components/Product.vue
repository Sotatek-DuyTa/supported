<template>
  <div class="product-page">
    <div class="category" v-for="(category, index) in categories" :key="index">
      <h3 class="category__title">{{ category.name }}</h3>

      <div class="product__list">
        <swiper :options="swiperOption" ref="mySwiper" class="product-swiper">
          <!-- slides -->
          <swiper-slide :key="index" v-for="(product, index) in category.products">
            <div class="product-01">
              <div class="product__image-wrapper">
                <img :src="product.url_image" alt class="product__image">
              </div>
              <div class="product__infor">
                <p class="product__title">{{ product.name }}</p>
                <p class="product__price">{{ product.price }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import rf from "../common/requests/RequestFactory";

export default {
  data() {
    return {
      categories: [],
      swiperOption: {
        spaceBetween: 15
      }
    };
  },
   props: {
    shop_id: String
  },
  methods: {
    getData() {
      rf.getRequest("ProductRequest")
        .get_shop_detail({ shop_id: this.shop_id })
        .then(res => {
          this.categories = res.shops.categories;
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style scoped>
.category {
  margin-bottom: 30px;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;

  .category__title {
    margin: 0 0 10px;
  }
}

.product-swiper {
  padding-right: 70px;
}

.product-01 {
  font-size: 0;
  background-color: #ffa2a2;
  border: 1px solid #ccc;

  &:after {
    content: "";
    display: table;
    clear: both;
  }

  .product__image-wrapper {
    display: inline-block;
    float: left;
    margin-right: 15px;
  }

  .product__title {
    margin: 0 0 10px;
    font-weight: bold;
    font-size: 18px;
  }

  .product__price {
    margin: 0;
    font-weight: 500;
    color: #333;
    font-size: 16px;
  }

  .product__infor {
    padding: 10px;
  }
}
</style>
