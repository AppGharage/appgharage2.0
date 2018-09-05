<template>
  <div class="construction">
    <Navigation/>

    <div class="container" style="height: 80vh;">
        <div class="center-text">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12" style="font-size: 60px !important; text-align: center;">
                    <h1 class="leading-text">Webpage Under Construction!</h1>
                    <h4>AppGharage team is currently working on this page</h4>
                </div>            
            </div>
        </div>
    </div>



    <Footer/>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
  import Footer from '@/components/Footer'

export default {
  name: 'Construction',
  components: {
      Navigation,
      Footer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
            background-image: none !important;
        }
        
        .uk-navbar-nav li a {
            color: #000 !important;
            font-family: 'Comfortaa', cursive;
        }
        
        .uk-checkbox {
            /*visibility: hidden;*/
            height: 40px;
            width: 40px;
            margin: 0 !important;
            border: 0 !important;
            background-color: #eee;
            float: left;
        }
        
        .uk-card-body1 {
            margin: 0 !important;
            padding: 0 !important;
        }
</style>
