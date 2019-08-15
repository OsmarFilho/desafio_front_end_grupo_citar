<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      comentary: {
        body: ''
      },
      status: '',
      error: ''
    }
  },
  methods: {
    ...mapActions({
      fetchItem: 'issue/fetchItem',
      fetchComments: 'issue/fetchComments',
      createComment: 'issue/createComment',
      lockIssue: 'issue/lockIssue',
      unlockIssue: 'issue/unlockIssue'
    }),
    issueStatus () {
      if (!this.openedIssue.locked) {
        console.log('lock', this.issueId)
        return this.lockIssue(this.issueId)
      } else {
        console.log('unlock', this.issueId)
        return this.unlockIssue(this.issueId)
      }
    },

    handleForm () {
      if (!this.openedIssue.locked) {
        this.createComment({ issueNumber: this.issueId, body: this.comentary })
          .then(res => {
            this.error = ''
            this.comentary.body = ''
          })
          .catch(error => {
            this.error = 'Por favor, escreva seu comentario!'
            console.log(error)
          })
      } else {
        this.error = 'Issue Trancada!'
      }
    }
  },
  computed: {
    ...mapGetters({ issues: 'issue/issues', issue: 'issue/issue', comments: 'issue/comments' }),
    hasList () {
      return this.issues.length > 0
    },
    openedIssue () {
      return (this.hasList ? this.issues.find(issue => issue === this.issueId) : this.issue) || {}
    },
    issueId () {
      return this.$route.params.id
    }
  },
  mounted () {
    if (!this.hasList) {
      this.fetchItem(this.issueId)
    }
    this.fetchComments(this.issueId)
  }
}

</script>
  <template>

    <form class="col-6  mx-auto" @submit.prevent="handleForm">
      <div class="card mt-3">
      <div class="card-header font-weight-bold bg-info">
        {{ (openedIssue || {}).title }}
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{{ ((openedIssue || {}).user || {}).login }}</p>
        </blockquote>
      </div>
    </div>
    <div class="card mt-3" v-for="(comentary, i) in comments" :key="i">
      <div class="card-header font-weight-bold">
        {{((openedIssue || {}).user || {}).login}}
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          {{(comentary || {}).body}}
        </blockquote>
      </div>
    </div>

    <div class="card mt-3">
      <textarea
        v-model="comentary.body"
        rows="6"
        style="resize: none"
        placeholder="Deixe um comentário"
      />
    </div>

    <div class="d-flex justify-content-end  mt-3">
      <div class="btn bg-light mr-2">
        <a @click="issueStatus()">{{!this.openedIssue.locked ? 'Close' : 'Reopen'}} issue</a>
      </div>
      <button class="btn btn-primary" type="submit">Comentar</button>
    </div>
    <div>
      <p>{{error}}</p>
    </div>
  </form>
</template >
