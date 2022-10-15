<template>
    <footer class="footer has-cards">
        <!-- <div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/theme/landing.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 mb-5 mb-lg-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/profile" title="Profile Page">
                            <img v-lazy="'img/theme/profile.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">SRE is what happens when you ask a software engineer to design an operations team.</h3>
                    <h4 class="mb-0 font-weight-light stevek-dark">- <a href="https://en.wikipedia.org/wiki/Site_Reliability_Engineering" target="_blank">Ben Treynor</a></h4>
                </div>

                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <div style='margin-left:70px'>
                        <a target="_blank" rel="noopener" href="https://stackoverflow.com/users/356759/steve-k?tab=profile"
                        class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                        data-original-title="Follow us">
                            <i class="fa fa-stack-overflow"></i>
                        </a> 
                        <a target="_blank" rel="noopener" href="https://github.com/stevek-pro"
                        class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                        data-original-title="Star on Github">
                            <i class="fa fa-github"></i>
                        </a> 
                   </div>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="/#/profile" target="_self" rel="noopener">Stephan Kristyn.</a> 81545 München, Deutschland.
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <router-link to="/imprint"> class="nav-link" target="_blank" rel="noopener">Imprint</router-link>
                        </li>
                        <li class="nav-item">
                            <a href="/#/profile" class="nav-link" target="_self" rel="noopener">About
                                Me</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://raw.githubusercontent.com/stevek-pro/kube-client-micro/master/LICENSE"
                               class="nav-link" target="_blank" rel="noopener">MIT License</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
// I had no dreams of such economic success. You should have fun and not be so weighed down by expectations.
// -  Sergey Brin
//
// We are stuck with technology when what we really want is just stuff that works.</h3>
// - Douglas Adams
//
// It's fine to celebrate success but it is more important to heed the lessons of failure.
// - Bill Gates
//
// Innovation distinguishes between a leader and a follower.
// - Steve Jobs

// SRE is what happens when you ask a software engineer to design an operations team.


export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
