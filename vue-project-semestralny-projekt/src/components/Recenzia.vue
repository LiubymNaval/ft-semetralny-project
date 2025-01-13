<template>
    <div class="review">
      <span class="rating">
        <span class="rating-stars" v-html="stars"></span>
      </span>
      <div class="user-info">
        <span class="username">{{ comment.meno }}</span>&nbsp;
        <span class="date">{{ comment.datum }}</span>
      </div>
      <p class="comment">{{ comment.komentar }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Recenzia",
    props: {
      comment: {
        type: Object,
        required: true,
      },
    },
    computed: {
      stars() {
        let rating = this.comment.hodnotenie || 0;
        return "★".repeat(rating) + "☆".repeat(5 - rating);
      },
    },
  };
  </script>
  