<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <h1 class="display-1 text-center">
            {{ album.name }}
          </h1>
          <h2 class="subtitle-1 text-center">
            {{ album.description_short }}
          </h2>
          <div class="text-center">
            <v-chip
              class="ma-2"
              color="primary"
              label
              text-color="white"
            >
              <v-icon left>mdi-label</v-icon>
              {{ album.count }} fotos neste álbum
            </v-chip>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <gallery :images="album.photos" :index="index" @close="index = null"></gallery>
        <v-col 
          cols="12" 
          md="3" 
          xs="12" 
          sm="12"
          class="image"
          v-for="(image, imageIndex) in album.photos"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')', width: '100%', height: '200px' }"
        >
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
  import VueGallery from 'vue-gallery'

  import { mapActions } from 'vuex'

  export default {
    components: {
      'gallery': VueGallery
    },
    data() {
      return {
        album: {
          photos: [],
          count: 0
        },
        dialog: false,
        index: null
      }
    },
    methods: {
      ...mapActions({
        getAlbumBySlugAction: 'album/getAlbumBySlug'
      })
    },
    mounted: function() {
      const slug = this.$route.params.slug

      this.getAlbumBySlugAction(slug)
        .then(response => {
          if (response == undefined) {
            this.$router.push({ path: '/pagina-nao-encontrada' })
            return false
          }
          
          this.album = response

          const images = []
          response.photos.forEach(image => {
            images.push(image.photo)
          })

          this.album.photos = images
          this.album.count = images.length
        })
        .catch(e => {
          this.$router.push({ path: '/pagina-nao-encontrada' })
          console.error(e.message)
        })      
    }
  }
</script>

<style>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
  }
  .image:hover {
    cursor: pointer;
  }
</style>