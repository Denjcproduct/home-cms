import firebase from "firebase/app";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    async register({ dispatch, commit }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        //создаём базу данных в firebase соаздём таблицу юзеров
        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set({
            bill: 500,
            name
          });
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async logout() {
      await firebase.auth().signOut();
    }
  }
};
