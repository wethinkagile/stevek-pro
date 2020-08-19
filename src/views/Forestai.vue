<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">Forest AI
                                    <span>Machine Trained Trading</span>
                                </h1>
                                <p class="lead  text-white">Behavioral Trading Intelligence for Blockchain, applying Elliott Wave and Dow Theory.</p>
                                <router-link to="/interface" class="btn-wrapper">
                                    <base-button class="mb-3 mb-sm-0"
                                                 type="info"
                                                 icon="fa fa-eercast">
                                        Open Interface
                                    </base-button>
                                </router-link>

                                    <!-- <base-button tag="a"
                                                 href="https://www.creative-tim.com/product/argon-design-system"
                                                 class="mb-3 mb-sm-0"
                                                 type="white"
                                                 icon="fa fa-handshake-o">
                                        Request Access
                                    </base-button> -->

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
