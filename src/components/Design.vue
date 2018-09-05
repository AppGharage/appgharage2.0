<template>
  <div class="design">
    <Navigation/>

    <!-- Duplicate this div "section" for any block of design -->
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <div style="margin:50px 0px 100px 0px; text-align: center;">
                        <h1>
                            Design
                        </h1>
                        <h3>Our unique platform-optimized development model means higher quality, lower costs, and a better experience.</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End of block -->

    <div class="grey-section">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="design">
                        <h5 style="color: #19B5FE;">DESIGN</h5>
                        <div class="mission-heading">
                            <h2>
                                Based on designs we've done
                            </h2>
                            <p>See examples of our designs with different prices</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--End of design section-->
    <div class="section">
        <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
            <div class="row">
                <div class="core-team-images">
                    <div class="uk-child-width-1-3@m" uk-grid>

                        <div>
                            <div class="uk-card uk-card-default" style="min-height:263px">
                                <div class="uk-card-media-top">
                                    <img src="../assets/images/appgharage.png" a href="#modal-media-image" alt="" uk-toggle>
                                </div>
                                <div class="uk-overlay uk-overlay-default uk-position-bottom">
                                    <p href="#modal-media-image" uk-toggle><b>AppGharage</b></p>
                                </div>
                                <div id="modal-media-image" class="uk-flex-top" uk-modal>
                                    <div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button class="uk-modal-close-outside" type="button" uk-close></button>
                                        <img src="../assets/images/appg.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="uk-card uk-card-default" style="min-height:263px">
                                <div class="uk-card-media-top">
                                    <img src="../assets/images/inhealth.png" a href="#modal-media-image1" alt="" uk-toggle>
                                </div>
                                <div class="uk-overlay uk-overlay-default uk-position-bottom">
                                    <p href="#modal-media-image1" uk-toggle><b>InHealth</b></p>
                                </div>
                                <div id="modal-media-image1" class="uk-flex-top" uk-modal>
                                    <div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button class="uk-modal-close-outside" type="button" uk-close></button>
                                        <img src="../assets/images/inh.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="uk-card uk-card-default" style="min-height:230px">
                                <div class="uk-card-media-top">
                                    <img src="../assets/images/payment.png" a href="#modal-media-image2" alt="" uk-toggle>
                                </div>
                                <div class="uk-overlay uk-overlay-default uk-position-bottom">
                                    <p href="#modal-media-image2" uk-toggle><b>Ghana Payment Gateways</b></p>
                                </div>
                                <div id="modal-media-image2" class="uk-flex-top" uk-modal>
                                    <div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button class="uk-modal-close-outside" type="button" uk-close></button>
                                        <img src="../assets/images/payment.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
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
  name: 'Design',
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

</style>
