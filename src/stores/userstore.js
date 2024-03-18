import { defineStore } from "pinia";

export const useUserStorage = defineStore({
    id : 'user',
    state: () => ({
      user: null,
      isLoggedIn: false,
      token: ''
    }),
    // getters: {
    //     getUser() {
    //       return this.user;
    //     },
    //     getLoggedIn() {
    //       return this.loggedIn;
    //     }
    // },
    actions: {
      setUser(user) {
        this.user = user;
      },
      setLoggedIn(state) {
        this.isLoggedIn = state;
      },
      setToken(token) {
        this.token = token;
      }
    }
  })
  