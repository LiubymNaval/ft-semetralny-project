<template>
  <div v-if="isLoggedIn" class="delete-recenzie">
    <p>Ste si istí, že chcete recenziu vymazať?</p>
    <div class="user-info">
      <span class="username">{{ review.meno }}</span>
      <span class="rating">
        <span class="rating-stars">
          {{ '★'.repeat(review.hodnotenie) + '☆'.repeat(5 - review.hodnotenie) }}
        </span>
      </span>
    </div>
    <p class="date">{{ review.datum }}</p>
    <p class="comment">{{ review.komentar }}</p>
    <div class="actions">
      <button @click="deleteReview" class="delete-button">Vymazať</button>
      <button @click="$emit('cancel')" class="cancel-button">Zrušiť</button>
    </div>
    <div v-if="message" class="message">{{ message }}</div>
  </div>
  </template>
  
  <script>
  import { useUserStore } from '@/stores/userStore';
  import axios from 'axios';
  
  export default {
    props: {
      reviewId: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        review: {
          meno: '',
          hodnotenie: 0,
          komentar: '',
          datum: '',
        },
        message: '',
      };
    },
    computed: {
        isLoggedIn() {
            return useUserStore().isLoggedIn; 
        },
     },
    methods: {
      async fetchReviewData() {
        try {
          const response = await axios.get(`http://localhost/api/db/getRecenzia.php?id=${this.reviewId}`);
          if (response.data.success) {
            this.review = response.data.review;
          } else {
            this.message = 'Chyba pri nahrávaní recenzie';
          }
        } catch (error) {
          this.message = 'Chyba pri komunikácii so serverom';
        }
      },
      async deleteReview() {
        try {
          const response = await axios.post('http://localhost/api/db/delete_recenzie.php', { ID: this.reviewId });
          if (response.data.success) {
            alert('Recenzia bola úspešne vymazaná!');
            this.$emit('deleted', this.reviewId); 
          } else {
            alert(response.data.message || 'Chyba pri mazaní recenzie');
          }
        } catch (error) {
          alert('Chyba pri komunikácii so serverom');
        }
      },
    },
    created() {
      this.fetchReviewData();
    },
  };
  </script>
  
  <style>
  .delete-button {
    background-color: red;
    color: black;
    padding: 5px;
    font-size: 18px;
    cursor: pointer;
    margin-right: 10px;
  }
  .cancel-button {
    background-color: white;
    color: black;
    padding: 5px;
    font-size: 18px;
    cursor: pointer;
    width: 100px;
  }
  .message {
    margin-top: 10px;
    color: red;
  }
  </style>