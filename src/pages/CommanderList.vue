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
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs6>
              <v-avatar :tile="true" :size="48">
                <img src="/static/img/icons/favicon-32x32.png">
              </v-avatar>
              <p>{{selectedCommander.name}}</p>
              <p>{{selectedCommander.class}}</p>
              <p>{{selectedCommander.banner}}</p>
              <p>{{selectedCommander.weapon}}</p>
              <p>{{selectedCommander.armor}}</p>
              <p>{{selectedCommander.accessory}}</p>
              <p>TERRAIN</p>
            </v-flex>
            <v-flex xs6>
              <v-list two-line>
                <v-subheader>Set 1</v-subheader>
                <v-list-tile v-for="(item, idx) in selectedCommander.skills.set1" :key="idx">
                  <v-list-tile-avatar :tile="true">
                    <img src="/static/img/icons/favicon-32x32.png">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>{{item}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{item}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-subheader>Set 2</v-subheader>
                <v-list-tile v-for="(item, idx) in selectedCommander.skills.set2" :key="idx">
                  <v-list-tile-avatar :tile="true">
                    <img src="/static/img/icons/favicon-32x32.png">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>{{item}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{item}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
          </v-layout>
        </v-container>


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
      showDetail: true,
      selectedCommander: {
        name: 'TEST NAME',
        class: 'TEST CLASS',
        banner: 'TEST BANNER',
        weapon: 'WEAPON',
        armor: 'ARMOR',
        accessory: 'ACCESSORY',
        skills: {
          set1: [
            'SKILL 1',
            'SKILL 2',
            'SKILL 3',
            'SKILL 4',
            'SKILL 5',
            'SKILL 6',
          ],
          set2: [
            'SET 1',
            'SET 2'
          ]
        }
      }
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
