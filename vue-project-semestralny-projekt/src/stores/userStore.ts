import { defineStore } from "pinia";
import axios from "axios";

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null') as User | null, 
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true', 

  }),
  actions: {
    async register(payload: RegisterPayload): Promise<void> {
      try {
        const response = await axios.post(
          "http://localhost/api/db/register.php",
          payload
        );
        this.user = response.data.user as User; 
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('isLoggedIn', 'true');
        alert("Registrácia bola úspešná!");
      } catch (error: any) {
        if (error.response && error.response.data && error.response.data.error) {
            alert(error.response.data.error);
          } else {
            alert("Chyba počas registrácie");
          }
      }
    },
    async login(payload: LoginPayload): Promise<void> {
      try {
        const response = await axios.post(
          "http://localhost/api/db/login.php",
          payload
        );
        this.user = response.data.user as User; 
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('isLoggedIn', 'true');
        //alert("Prihlásenie bolo úspešné!");
      } catch (error: any) {
         if (error.response && error.response.data && error.response.data.error) {
            alert(error.response.data.error);
          } else {
            alert("Chyba počas prihlasovania");
          }
      }
    },
    async logout(): Promise<void> {
      try {
        await axios.get("http://localhost/api/db/logout.php");
        this.user = null;
        this.isLoggedIn = false;
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
       // alert("Odhlásenie bolo úspešné!");
      } catch (error: any) {
        if (error.response && error.response.data && error.response.data.error) {
            alert(error.response.data.error);
          } else {
            alert("Chyba počas odhlásenia");
          }
      }
    },
    async deleteUser(payload: LoginPayload): Promise<void> {
      try {
        const response = await axios.post(
          "http://localhost/api/db/delete_user.php",
          payload
        );
        alert("Používateľ bol úspešne vymazaný!");
        this.user = null; 
        this.isLoggedIn = false;
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
      } catch (error: any) {
        if (error.response && error.response.data && error.response.data.error) {
          alert(error.response.data.error);
        } else {
          alert("Chyba počas vymazania používateľa");
        }
      }
    },
  },
});