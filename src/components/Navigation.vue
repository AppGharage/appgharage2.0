<template>
  <div class="header">
        <div class="header" style="">
            <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
                <nav class="uk-navbar-container uk-margin uk-navbar mobile-navbar" uk-navbar="" style="padding-top: 20px; padding-bottom: 20px; padding-left: 6%; padding-right: 6%;">

                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <li>
                                <a href="/">
                                    <img class="logo" src="../assets/images/logos/logo.png" alt="" width="200px">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="uk-navbar-center">
                        <ul class="uk-navbar-nav main-nav">
                            <li>
                                <a href="#">Solutions</a>
                                <div class="uk-navbar-dropdown dd" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-justify;">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-10 col-lg-10">
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-6 col-lg-6">

                                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                                            <li class="uk-active"><a href="/design">Design</a></li>
                                                            <li>Create stunning visuals and experiences</li>
                                                        </ul>
                                                        <ul class="uk-nav uk-navbar-dropdown-nav" style="padding-top: 20px;">
                                                            <li class="uk-active"><a href="/construction">Development</a></li>
                                                            <li>Build a launch-ready product</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                                            <li class="uk-active"><a href="/prototyping">Prototyping</a></li>
                                                            <li>Test product concepts quickly</li>
                                                        </ul>
                                                        <ul class="uk-nav uk-navbar-dropdown-nav" style="padding-top: 20px;">
                                                            <li class="uk-active"><a href="/maintenance">Maintenance</a></li>
                                                            <li>Get ongoing development support</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-2 col-lg-2 nav-right-corner why">
                                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                                    <li class="uk-active why-title">Why AppGharage?</li>
                                                    <li>Top Talent</li>
                                                    <li>Dedicated Developers</li>
                                                    <li>Liquid Workforce</li>
                                                    <li>Verified Skills</li>
                                                    <li>Cost-eficient</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">Platform</a>
                                <div class="uk-navbar-dropdown dd" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-justify;">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-10 col-lg-10">
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-6 col-lg-6">

                                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                                            <li class="uk-active"><a href="/construction">Talent</a></li>
                                                            <li>Access a global network of elite knowledge workers</li>
                                                        </ul>
                                                        <ul class="uk-nav uk-navbar-dropdown-nav" style="padding-top: 20px;">
                                                            <li class="uk-active"><a href="/pricing">Pricing</a></li>
                                                            <li>Estimate cost of your custom software</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                                            <li class="uk-active"><a target="_blank" href="https://curriculum.appgharage.com/">Developer Curriculum</a></li>
                                                            <li>Experience a smarter development ecosystem</li>
                                                        </ul>
                                                        <ul class="uk-nav uk-navbar-dropdown-nav" style="padding-top: 20px;">
                                                            <li class="uk-active"><a target="_blank" href="https://blog.appgharage.com/">Blog</a></li>
                                                            <li>View our blog posts</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-2 col-lg-2 nav-right-corner">
                                                <ul class="uk-nav uk-navbar-dropdown-nav why">
                                                    <li class="uk-active why-title">Why AppGharage?</li>
                                                    <li>Top Talent</li>
                                                    <li>Dedicated Developers</li>
                                                    <li>Liquid Workforce</li>
                                                    <li>Verified Skills</li>
                                                    <li>Cost-eficient</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">Company</a>
                                <div class="uk-navbar-dropdown dd" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-justify;">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-10 col-lg-10">
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-6 col-lg-6">

                                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                                            <li class="uk-active"><a href="/about">About</a></li>
                                                            <li>Learn how we work and what we value</li>
                                                        </ul>
                                                        <ul class="uk-nav uk-navbar-dropdown-nav" style="padding-top: 20px;">
                                                            <li class="uk-active"><a href="/construction">Diversity</a></li>
                                                            <li>See our approach to building an open and inclusive team</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                                            <li class="uk-active"><a href="/construction">Careers</a></li>
                                                            <li>Join a team solving tough problems</li>
                                                        </ul>
                                                        <ul class="uk-nav uk-navbar-dropdown-nav" style="padding-top: 20px;">
                                                            <li class="uk-active"><a href="/pricing">Pricing</a></li>
                                                            <li>Work on interesting projects with smart people</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-2 col-lg-2 nav-right-corner">
                                                <ul class="uk-nav uk-navbar-dropdown-nav why">
                                                    <li class="uk-active why-title">Why AppGharage?</li>
                                                    <li>Top Talent</li>
                                                    <li>Dedicated Developers</li>
                                                    <li>Liquid Workforce</li>
                                                    <li>Verified Skills</li>
                                                    <li>Cost-eficient</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>

                    </div>
                    <div class="uk-navbar-right mobile-nav">
                        <ul class="uk-navbar-nav">

                            <a class="uk-navbar-toggle mobile-nav" style="display: none; margin-top: 24px;">
                                <span class="uk-margin-small-left">Menu</span> <span uk-navbar-toggle-icon></span>
                            </a>
                            <div class="uk-navbar-dropdown mobile" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-justify;">
                                <ul class="uk-nav uk-dropdown-nav">

                                    <li class="uk-nav-header">Solutions</li>

                                    <li><a href="/design">Design</a></li>
                                    <li><a href="/construction">Development</a></li>
                                    <li><a href="/prototyping">Prototyping</a></li>
                                    <li><a href="/maintenance">Maintenance</a></li>

                                    <li class="uk-nav-header">Platform</li>

                                    <li><a href="/construction">Talent</a></li>
                                    <li><a href="/pricing">Pricing</a></li>
                                    <li><a href="https://blog.appgharage.com/">Blog</a></li>
                                    <li><a href="https://curriculum.appgharage.com/">Developer Curriculum</a></li>

                                    <li class="uk-nav-header">Company</li>

                                    <li><a href="/about">About</a></li>
                                    <li><a href="/pricing">Pricing</a></li>

                                    <li class="uk-nav-divider"></li>
                                    <li><a href="/contact" class="uk-button uk-button-primary contact">Contact</a></li>
                                    <li class="uk-nav-divider"></li>
                                    <li><a href="#" class="uk-button uk-button-primary signin">Sign in</a></li>
                                </ul>
                            </div>

                        </ul>

                    </div>
                    <div class="uk-navbar-right main-nav">
                        <ul class="uk-navbar-nav">
                            <a href="#" class="uk-button uk-button-primary signin">Sign in</a>
                        </ul>

                    </div>
                </nav>

            </div>
        </div>

  </div>
</template>

<script>
export default {
  name: 'Navigation',
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
