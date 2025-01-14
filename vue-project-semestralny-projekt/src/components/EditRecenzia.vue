<template>
    <div v-if="isLoggedIn" class="edit-recenzie">
      <form @submit.prevent="submitEdit">
        <input type="hidden" name="id" :value="reviewId" />
        <input type="hidden" name="Hodnotenie" :value="rating" />
  
        <label for="rating">Vaše hodnotenie</label>
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
        <input type="hidden" name="rating" :value="rating" id="ratingValue" />
  
        <br />
        <label for="Komentar">Váš komentár:</label>
        <div style="display: block; padding: 25px 0px; gap: 20px;">
          <textarea v-model="comment" id="Komentar"></textarea>
        </div>
  
        <input type="submit" value="Uložiť"  style="background-color: greenyellow; color: black; padding: 15px 32px; width: 250px; font-size: 16px;margin-right: 10px; cursor: pointer"/>
        <input
          type="button"
          value="Zrušiť"
          @click="cancelEdit"
          style="background-color: greenyellow; color: black; padding: 15px 32px; width: 250px; font-size: 16px; cursor: pointer"
        />
      </form>
      <div v-if="message" class="message">{{ message }}</div>
    </div>
  </template>
  <script>
  import { useUserStore } from '@/stores/userStore';
  import axios from 'axios';
  import { setupStars, handleReviewSubmit } from '@/utils/recenzie';
  export default {
    props: {
      reviewId: {
        type: Number,
        required: true,
      },
    },
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
      async fetchReviewData() {
        try {
          const response = await axios.get(`http://localhost/api/db/getRecenzia.php?id=${this.reviewId}`);
          if (response.data.success) {
            this.rating = response.data.review.hodnotenie;
            this.comment = response.data.review.komentar;
          } else {
            this.message = 'Chyba pri nahrávaní recenzie';
          }
        } catch (error) {
          this.message = 'Chyba pri komunikácii so serverom';
        }
      },
      async submitEdit() {
        if (this.rating === 0 || !this.comment) {
          alert('Prosím, vyberte hodnotenie a napíšte komentár');
          return;
        }
  
        const data = {
          ID: this.reviewId,
          hodnotenie: this.rating,
          komentar: this.comment,
        };
  
        try {
          const response = await axios.post('http://localhost/api/db/edit_recenzie.php', data);
          if (response.data.success) {
            this.$emit('save',{ 
                 ID: this.reviewId, 
                 hodnotenie: this.rating, 
                 komentar: this.comment 
            }); 
            alert('Recenzia bola úspešne upravená!');
          } else {
            alert(response.data.message || 'Chyba pri editácii recenzie');
          }
        } catch (error) {
          alert('Chyba pri komunikácii so serverom');
        }
      },
      cancelEdit() {
        this.$emit('cancel');
      },
    },
    created() {
      this.fetchReviewData();
    },
  };
  </script>
  
  <style>
  .star.active {
    color: gold;
  }
  .message {
    margin-top: 10px;
    color: green;
  }
  </style>