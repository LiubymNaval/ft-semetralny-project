<template>
    <div v-if="isLoggedIn" class="add-recenzie">
      <div class="add-review">
        <h2>Pridať recenziu</h2>
        <form @submit.prevent="submitReview" id="review-form">
          <div>
            <textarea v-model="comment" id="comment" placeholder="Váš komentár" rows="4" required></textarea>
          </div>
          <div>
            <label for="rating"></label>
            <div class="star-rating" id="rating">
              <span
                v-for="i in 5"
                :key="i"
                class="star"
                :data-value="6 - i" 
                @click="setRating(6 - i)"
                :class="{'active': rating >= (6 - i)}"
              >
                &#9733;
              </span>
            </div>
            <input type="hidden" name="rating" :value="rating" id="ratingValue">
          </div>
          <input type="submit" value="Odoslať" id = "odoslat">
        </form>
      </div>
      <div v-if="message" class="message">{{ message }}</div>
    </div>
    <div v-else>
      <p>Pre pridanie recenzie sa musíte prihlásiť!</p>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '@/stores/userStore';
  import axios from 'axios';
  import { setupStars, handleReviewSubmit } from '@/utils/recenzie';
  
  export default {
    data() {
      return {
        rating: 0,
        comment: '',
        message: '',
      };
    },
    computed: {
      isLoggedIn() {
        return useUserStore().isLoggedIn;
      },
    },
    methods: {
      setRating(value) {
        this.rating = value;
      },
      async submitReview() {
        if (this.rating === 0 || !this.comment) {
          alert("Prosím, vyberte hodnotenie");
          return;
        }
  
        const userStore = useUserStore();
        const data = {
          comment: this.comment,
          rating: this.rating,
          user_id: userStore.user.id,
          username: userStore.user?.username,
        };
  
        try {
          const response = await axios.post('http://localhost/api/db/add_recenzie.php', data);
          if (response.data.success) {
            this.comment = '';
            this.rating = 0;
            alert("Recenzia bola úspešne pridaná!");
          } else {
            alert(response.data.message || "Chyba pri pridávaní recenzie");
          }
        } catch (error) {
          alert("Chyba pri komunikácii so serverom");
        }
      },
    },
  };
  </script>
  