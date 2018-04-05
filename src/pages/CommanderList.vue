<template>
<div>
  <p>Search By:</p>
  <ul>
    <li>Skill</li>
    <li>Class</li>
    <li>Weapon Type</li>
    <li>Cost</li>
    <li>Terrain Advantage</li>
  </ul>
  <v-data-table
    :headers="headers"
    :items="items"
  >
    <template slot="items" slot-scope="data">
      <tr @click="onRowClicked(data.item)">
        <td>{{data.item.name}}</td>
        <td>{{data.item.class}}</td>
        <td>{{data.item.banner}}</td>
      </tr>
    </template>
  </v-data-table>

  <v-dialog v-model="showDetail">
    <v-card>
      <v-card-title class="headline">Commander Details</v-card-title>
      <v-card-text>
        <p>{{selectedCommander.name}}</p>
        <p>{{selectedCommander.class}}</p>
        <p>{{selectedCommander.banner}}</p>
        <p>{{selectedCommander.meta && selectedCommander.meta.stages}}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click.native="showDetail = false">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
export default {
  name: 'CommanderList',
  data() {
    return {
      headers: [
        {text: 'Name', sortable: true, value: 'name'},
        {text: 'Class', sortable: true, value: 'class'},
        {text: 'Banner', sortable: true, value: 'banner'}
      ],
      showDetail: false,
      selectedCommander: {}
    }
  },
  computed: {
    items() {
      return this.$store.getters.commanders
    }
  },
  methods: {
    onRowClicked(commander) {
      this.showDetail = true
      this.selectedCommander = commander
    }
  }
}
</script>
