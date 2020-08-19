<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/team-5-800x800.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button disabled type="info" size="sm" class="mr-4">Linux</base-button>
                                    <base-button disabled type="default" size="sm" class="mr-4">K8S</base-button>
                                    <base-button disabled type="success" size="sm" class="mr-4">JS</base-button>
                                    <base-button disabled type="secondary" size="sm" class="float-right">Cloud</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">22</span>
                                        <span class="description">Friends</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">Photos</span>
                                    </div>
                                    <div>
                                        <span class="heading">89</span>
                                        <span class="description">Comments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Steve K.
                                <span class="font-weight-light">, 40</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Munich, Germany</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Fullstack node/vue/angular - Cloud DevOps k8s/cncf/aws</div>
                            <div><i class="ni education_hat mr-2"></i>Software Engineer (Dipl.)</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>An engineer of considerable range, Steve — the name taken by Baden-raised, Munich-based Stephan Kristyn — codes, scrumifies and publishes all of his own software, giving it a pristine test coverage, blazing performance with a solid ahead-looking architecture.</p>
                                    <!--<a href="#">Show more</a>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
export default {};
</script>
<style>
</style>
