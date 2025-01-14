<template>
    <div class="review">
      <span class="rating">
        <span class="rating-stars" v-html="stars"></span>
      </span>
      <div class="user-info">
        <span class="username">{{ comment.meno }}</span>&nbsp;
        <span class="date">{{ comment.datum }}</span>
      </div>
      <div v-if="isEditing">
        <EditRecenzia 
          :reviewId="comment.ID" 
          @cancel="cancelEdit" 
          @save="onSave" 
        />
      </div>
      <div v-else-if="showDeleteDialog">
      <DeleteRecenzia 
        :reviewId="comment.ID" 
        @cancel="showDeleteDialog = false" 
        @deleted="onDelete"
      />
    </div>
      <div v-else>
        <p class="comment">{{ comment.komentar }}</p>
        <button 
          v-if="canEdit" 
          @click="editReview(comment.ID)" 
          class="edit-button">Editovať</button>
          <button 
          v-if="canDelete" 
          @click="showDeleteDialog = true" 
          class="delete-button">Vymazať</button>
      </div>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '@/stores/userStore';
  import EditRecenzia from "../components/EditRecenzia.vue";
  import DeleteRecenzia from "../components/DeleteRecenzia.vue";
  export default {
    name: "Recenzia",
    components: {
      EditRecenzia,
      DeleteRecenzia,
    },
    props: {
      comment: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        isEditing: false,  
        showDeleteDialog: false,
        };
     },
    computed: {
      stars() {
        let rating = this.comment.hodnotenie || 0;
        return "★".repeat(rating) + "☆".repeat(5 - rating);
      },
      canEdit() {
      const userStore = useUserStore();
      return userStore.user?.id === this.comment.id_user;
    },
    canDelete() {
      const userStore = useUserStore();
      const isAdmin = userStore.user?.role === 'admin';
      return isAdmin || userStore.user?.id === this.comment.id_user;
    },
    },
    methods: {
      editReview() {
        this.isEditing = true;
      },
      onSave() {
        this.$emit('refresh-comments');
        this.isEditing = false; 
      },
      cancelEdit() {
        this.isEditing = false;  
      },
      onDelete() {
        this.$emit("deleted", this.comment.ID);
        this.showDeleteDialog = false;
        this.$emit('refresh-comments');
      },
    }
  };
  </script>
<style>
.edit-button {
  color: black;
  background-color: greenyellow;
  padding: 5px;
  border: none; 
  cursor: pointer;
  font-size: 18px; 
}
.delete-button {
  color: black;
  background-color: red;
  padding: 5px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-left: 10px;
}
</style>
  