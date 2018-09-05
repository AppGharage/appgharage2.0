<template>
  <div class="about">
    <Navigation/>

    <!-- Duplicate this div "section" for any block of design -->
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <div style="margin: 50px 0px 100px 0px;">
                        <h1 style="text-align: center;">
                            About
                        </h1>

                        <p style="padding: 10px 0px 50px 0px; font-size: 20px; text-align: center;">
                            AppGharage is a service that vets the skills of software developers and designers to create the optimal team for your business or project.
                        </p>

                        <div class="mission">
                            <h5 style="color: #19B5FE;">MISSION</h5>
                            <div class="mission-heading">
                                <h2>
                                    AppGharage is the world’s design crib
                                </h2>
                            </div>
                            <div class="mission-blurb">
                                <div class="row">
                                    <div class="col-lg-6 col-sm-12">
                                        <P style="font-size: 16px;">
                                            Software is an essential tool for every business in the world, yet most don’t have access to quality development at a reasonable cost. We aim to put a software development team in everyone’s pocket.
                                        </P>
                                        <P style="font-size: 16px;">
                                            Businesses with access to custom software or highly motivated and loyal developers have thousands of times more leverage than those without. We believe that by democratizing access to great software or developers and designers we can increase the pace
                                            of human evolution.
                                        </P>
                                    </div>
                                    <div class="col-lg-6 col-sm-12">
                                        <p style="font-size: 16px;">
                                            The nature of work is changing and we are at the forefront of this seismic shift.
                                        </p>
                                        <p style="font-size: 16px;">
                                            We are building the largest pool of exceptional developers, designers, and product managers exclusively from Africa and partnering them with businesses and startups, with a rich working environment. We are just getting started.
                                        </p>
                                    </div>
                                </div>
                                <p>

                                </p>
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
  name: 'About',
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
        
        .uk-checkbox1 {
            background-color: #19B5FE;
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
