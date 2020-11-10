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
                                        <img v-lazy="'img/theme/team5-web.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button disabled type="danger" size="sm" class="mr-4" style='margin-bottom:10px'>Linux LPI Certified</base-button>
                                    <base-button disabled type="info" size="sm" class="mr-4" style='margin-bottom:10px'>Certified</base-button>
                                    <base-button disabled type="success" size="sm" class="mr-4" style='margin-bottom:10px'>EX-MICROSOFT</base-button>
                                    <!--
                                     <base-button disabled type="default" size="sm" class="mr-4" style='margin-bottom:10px'>VERIFIED</base-button>
                                    -->
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
                                        <span class="description">Web and InfraOps Technologies</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Stephan K.
                                <span class="font-weight-light">, 40</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>München, Germany</div>
                            <div><i class="ni education_hat mr-2"></i>Consultant (Fullstack/Cloud/K8s/OpenShift)</div>
                            <div class="mt-4"><i class="ni business_briefcase-24 mr-2"></i>
                            <!--
                            <b>Cloud</b>: K8s GCP AWS Git Jenkins Helm Quay DockerHub<br /><br /> OpenShift Dynatrace Grafana Prometheus Kafka <br /><br />
                            <b>Fullstack</b>: Node Python Go C# Java DNS TCP/IP <br /><br />
                            <b>Web</b>: Vue Angular React Bootstrap Sass <br /><br />
                            -->
                            </div>
                        </div>
                        <div class="mt-5 py-5 border-top text-left">
                            <div class="row justify-content-center">
                                <div class="col-lg-9 stevek-dark">
                                    
                                        <!-- This goes into CV Section..
                                        I offer expertise in Software Engineering alongside the guidelines and rulesets of Scrum, SAFe, Kanban and Agile. I usually
                                        code for my clients in NodeJS, Angular, VueJS, React, TypeScript, RESTful APIs, Mongoose, Swagger, MongoDB, Python and Bash.
                                        <br><br>

                                        Operation Services I offer alongside best practices of DevOps and ITIL with AWS, GCE, Azure, CloudFoundry, Linux,
                                        Kubernetes, KubeDNS, RBAC, AWS IAM, Windows NTLM, SSL/TLS, DNSSEC.
                                        <br><br>

                                        Test Automation and CI/CD I accomplish for my clients with Selenium, Karma, Jasmine, Expect, Should, BrowserStack, Jenkins,
                                        Leapwork, GitHub, Codeship, Quay, CircleCI, DockerHub, Helm-Charts, Git Workflows, TDD and customised E2E Test Frameworks.
                                        -->
                    
                                        <h2>
                                        Current location/time zone?
                                        </h2>
                                        <p>
                                        The TimeZone here is <a href="https://www.timeanddate.com/worldclock/germany/munich" target='_blank'>UTC+2</a>.
                                        I was born and raised in Heidelberg and moved near the Alps, in 2005. I am now based in Munich, Bavaria. 
                                        </p>


                                        
                                        <h2>
                                        What do you do for your clients?
                                        </h2>
                                        <p class="stevek">
                                        I’m lucky to know enough about Networks and the Web now, to call myself a Site Reliability Engineer. 
                                        This encompasses <b>Full Stack Web Development</b> and on the other side SRE means you have the responsibily of making production the best it possibly can be.
                                        An SRE is the <b>gatekeeper of production</b>.
                                        <br><br>
                                        
                                        A Site Reliability Engineer wears a number of hats: On an average day I fix bugs or refactor an API that has become unreliable, or you could be 
                                        planning with your team or having a <b>Infrastructure discussion with the CTO</b>. It is <b>crucial to liaise with Software Engineers, Testers and Ops</b> to ensure 
                                        all project-related needs are accounted for so that a Client's <b>Continuous Delivery Infrastructure</b> can continue to grow.
                                        I became motivated to step up from being a SE to being a SRE after leading a small Ops team of 3 in my last project, 
                                        which helped me fully understand the <b>collaborative potential</b> when 
                                        <a href="https://dzone.com/articles/what-is-devops-the-beginners-guide" target="_blank">Product Design, Development, Testing and Ops unify</a> their unique Software delivery efforts to create a truly automatic pipeline and not just automation. 
                                        <b>This is what we call DevOps 2.0</b>. 
                                        </p>

                                                                        <h2>
                                        What is the first thing you do after a fresh Linux OS install?
                                        </h2> 
                                        <p>
                                        My GitHub handle is <a href="https://github.com/stevek-pro" target='_blank'>stevek-pro</a> and the first 
                                        thing I usually type in after a fresh Linux Install, especially with Microsoft's Linux Kernel, is <b>PS1='\u:\W\$ '</b>.
                                        </p>

                                        <h2>
                                        What open source projects do you contribute to?
                                        </h2> 
                                        <p>
                                        I’ve contributed to the UX/UI of the Gnome Project and KDE Plasma. I’ve also been working on an algorithm for <a href='httsp://eos.io'>EOSIO</a> for over a year now. 
                                        It's written in NodeJS. A demo will come soon enough. I am also <b>contributing</b> to the <a href="https://www.cncf.io/blog/2019/12/16/kubernetes-101/" target='_blank'>CNCF Kubernetes Project</a>.
                                        </p>

                                        <h2>
                                        What do you like to do in your free time?
                                        </h2> 
                                        <p>
                                        I’m an avid fan of games, be it board-, video- or tabletop RPGs. I'm also a baker in our household, 
                                        so I like to experiment in the kitchen with new ideas and appliances. Finally I’m a very keen Alpinist, although I wasn’t able 
                                        to enjoy a lot of my outdoor hobby this year to to the COVID-19 crisis cluster.
                                        </p>
                                        
                                        <h2>
                                        What’s your favorite new gadget or tech toy?
                                        </h2> 
                                        <p>
                                        I’ve just got a set of new keys for the <a href='https://hhkeyboard.us/' target='_blank'>Happy Hacking Keyboard</a>, 
                                        which is made by Fujitsu and the M.I.T., where I recently did an interesting Management Course.

                                        I’ve been collecting various keys, switches and do other modifications that involve soldering.
                                        The only problem is we’re now running low on key lube, as I’ve been lubing all our Switches so much! 
                                        </p>
                                        
                                        <h2>
                                        What do you do to get "in the zone" when you work?
                                        </h2> 
                                        <p>
                                        A Site Reliability Engineer usually codes Software more than 50% of his time. We Software Engineers
                                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6208645/" target='_blank'>avoid repetition</a>. Software Engineers can't stand repetitive tasks, thus when thrown at with 
                                        slow, repetitive and manual processes in a Software Delivery Pipeline, Software Engineers tend to automate these processes, because building automatons that abstract difficulty away from the human is what we Software Engineers do.
                                        <br><br>

                                        The rest of the time I usually do supportive and consulting tasks, solve pressing issues, often in production. 
                                        A Sprint went well when we didn't encounter the same problem twice. 
                                        </p>

                                        <h2>
                                        What’s the best part of your job?
                                        </h2> 
                                        <p>
                                        Being able to talk to lots of interesting clients about their opinions and expertise about Web Technologies or Container Orchestration, 
                                        and being able to suggest ways to help them and make their professional lives better. 
                                        It’s a great feeling to help a client solve their issues!
                                        </p>

                                        <h2>
                                        What’s your favorite food?
                                        </h2> 
                                        <p>
                                        As long as its spicy and from Asia, I'm in.
                                        </p>

                                        <h2>
                                        What’s the last thing you read?
                                        </h2> 
                                        <p>
                                        From Carl Sagan, "Dragons of Eden", also the DevOps Handbook by <a href='https://itrevolution.com/' target='_blank'>IT Revolution</a>.
                                        </p>

                                        <!--(hey I shall code a moce pop-over here soon)
                                        PopUp Content: 'Claudio Naranjo ist ein gefragter Referent und Seminarleiter bei verschiedenen internationalen Gesellschaften für Humanistische und Transpersonale Psychologie. Er ist Hauptredner mehrerer nationaler und internationaler Gestaltkonferenzen und ein international renommierter Wissenschaftler und Redner.' (Mhh.. let me code some kind of Zeppelin Compatible Multi Language i18n Process here soon, shall I? I ought to, riiiight?)
                                        -->

                                        <h2>
                                        What superpowers do you wish you had (or do you have!)?
                                        </h2>
                                        <p> 
                                        Make IT sustainable and CO2-free, worldwide.
                                        </p>
                                        
                                        <h2>
                                        What’s the last thing you’ve gotten off your bucket list?
                                        </h2>
                                    
                                        <p>
                                        Getting <a href="https://ghost.org/" target='_blank'>Ghost</a> to run Serverless was a really interesting problem to solve. 
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
