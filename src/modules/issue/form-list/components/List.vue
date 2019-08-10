<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions({ fetchIssues: 'issue/fetchIssues' })
  },
  computed: {
    ...mapGetters({ issues: 'issue/issues' })
  },
  mounted () {
    this.fetchIssues()
  }
}
</script>
<template>

    <div class="col-6  mx-auto">
    <router-link :to="'/issue/' + issue.number" class="card mt-3" v-for="(issue, i) in issues" :key="i">
      <div class="card-header font-weight-bold">
        {{ issue.title }}
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{{ issue.user.login }}</p>
        </blockquote>
      </div>
    </router-link>
  </div>
</template>
