<template>
  <q-page class="relative-position">
     <q-scroll-area class="absolute full-width full-height">
        <div class="q-py-lg q-px-md row items-end
        q-col-gutter-md">
          <div class="col">
              <q-input 
                  class="new-tweet"
                  bottom-slots 
                  v-model="newTweetContent" 
                  placeholder="What's happening?" 
                  counter 
                  maxlength="280"
                  autogrow
                  >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://i.pinimg.com/originals/dd/88/18/dd881804b3c9419e03883b83c40cb407.jpg">
              </q-avatar>
            </template>

          </q-input>
          </div>
          <div class="col col-shrink">
            <q-btn 
            @click="addNewTweet"
              :disable="!newTweetContent"
              class="q-mb-lg"
              unelevated 
              rounded 
              no-caps
              color="primary" 
              label="Tweet" />
          </div>
        
          </div>
            <q-separator 
            class="divider"
            size="10px" 
            color="grey-2"/>

            <q-list separator>
            <transition-group
              appear
              enter-active-class="animated fadeIn slow"
              leave-active-class="animated fadeOut slow"
            >
              <q-item 
              v-for="tweet in tweets"
              :key="tweet.id"
              class="q-py-md">
                <q-item-section avatar top>
                  <q-avatar size="xl">
                    <img src="https://i.pinimg.com/originals/dd/88/18/dd881804b3c9419e03883b83c40cb407.jpg">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-subtitle1">
                    <strong>Debamita Saha</strong>
                    <span class="text-grey-7">
                        @debamita__saha 
                        <br class="lt-md"> &bull; {{ formattedDate(tweet.date) }}
                    </span>
                    </q-item-label>


                  <q-item-label >
                    <div class="tweet-content text-body1">             
                    <pre> {{tweet.content}}</pre>
                    </div>

                  </q-item-label>

                  <div class="tweet-icons row justify-between q-mt-sm">
                        <q-btn 
                        flat 
                        round 
                        color="grey" 
                        size="sm"
                        icon="fa-regular fa-comment" />

                        <q-btn 
                        flat 
                        round 
                        color="grey" 
                        size="sm"
                        icon= "fa-solid fa-retweet" />

                        <q-btn 
                        @click="toggleLiked(tweet)"
                        flat 
                        round 
                        :color= "tweet.liked ? 'pink' : 'grey'"
                        :icon= "tweet.liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"
                        size="sm"
                         />
                        
                        
                        <q-btn 
                        @click="deleteTweet(tweet)"
                        flat 
                        round 
                        color="grey" 
                        size="sm"
                        icon="fa-solid fa-trash" />
                  </div>
                  
                </q-item-section>

              
              </q-item>
        
          </transition-group>
          </q-list>
      </q-scroll-area>
        </q-page>
      </template>

<script>
import { collection, query, onSnapshot, updateDoc } from "firebase/firestore"
import { orderBy, addDoc, doc, deleteDoc } from "firebase/firestore";  
import { db } from 'src/boot/firebase'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHome',
  data() {
    return {
        newTweetContent: '',
        tweets: [
//           {
//             id: 'ID1',
//             content: 
// `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

// Praesent egestas imperdiet eros. Proin dui lorem, tempus at magna ac, commodo elementum quam.`,
//             date: 1653172691997,
//             liked: false
//           },
//            {
//              id: 'ID2',
//             content: 
// `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

// Praesent egestas imperdiet eros. Proin dui lorem, tempus at magna ac, commodo elementum quam. `,
//             date: 1653172902913,
//             liked: true
//           },
        ]
    }
  }
  ,
  methods: {
    formattedDate(date) {
      return new Date(date).toLocaleString('en-US', { timeZone: 'America/New_York' })
    },
    addNewTweet() {
      let newTweet = {
        content: this.newTweetContent,
        date: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
        liked: false
      }
      
      async function addTweet() {
      const docRef = await addDoc(collection(db, "tweets"), {
        content: newTweet.content,
        date: newTweet.date
      });
      }

      addTweet();
  
      this.newTweetContent = ''
    },
    deleteTweet(tweet) {
      async function deleteNewTweet() {
      await deleteDoc(doc(db, "tweets", tweet.id));
    }
    deleteNewTweet();

    },
    toggleLiked(tweet) {
      const washingtonRef = doc(db, "tweets", tweet.id);

       async function toggledLikeTweet() {
        await updateDoc(washingtonRef, {
          liked: !tweet.liked
          
        });
       }
        toggledLikeTweet();
    } 
},
  mounted() {
          

const q = query(collection(db, "tweets"), orderBy("date"));
const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    let tweetChange = change.doc.data()
    tweetChange.id = change.doc.id
    if (change.type === "added") {
        this.tweets.unshift(tweetChange)
    }
    if (change.type === "modified") {
        let index = this.tweets.findIndex(tweet => tweet.id === tweetChange.id)
        Object.assign(this.tweets[index], tweetChange)
    }
    if (change.type === "removed") {
        let index = this.tweets.findIndex(tweet => tweet.id === tweetChange.id)
        this.tweets.splice(index, 1)
    }
  });
});
  }
})
</script>

<style lang="sass">
.new-tweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider 
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
pre
  margin: 0
  white-space: pre-line
.tweet-icons 
  margin-left: -5px
</style>