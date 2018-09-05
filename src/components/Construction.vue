<template>
  <div class="construction">
    <Navigation/>

    <!-- Duplicate this div "section" for any block of design -->
    <div class="section">

        <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="title">
                        <h1>
                            Contact Us
                        </h1>
                        <p style="font-size: 20px">Here are all the ways to connect with AppGharage.</p>
                    </div>
                </div>

                <!--Top Cards Start-->
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="row">
                        <div class="col-sm-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
                            <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
                                <div class="card">
                                    <div class="uk-card uk-card-default uk-card-body">
                                        <center>
                                            <div class="card-image" style="background-image: url('../static/assets/images/mail.svg');"></div>
                                        </center>

                                        <h3 class="card-title">Call or Email </h3>
                                        <p class="card-body-text">We are available immediately between 9am and 5pm GMT.</p>

                                        <a href="#" class="uk-button uk-button-primary signin" style="text-transform:lowercase">info@appgharage.com</a>

                                    </div>
                                </div>
                                <div class="card">
                                    <div class="uk-card uk-card-default uk-card-body">
                                        <center>
                                            <div class="card-image" style="background-image: url('../static/assets/images/chat.svg');"></div>
                                        </center>

                                        <h3 class="card-title">Chat</h3>
                                        <p class="card-body-text">Chat with us live between 9am and 5pm GMT </p>

                                        <a href="#" class="uk-button uk-button-primary signin">Talk </a>

                                    </div>
                                </div>
                                <div class="card">
                                    <div class="uk-card uk-card-default uk-card-body">
                                        <center>
                                            <div class="card-image" style="background-image: url('../static/assets/images/brainstorming.svg');"></div>
                                        </center>

                                        <h3 class="card-title">Meeting</h3>
                                        <p class="card-body-text">Schedule a meeting for a later time convenient for you.</p>

                                        <a href="#" class="uk-button uk-button-primary signin">Schedule </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Top Card ends here-->
            </div>

        </div>

        <!--Form section Start-->
        <div class="grey-section">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">

                        <div class="contact-title">
                            <div class="title">
                                <h4 style="color:#4596EA;">
                                    CONTACT
                                </h4>
                                <p style="font-size: 20px">Let us know how we can help</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" col-sm-12 col-md-12 col-lg-12 ">
                    <div class="row uk-margin">
                        <div class="col-sm-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 ">
                            <div class="uk-child-width-1-1 uk-grid-small uk-grid-match " uk-grid>

                                <div class="card ">
                                    <div class="uk-card uk-card-default uk-card-body">
                                        <form class="uk-grid-small" uk-grid>

                                            <label for="Fullname">Full Name</label>
                                            <div class="uk-width-1-1">
                                                <input class="uk-input uk-form-width uk-form-large" type="text" placeholder="Eg: John Doe">
                                            </div>

                                            <label for="email">Email</label>
                                            <div class="uk-width-1-1">
                                                <input class="uk-input uk-form-width uk-form-large" type="text" placeholder="Eg: john@gmail.com">
                                            </div>

                                            <label for="phone">Phone Number</label>
                                            <div class="uk-width-1-1">
                                                <input class="uk-input uk-form-width uk-form-large" type="text" placeholder="Eg: 054xxxxxx">
                                            </div>

                                            <label for="company">Company</label>
                                            <div class="uk-width-1-1">
                                                <input class="uk-input uk-form-width uk-form-large" type="text" placeholder="Eg: John Tech">
                                            </div>

                                            <label for="country">Country</label>
                                            <div class="uk-width-1-1">
                                                <input class="uk-input uk-form-width uk-form-large" type="text" placeholder="Eg: Ghana">

                                            </div>

                                            <label for="topic">What would you like to talk about?</label>
                                            <div class="uk-width-1-1">
                                                <textarea rows="5" class="uk-textarea uk-form-width uk-form-large"></textarea>
                                            </div>

                                            <div>
                                                <button class="uk-button uk-button-primary uk-box-shadow-large" style="border-radius:5px; background-color:#4596EA">Submit</button>

                                            </div>


                                        </form>
                                    </div>
                                </div>


                            </div>


                        </div>

                    </div>
                </div>

            </div>

        </div>

        <!--Form Section End-->
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

</style>
