<template>
    <div>
      <section class="banner">
        <div class="container text-white">
        </div>
      </section>
      <section class="container">
        <h2>Registrácia a prihlásenie</h2>
        <div class="row">
          <div class="form-container register-form">
            <h2 class="form-title">Registrácia</h2>
            <form @submit.prevent="register">
              <div class="form-group">
                <label for="username">Používateľské meno:</label>
                <input
                  v-model="registerForm.username"
                  type="text"
                  id="username"
                  name="username"
                  class="form-input"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input
                  v-model="registerForm.email"
                  type="email"
                  id="email"
                  name="email"
                  class="form-input"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Heslo:</label>
                <input
                  v-model="registerForm.password"
                  type="password"
                  id="password"
                  name="password"
                  class="form-input"
                  required
                />
              </div>
              <button type="submit" class="form-button">Registrovať</button>
            </form>
          </div>

          <div class="form-container login-form">
            <h2 class="form-title">Prihlásenie</h2>
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="email">Email:</label>
                <input
                  v-model="loginForm.email"
                  type="text"
                  id="email"
                  name="email"
                  class="form-input"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Heslo:</label>
                <input
                  v-model="loginForm.password"
                  type="password"
                  id="password"
                  name="password"
                  class="form-input"
                  required
                />
              </div>
              <button type="submit" class="form-button">Prihlásiť</button>
            </form>
          </div>

          <div class="form-container delete-form">
           <h2 class="form-title">Vymazanie používateľa</h2>
           <form @submit.prevent="deleteUser">
            <div class="form-group">
              <label for="email">Email:</label>
              <input
                v-model="deleteForm.email"
                type="text"
                id="email"
                name="email"
                class="form-input"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Heslo:</label>
               <input
                  v-model="deleteForm.password"
                  type="password"
                  id="password"
                  name="password"
                  class="form-input"
                  required
                />
              </div>
              <button type="submit" class="form-button">Vymazať</button>
            </form>
          </div>

        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { useUserStore } from "@/stores/userStore";
  
  export default {
    data() {
      return {
        registerForm: {
          username: "",
          email: "",
          password: "",
        },
        loginForm: {
          email: "",
          password: "",
        },
        deleteForm: {
          email: "",
          password: "",
        },
      };
    },
    methods: {
      async register() {
        const userStore = useUserStore();
        await userStore.register({
          username: this.registerForm.username,
          email: this.registerForm.email,
          password: this.registerForm.password,
        });
      },
      async login() {
        const userStore = useUserStore();
        await userStore.login({
          email: this.loginForm.email,
          password: this.loginForm.password,
        });
      },
      async deleteUser() {
        const userStore = useUserStore();
        await userStore.deleteUser({
          email: this.deleteForm.email,
          password: this.deleteForm.password,
        });
      },
    },
  };
  </script>
  
  <style src="@/assets/profil.css"></style>