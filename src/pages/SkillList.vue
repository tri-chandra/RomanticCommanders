<template>
<div>
  <v-data-table
    :headers="headers"
    :items="items"
  >
    <template slot="items" slot-scope="data">
      <td>{{data.item.name}}</td>
      <td>{{data.item.description}}</td>
    </template>
  </v-data-table>
</div>
</template>

<script>
export default {
  name: 'SkillList',
  data() {
    return {
      headers: [
        {text: 'Name', sortable: true, value: 'name'},
        {text: 'Class', sortable: true, value: 'description'}
      ]
    }
  },
  computed: {
    items() {
      return this.$store.getters.skills
    }
  }
}
</script>
