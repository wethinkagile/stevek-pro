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
                                    <base-button disabled type="primary" size="sm" class="float-right">Agility</base-button>
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
                                        <span class="description">Years Experience</span>
                                    </div>
                                    <div>
                                        <span class="heading">100</span>
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
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Cloud DevOps k8s/cncf/aws - Web Fullstack node/vue/angular</div>
                            <div><i class="ni education_hat mr-2"></i>Software Engineer (Dipl.)</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p class='stevek-ambient'>
                                      I did the complete IT-Infrastructure of 40 membered team by hyper-dockerisation and turbo shifted all Apps to Kubernetes,
                                      the CNCF-Toolstack and the usual CI/CD Pipelines until production and GO-LIVE done with Jenkins,
                                      Gitlab, GitHub, Codeship, Quay, CircleCI, DockerHub and Helm-Chart Repositories.
<br><br>
                                      In Cloud Native based PaaS Cloud Systems like CloudFoundry, AWS, GCE or Azure I am hereby steadfast.
                                      Since more than 10 years I develop professionaly by proven Test- and Integrations concepts
                                      like Git Workflow, TDD, E2E Test Frameworks.

<br><br>
                                      Test-Automation itself I designed in OOPed Python, coded
                                       with team members a in House owned E2E-Testframework with Selenium, Python, SSH, Jenkins, Leapwork, Atlassian BitBucket and Selenium.
                                       The Training of the insurance agents and experts within the DevOps-Workflow and the E2E-Testautomatisierung was owned by me.
<br><br>
                                      I offer knowledge in Software Engineering along the guidelines and rulesets of Scrum, SAFe, Software Release Management with DevOps,
                                      ITIL (if must) and the security concept with Kubernetes Namespaces, Secrets, DNS, RBAC, AWS IAM, Windows NTLM can be accomplished and multiplied
                                      in-team through XP and other software development processes.
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
