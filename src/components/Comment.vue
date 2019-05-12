<template>
  <div class="comment">
    <div class="t">Bình Luận</div>
    <div class="comment__input" :class="{'disable': !this.user_id}">
      <input type="text" name id v-model="content">
      <button @click="commentHandle">Gửi</button>
    </div>

    <div class="comment__list">
      <div class="comment-item" v-for="(comment, index) in comments" :key="index">
        <div class="user-box">
          <img src="/images/user.svg" width="30px" height="30px" alt="user">
          <span class="name">{{ comment.users }}</span>
        </div>
        <div class="comment-content">
          <span class="text">{{ comment.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import rf from "../common/requests/RequestFactory";

export default {
  data() {
    return {
      content: "",
      comments: []
    };
  },
  props: {
    shop_id: String,
    user_id: String
  },
  methods: {
    getComment() {
      rf.getRequest("CommentRequest")
        .get_comments_shop({ shop_id: this.shop_id })
        .then(res => {
          this.comments = res.comments.reverse();
        });
    },
    commentHandle() {
      if (this.user_id) {
        let params = {
          shop_id: this.shop_id,
          users_id: this.user_id,
          content: this.content
        };

        rf.getRequest("CommentRequest")
          .users_comments_shop(params)
          .then(res => {
            this.getComment();
          });
      } else {
        alert("Bạn phải đăng nhập để sử dụng tính năng này"); 
      }
    }
  },
  created() {
    this.getComment();
  }
};
</script>
<style scoped>
.comment__input {
  margin: 15px 0 30px;
  font-size: 0;

  input,
  button {
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    height: 45px;
    border-radius: 20px;
    border: 1px solid #999;

    &:focus,
    &:active {
      outline: none;
    }
  }

  input {
    width: calc(100% - 107px);
    padding: 0 20px;
  }

  button {
    background-color: #05b79e;
    width: 100px;
    color: #fff;
    margin-left: 7px;
  }

  &.disable {
    position: relative;

    &:after {
      content: ' Xin vui lòng đăng nhập !';
      color: #fff;
      text-align: center;
      font-size: 14px;
      line-height: 45px;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}

.comment-item {
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  .user-box {
    display: inline-block;
    margin-bottom: 5px;
  }

  .comment-content {
    display: inline-block;
    margin-left: 15px;
    .text {
      border: none;
      display: inline-block;
      font-size: 12px;
    }
  }

  img,
  .name {
    display: inline-block;
    vertical-align: middle;
  }

  .name {
    font-weight: 500;
    font-size: 12px;
    color: #333;
    margin-left: 10px;
    color: #0e5bc1;
  }
}
</style>
