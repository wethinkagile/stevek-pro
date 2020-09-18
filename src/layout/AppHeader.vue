auncher<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/stevek-logo-white.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://stevek.pro">
                        <img src="img/brand/stevek-logo-magenta.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Expertise</span>
                    </a>
                    <div class="dropdown-menu-inner">
                       <!-- <a href="#"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                         </a>-->
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1"><router-link to="/landing">Elevator Pitch</router-link></h6>
                                <p class="description d-none d-md-inline-block mb-0"><router-link to="/landing"><i>Why I'm the right choice for your project</i></router-link></p>
                            </div>
                      <!--
                          <a href="#"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>

                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1"><router-link to="/forestai">Public APIs</router-link></h5>
                                <p class="description d-none d-md-inline-block mb-0"><router-link to="/forestai">Connecting the Post-COVID world
                                  through the contribution of our open APIs.</router-link></p>
                            </div>

                        </a>
                      -->
                    </div>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Insight</span>
                    </a>
                    <router-link to="/profile" class="dropdown-item">About Me</router-link>
                    <!--
                    <router-link to="/login" class="dropdown-item">Login</router-link>
                    <router-link to="/register" class="dropdown-item">Register</router-link>
                    -->
                </base-dropdown>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <!-- <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li> -->
                <!-- <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li> -->
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/stevek-pro"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star me on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="https://ln2.sync.com/dl/da8b647c0/2cz55shq-sg6gymfb-x9mitxra-tqq5diam" data-toggle="tooltip" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-download mr-2"></i>
                </span>
                <span class="nav-link-inner--text">CV</span></a>
                </li>
                  <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="https://ln2.sync.com/dl/b3f005a00/pydt3u5m-b9qi5rui-9wbi95tn-42794fuv" data-toggle="tooltip" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-download mr-2"></i>
                </span>
                <span class="nav-link-inner--text">References</span></a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
