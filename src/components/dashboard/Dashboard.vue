<template>
  <div class="dashboard">
    <!-- <div class="row">
      <div class="col-md-12">
        <vuestic-alert type="success" :withCloseBtn="true">
          <span class="badge badge-pill badge-success">SUCCESS</span>
          Thank you for loggin in!
          <i class="fa fa-close alert-close"></i>
        </vuestic-alert>
      </div>
    </div> -->

    <dashboard-info-widgets></dashboard-info-widgets>

    <vuestic-widget class="no-padding no-v-padding">
      <vuestic-tabs :names="['CURRENCIES', 'STATS', 'TRADES', 'SETTINGS']" ref="tabs">
        <div slot="CURRENCIES">
          <data-visualisation-tab></data-visualisation-tab>
        </div>
        <div slot="STATS">
          <users-members-tab></users-members-tab>
        </div>
        <div slot="TRADES">
          <setup-profile-tab></setup-profile-tab>
        </div>
        <div slot="SETTINGS">
          <features-tab></features-tab>
        </div>
      </vuestic-tabs>
    </vuestic-widget>

    <dashboard-bottom-widgets></dashboard-bottom-widgets>

  </div>
</template>

<script>
  import VuesticWidget from '../vuestic-components/vuestic-widget/VuesticWidget'
  import VuesticAlert from '../vuestic-components/vuestic-alert/VuesticAlert'
  import DashboardInfoWidgets from './DashboardInfoWidgets'
  import VuesticTabs from '../vuestic-components/vuestic-tabs/VuesticTabs.vue'
  import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
  import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
  import FeaturesTab from './features-tab/FeaturesTab.vue'
  import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'
  import DashboardBottomWidgets from './DashboardBottomWidgets.vue'

  export default {
    name: 'dashboard',
    components: {
      DataVisualisationTab,
      VuesticWidget,
      VuesticAlert,
      DashboardInfoWidgets,
      VuesticTabs,
      UsersMembersTab,
      SetupProfileTab,
      FeaturesTab,
      DashboardBottomWidgets
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/_variables.scss";
</style>
