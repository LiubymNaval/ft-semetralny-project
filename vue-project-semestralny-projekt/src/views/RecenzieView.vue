<template>
<main class="container">
<section>
<div class="col-100 text-center" style="background-color: greenyellow">
<div class="recenzie-view">
      <h1>Recenzie</h1>
      <h2>Tu nájdete recenzie o našom klube</h2>
      <AddRecenzia v-if="!isAdmin" @refresh-comments="fetchComments"/>
      <div class="reviews-container">
      <div v-if="loading">Nahrávanie komentárov...</div>
      <div v-else-if="comments.length === 0">Žiadne recenzie</div>
      <div v-else>
        <Recenzia v-for="comment in comments" :key="comment.id" :comment="comment" @refresh-comments="fetchComments"/>
      </div>
    </div>
</div>
</div>
</section>
</main>
</template>
  
  <script>
  import Recenzia from "../components/Recenzia.vue";
  import AddRecenzia from "../components/AddRecenzia.vue";
  import { useUserStore } from "@/stores/userStore";
  export default {
    name: "RecenzieView",
    components: { Recenzia, AddRecenzia },
    data() {
      return {
        comments: [],
        loading: true,
      };
    },
    computed: {
      isAdmin() {
        const userStore = useUserStore();
        return userStore.user?.role === "admin";
      },
    },
    methods: {
      async fetchComments() {
        try {
          const response = await fetch("http://localhost/api/db/get_recenzie.php"); 
          const data = await response.json();
          const userStore = useUserStore();
          const userId = userStore.user?.id; 
          this.comments = data.sort((a, b) => {
            if (a.id_user === userId) return -1;
            if (b.id_user === userId) return 1;
            return new Date(b.datum) - new Date(a.datum);
            });
        } catch (error) {
          console.error("Chyba pri načítaní komentárov:", error);
        } finally {
          this.loading = false;
        }
      },
    },
    created() {
      this.fetchComments();
    },
  };
  </script>
  
<style src="@/assets/recenzie_style.css"></style>
  