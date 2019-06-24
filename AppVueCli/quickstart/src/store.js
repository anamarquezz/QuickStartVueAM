import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    propiedadNueva: 'Mi Vista',
    personas: []
  },
  mutations: {
    set_personas: (state, values) => {
      state.personas = values;
    },
    set_otraPersona: (state, otrapersona) => {
      state.personas.push(otrapersona);
    }
  },

  actions: {
    obtener_informacion({
      state,
      commit,
      dispatch
    }) {
      fetch("https://api.myjson.com/bins/g7exx")
        .then(response => response.json())
        .then(json => {
          commit("set_personas", json.Personas);
        });
    },
    Agregar_otraPersona({
      state,
      commit,
      dispatch
    }, persona) {
      commit("set_otraPersona", persona);
    }
  }
});

/* fetch("https://api.myjson.com/bins/g7exx")
   .then(response => response.json())
   .then(json => {
     this.personas = json;
   });
   */