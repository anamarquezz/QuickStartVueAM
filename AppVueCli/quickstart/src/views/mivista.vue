<template>

    <div class="container">
        <h1> {{propiedad}}</h1>

        <div class="row">

            <div class="col-3">
                <form>
                    <v-text-field v-model="Nombre" label="Nombre"></v-text-field>
                    <v-text-field v-model="Edad" label="Edad"></v-text-field>
                    <v-text-field v-model="Direccion" label="Direccion"></v-text-field>
                    <v-text-field v-model="Nacionalidad" label="Nacionalidad"></v-text-field>
                    <v-switch   v-model="Activo"  label="Es Activo?"  color="indigo"></v-switch>
                    <v-btn @click="otrapersona">Agregar</v-btn>
                </form>
            </div>

            <div class="col-9">
                <v-data-table :headers="headers" :items="personas" class="elevation-1" :pagination=pagination :rows-per-page-items="pagination.rowsPerPageItems">
                    <template v-slot:items="props">
                        <td class="text-xs-right">{{ props.item.Nombre }}</td>
                        <td class="text-xs-right">{{ props.item.Edad }}</td>
                        <td class="text-xs-right">{{ props.item.Direccion }}</td>
                        <td class="text-xs-right">{{ props.item.Nacionalidad }}</td>
                        <td class="text-xs-right">{{ props.item.Activo }}</td>
                    </template>
                </v-data-table>
            </div>
        </div>

    </div>

</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "mivista",
  components: {},
  data() {
    return {
      texto: "Mi Vista",
      Nombre: "",
      Edad: "",
      Direccion: "",
      Nacionalidad: "",
      Activo: true,
      pagination: {
        descending: true,
        page: 1,
        rowsPerPage: 10,
        sortBy: "name",
        rowsPerPageItems: [10, 50, 100, 300, 400, 600, 1000, 3000, 5000]
      },
      headers: [
        {
          text: "Nombre",
          align: "left",
          value: "Nombre"
        },
        {
          text: "Edad",
          align: "left",
          value: "name"
        },
        {
          text: "Direccion",
          align: "left",
          value: "Direccion"
        },
        {
          text: "Nacionalidad",
          align: "left",
          value: "Nacionalidad"
        },
        {
          text: "Activo",
          align: "left",
          value: "Activo"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      propiedad: "propiedadNueva",
      personas: "personas"
    })
  },
  methods: {
    otrapersona() {
      var esto = this;
      var persona = {
        Nombre: esto.Nombre,
        Edad: esto.Edad,
        Direccion: esto.Direccion,
        Nacionalidad: esto.Nacionalidad,
        Activo: esto.Activo
      };

      this.$store.dispatch("Agregar_otraPersona", persona);
    }
  },
  created() {
    this.$store.dispatch("obtener_informacion");
  }
};
</script>

<style scoped>
</style>