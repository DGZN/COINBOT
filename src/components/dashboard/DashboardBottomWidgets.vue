<template>
  <div class="row bottom-widgets">
    <div class="col-md-6 d-flex">
      <vuestic-widget class="no-h-padding no-v-padding">
        <vuestic-feed :initialPosts="posts"></vuestic-feed>
      </vuestic-widget>
    </div>
    <div class="col-md-6 d-flex">
      <vuestic-widget class="business-posts">
        <vuestic-social-news class="vuestic-social-news" :news="news" :url="'http://instagram.com/smartapant'"></vuestic-social-news>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  import VuesticWidget from '../vuestic-components/vuestic-widget/VuesticWidget'
  import VuesticFeed from '../vuestic-components/vuestic-feed/VuesticFeed.vue'
  import VuesticSocialNews from '../vuestic-components/vuestic-social-news/VuesticSocialNews.vue'

  export default {
    name: 'dashboard-bottom-widgets',
    components: {
      VuesticSocialNews,
      VuesticFeed,
      VuesticWidget
    },
    data () {
      return {
        posts: [
          {
            name: 'BTC Bot 1',
            text: 'has been trading for 12hrs',
            photoURL: ''
          },
          {
            name: 'BCH Bot 1',
            text: 'has been trading for 16hrs',
            photoURL: ''
          },
          {
            name: 'LTC Bot 1',
            text: 'has been trading for 22hrs',
            photoURL: ''
          }
        ],
        news: [

        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

  .bottom-widgets {
    > div[class^='col'] {
      & > div {
        width: 100%;
      }
    }
  }
</style>
