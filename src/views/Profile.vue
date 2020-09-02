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
                            <div><i class="ni education_hat mr-2"></i>Site Reliability Engineer</div>
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
                                        I was born and raised in Heidelberg and moved near the Alps, in 2005. I am now based in Munich, Bavaria. The TimeZone is UTC+2.
                                        </p>

                                        <h2>
                                        What is your GitHub handle?
                                        </h2> 
                                        <p>
                                        My GitHub handle is <a href="https://github.com/stevek-pro" target='_blank'>stevek-pro</a>.
                                        </p>
                                        
                                        <h2>
                                        What do you do for your clients?
                                        </h2>
                                        <p>
                                        I’m lucky enough to be a Site Reliability Engineer. This encompasses Full Stack Web Development in various languages like VueJS, Angular, React and NodeJS, 
                                        Scala or Go on the BackEnd. On the other side SRE encompasses the responsibily of production and making it the best it possibly can be. We are the gatekeepers
                                        of production.
                                        <br><br>
                                        
                                        I'm a customer customer-facing engineer who partners with CTOs and Team Managers to determine the requirements and pain that potential developers or customer 
                                        is going through, then identify ways that me and the tool stack I bring can remove that pain. 
                                        <br><br>

                                        A Site Reliability Engineer wears a number of hats: An average day might see you do bugfix an API that has become unreliable, or you could be 
                                        talking to with the CTO and run a Infrastructure Demo on a new tool you want to build with your team; 
                                        liaising with the Software Engineering and DevOps teams to ensure 
                                        that additional feature requests are gathered and more issues resolved; or working on honing your presentation skills in a Dev Talk in the
                                        afternoon. 
                                        <br><br>

                                        I became greatly motivated to join the Linux Foundation Certification System after using Kubernetes, Prometheus, Elastic, Grafana, Loki
                                        whilst leading a small DevOps team of 3 in my last project,
                                        which helped me fully understand their potential! This was my first true SRE role, having been a Full Stack Web Ninja and Software Architect 
                                        for over two decades, and I’m really enjoying it.
                                        </p>

                                        <h2>
                                        What open source projects do you contribute to?
                                        </h2> 
                                        <p>
                                        I’ve contributed to the UX/UI of the Gnome Project and KDE Plasma. I’ve also been working on an Algorithm for <a href='httsp://eos.io'>EOSIO</a> for over a year now. 
                                        I hope to be profitable with it soon. I can't tell any specifics about it, but it's written in NODE.JS. I will make a FrontEnd Demo connected to the API service of my 
                                        system available on this web site soon enough.
                                        </p>

                                        <h2>
                                        What do you like to do in your free time?
                                        </h2> 
                                        <p>
                                        I’m an avid fan of games, be it board, video or tabletop RPG, but I also enjoy outdoor activities and hanging with my family. We have avid cooks in our household, 
                                        so I like to experiment in the kitchen with new ideas, appliances, literature and Vlogs. Finally I’m a very keen Alpinist (Mountaineer), although I wasn’t able 
                                        to enjoy a lot of my hobby this year to to the COVID-19 crisis cluster.
                                        </p>
                                        
                                        <h2>
                                        What’s your favorite new gadget or tech toy?
                                        </h2> 
                                        <p>
                                        I’ve just bought a new key for the <a href='https://hhkeyboard.us/' target='_blank'>Happy Hacking Keyboard</a>, which is made by Fujitsu and the MIT/Harvard, where I recently did a very enlightening Management Course.
                                        <br><br>

                                        I’ve been collecting various keys, switches and soldering mods aka electical engineering for a few months now
                                         and having become pretty good at it, 
                                        I finally decided to take the plunge and get a keyboard that would let me up my game. 
                                        <br><br>

                                        The only problem is we’re now I'm running out of Kryotech Lube, as I’ve been lubing all our Switches so much! 
                                        <!--
                                        (also the lube ingredients are illegal to be manufactured in the EU, which means coding on my even newer Leopold Keyboard Acquirement
                                        will be a *beep* blast! (Heck I ought do a Vlog about it here soon!)
                                        -->
                                        </p>
                                        
                                        <h2>
                                        What do you do to get “in the zone” when you work?
                                        </h2> 
                                        <p>
                                        A Site Reliability Engineer usually codes Software more than 50% of his time. We Software Engineers
                                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6208645/" target='_blank'>avoid repetition</a>, we can't stand it (all humans can't), thus when thrown at with Infrastructure and 
                                        manual, slow and repetetive processes, we tend to automate them away. 
                                        <br><br>

                                        The rest of the time I usually do On Call, Supportive and Consulting tasks, pressing issue, sometimes production. 
                                        A Sprint went well when I didn't encounter the same problem twice. 
                                        </p>

                                        <h2>
                                        What’s the best part of your job?
                                        </h2> 
                                        <p>
                                        Being able to talk to lots of interesting people about their infrastructure and architectures, 
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
                                        From Sagan, "Dragons of Eden". I currently also read Naranjo, Darwin and the DevOps Handbook by <a href='https://itrevolution.com/' target='_blank'>IT Revolution</a>.
                                        </p>

                                        <!--(hey I shall code a moce pop-over here soon)
                                        PopUp Content: 'Claudio Naranjo ist ein gefragter Referent und Seminarleiter bei verschiedenen internationalen Gesellschaften für Humanistische und Transpersonale Psychologie. Er ist Hauptredner mehrerer nationaler und internationaler Gestaltkonferenzen und ein international renommierter Wissenschaftler und Redner.' (Mhh.. let me code some kind of Zeppelin Compatible Multi Language i18n Process here soon, shall I? I ought to, riiiight?)
                                        -->

                                        <h2>
                                        What superpowers do you wish you had (or do you have!)?
                                        </h2>
                                        <p> 
                                        Heal those in need and sponser legislation that reforms the democratic process.
                                        </p>
                                        
                                        <h2>
                                        What’s the last thing you’ve gotten off your bucket list?
                                        </h2>
                                    
                                        <p>
                                        Getting <a href="https://ghost.org/" target='_blank'>Ghost 2.0</a> to run on Serverless is what was a really interesting problem to solve. 
                                        Also I heard folks at <a href='https://cloud.google.com/community/tutorials/ghost-on-app-engine-part-1-deploying'
                                         target="_blank">GCP</a> were successful.
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
