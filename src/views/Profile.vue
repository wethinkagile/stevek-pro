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
                                    <base-button disabled type="success" size="sm" class="mr-4">JavaScript</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">4</span>
                                        <span class="description">Fortune 500 Companies</span>
                                    </div>
                                    <div>
                                        <span class="heading">18</span>
                                        <span class="description">Years of Experience</span>
                                    </div>
                                    <div>
                                        <span class="heading">60+</span>
                                        <span class="description">Web Technologies</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Steve K.
                                <span class="font-weight-light">, 40</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Munich, Germany</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Cloud k8s/gcp/aws - Fullstack node/vue/angular</div>
                            <div><i class="ni education_hat mr-2"></i>Software Engineer (Dipl.)</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p class='stevek-ambient-dark'>
                                      I offer expertise in Software Engineering alongside the guidelines and rulesets of Scrum, SAFe, Kanban and Agile. I usually
                                      code for my clients in NodeJS, Angular, VueJS, React, TypeScript, RESTful APIs, Mongoose, Swagger, MongoDB, Python and Bash.
                                      <br><br>

                                      Operation Services I offer alongside best practices of DevOps and ITIL with AWS, GCE, Azure, CloudFoundry, Linux,
                                      Kubernetes, KubeDNS, RBAC, AWS IAM, Windows NTLM, SSL/TLS, DNSSEC.
                                      <br><br>

                                      Test Automation and CI/CD I accomplish for my clients with Selenium, Karma, Jasmine, Expect, Should, BrowserStack, Jenkins,
                                      Leapwork, GitHub, Codeship, Quay, CircleCI, DockerHub, Helm-Charts, Git Workflows, TDD and customised E2E Test Frameworks.
                                      </p>
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
