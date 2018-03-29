<template>
<div>
  <v-data-table
    :headers="headers"
    :items="items"
  >
    <template slot="items" slot-scope="data">
      <td>{{data.item.name}}</td>
      <td>{{data.item.class}}</td>
      <td>{{data.item.type}}</td>
      <td>{{data.item.rarity}}</td>
    </template>
  </v-data-table>
</div>
</template>

<script>
export default {
  name: 'ArtifactList',
  data() {
    return {
      headers: [
        {text: 'Name', sortable: true, value: 'name'},
        {text: 'Class', sortable: true, value: 'class'},
        {text: 'Type', sortable: true, value: 'type'},
        {text: 'Rarity', sortable: true, value: 'rarity'}
      ]
    }
  },
  computed: {
    items() {
      return this.$store.getters.artifacts
    }
  }
}
</script>
