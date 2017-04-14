<!DOCTYPE html>
<html>
  <head>
    <title>Judd Franklin:: Web Developer, Santa Monica, CA</title>
    <link href="https://fonts.googleapis.com/css?family=Archivo+Black|Source+Serif+Pro" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/css/tether.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" integrity="sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi" crossorigin="anonymous">
    <?php echo file_get_contents(__DIR__.'/css/current-stylesheet.html'); ?>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville|Work+Sans" rel="stylesheet">
    <!-- dev icon set from http://devicon.fr/ -->
    <link rel="stylesheet" href='https://cdn.jsdelivr.net/devicons/1.8.0/css/devicons.min.css' rel='stylesheet'>



  </head>
  <body id="top" data-spy="scroll" data-target="#skills-nav" data-offset="55">
    <header>
      <nav class="navbar navbar-fixed-top navbar-master main-nav col-sm-12">
        <div class="container">
          <div class="row">
            <a class="navbar-brand" href="#top">Judd Franklin</a>
            <ul class="nav navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#top">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <p class="float-xs-right text-xs-right hidden-md-up mobile-button-wrap">
              <button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">skills</button>
            </p>
          </div>
        </div>
      </nav>
    </header>
    <div class="row">
      <div class="banner-block card">
        <div class="card-content container">
          <h1>I code for people, not computers.</h1>
          <h5>Work with someone who never forgets the people involved at every stage in the process.</h5>
        </div>
      </div>
    </div>
    <section class="main-section container">
      <div class="row row-offcanvas row-offcanvas-right hidden-xs">
        <div class="col-xs-6 col-md-3 push-md-9 sidebar-offcanvas">
          <div class="nav" id="skills-nav">
            <li class="nav-item"><a href="#top" class="nav-link">Overview</a></li>
            <li class="nav-item"><a href="#interfaces" class="nav-link">Interfaces</a></li>
            <li class="nav-item"><a href="#cms" class="nav-link">Content Management</a></li>
            <li class="nav-item"><a href="#frameworks" class="nav-link">Frameworks</a></li>
            <li class="nav-item"><a href="#server-side" class="nav-link">Server-Side</a></li>
            <li class="nav-item"><a href="#version-control" class="nav-link">VCS</a></li>
          </div>
        </div>
        <div class="main-content-column col-md-9 pull-md-3">
          <article id="overview">
            <div class="anchor-wrapper">
              <h2>Code is created by people</h2>

              <p>I build and help teams build websites using Javascript, HTML, CSS, and the appropriate back-end language of a given project.</p>

              <p>I want the business, the users, the coders, and the marketing team to get the most from my work.</p>

              <p>That means leading through code, advocating best practices, learning, and open communication between stakeholders.</p>

              <blockquote class="card">
                <div class="card-block">
                  <h3 class="card-title">Above all, I strive to fulfill the desires of the stakeholders.</h3>
                </div>
              </blockquote>

            </div>
          </article>
          <article id="interfaces">
            <div class="anchor-wrapper">
              <h2>Interfaces</h2>

              <p>Building websites for a living, means that I build interfaces that I expect people to use on a wide range of devices.</p>

              <p>My goal is always clean code because that means that <em>the people</em> maintaining, generating, or viewing the interfaces will live more satisfying lives.</p>

              <p>That means intentional tagging, consistent conventions, limited node-depth, and clean integration with libraries, frameworks, scripts, and microdata formats.</p>

              <blockquote class="card">
                <div class="card-block">
                  <h3 class="card-title">Interface technologies used</h3>
                  <ul class="card-content">
                    <li><i class="devicons devicons-html5"></i> HTML5, HAML, Handlebars, ERB, custom attributes, Smarty, partials...</li>
                    <li><i class="devicons devicons-css3"></i> CSS3, <i class="devicon-sass-original"></i> SASS/SCSS, etc.</li>
                    <li><i class="devicons devicons-jquery"></i> jQuery, <i class="devicons devicons-angular"></i> Angular 1, Angular 2, <i class="devicons devicons-react"></i> ReactJS, videoJS, Custom JS libraries, vanilla JS</li>
                  </ul>
                  <h4>Example Work</h4>
                  <p><a href="http://mammothmoutain.com">mammothmountain.com</a> was built in sitefinity, using C# templating. Elements were modular, and reused across many pages and sites under the Mammoth banner.</p>
                </div>
              </blockquote>
            </div>
          </article>
          <article id="cms">
            <div class="anchor-wrapper">

              <h2>Content Management</h2>

              <p>Handing off work to collaborators who don't know code can be nerve-wracking.</p>

              <p>Sometimes work doesn't easily translate to English, but usually it just takes a bit of extra work to make sure that stakeholders are always considered.</p>

              <p>If I've done my job right I understand my own code, and I have given the client or product owner the flexibility, knowledge, and confidence to use it as they see fit.</p>

              <blockquote class="card">
                <div class="card-block">
                  <h3 class="card-title">Content Management Systems used</h3>
                  <ul class="card-content">
                    <li><i class="devicons devicons-wordpress"></i> Wordpress</li>
                    <li><i class="devicons devicons-drupal"></i> Drupal</li>
                    <li>Sitefinity</li>
                    <li><i class="devicons devicons-shopify"></i> Shopify</li>
                    <li><i class="devicons devicons-magento"></i> Magento</li>
                    <li>Custom CMS</li>
                  </ul>

                  <h4>Example Work</h4>
                  <p><a href="http://blla.org">blla.org</a> built and maintained in wordpress with the advanced custom fields plugin. Extensive training and iterative feedback processes with the client to produce an outstanding content management experience.</p>
                </div>
              </blockquote>
            </div>
          </article>
          <article id="frameworks">
            <div class="anchor-wrapper">
              <h2>Frameworks and MV systems</h2>
              <p>MV* is the set of logics that allow data-driven websites and applications to run with flexilibility, testability, and modularity.</p>
              <p>This matters because people want stable apps that just work, and provide real value.</p>
              <p>I have implemented front-ends in some of the most popular browser-based frameworks, as well as with well-established server-side MVC systems.</p>
              <blockquote class="card">
                <div class="card-block">
                  <h3 class="card-title">MV* and Frameworks Used</h3>
                  <ul class="card-content">
                    <li><i class="devicons devicons-angular"></i> AngularJS 1 and 2</li>
                    <li><i class="devicons devicons-dotnet"></i> .NET Core</li>
                    <li><i class="devicons devicons-php"></i> CakePHP</li>
                    <li><i class="devicons devicons-ruby_on_rails"></i> Rails</li>
                    <li><i class="devicons devicons-ember"></i> EmberJS</li>
                  </ul>

                  <h4>Example Work</h4>
                  <p><a href="http://symbion-power.com">symbion-power.com</a> was built using a CakePHP-based CMS. The technology has aged, but the principles of MVC were ingrained in me during this project.</p>
                </div>
              </blockquote>
            </div>
          </article>
          <article id="server-side">
            <div class="anchor-wrapper">
              <h2>Server Side</h2>
              <p>I am a front-end developer who strives to be full-stack.</p>
              <p>I have tremendous respect for the engineers and developers who build complex systems, find clever solutions for security, stability, code reuse, efficiency, and hardware acceleration.</p>
              <p>The back-end and server are the hidden foundations that we all rely upon but precious few understand deeply.</p>
              <p>Back-end development requires a great ability to anticipate the demands put on an application, and the ability to build in anticipation of and response to those challenges.</p>
              <p>My work in server-side technology is pragmatic, in that I have learned through practice to configure and troubleshoot servers via terminal.</p>
              <p>I have a working knowledge of OOP and functional programming, and I have a grasp of scope and syntax in multiple languages.</p>

              <blockquote class="card">
                <div class="card-block">
                  <h3 class="card-title">Server-Side Technology Used</h3>
                  <ul class="card-content">
                    <li><i class="devicons devicons-linux"></i> <i class="devicons devicons-apache"></i> <i class="devicons devicons-mysql"></i> <i class="devicons devicons-php"></i> *AMP Stack</li>
                    <li><i class="devicons devicons-visualstudio"></i> C#</li>
                    <li><i class="devicons devicons-dotnet"></i> .Net Core</li>
                    <li><i class="devicons devicons-terminal"></i> Server management</li>
                    <li><i class="devicons devicons-ruby"></i> Ruby</li>
                    <li><i class="devicons devicons-nodejs_small"></i> NodeJS</li>
                  </ul>

                  <h4>Example Work</h4>
                  <p>For years I managed a CentOS server running a LAMP stack. The server included development instances of many websites, as well as several fully-hosted db-driven websites.</p>
                </div>
              </blockquote>
            </div>
          </article>
          <article id="version-control">
            <div class="anchor-wrapper">
              <h2>Version Control</h2>
              <p>Version control is the ultimate test of a development team.</p>
              <p>Within version control systems, there is the opportunity for team members to greatly enhance or hinder their colleagues' work.</p>
              <p>A conscientious developer makes commits clean and logical so that changes can be tracked gracefully, and repaired without creating timelines that look like a cracked smartphone screen.</p>
              <p>A well-run development team will branch and version projects consistently so that updates can be made when needed, and individual developers can work locally with utmost confidence.</p>
              <blockquote class="card">
                <div class="card-block">
                  <h3 class="card-title">VCS Used</h3>
                  <ul class="card-content">
                    <li><i class="devicons devicons-git"></i> <i class="devicons devicons-github"></i> Git</li>
                    <li><i class="devicons devicons-svn"></i> SVN</li>
                  </ul>

                  <h4>Example Work</h4>
                  <p><a href="https://github.com/juddfranklin1">my own github account</a> is in its infancy, but I have experience managing private repositories with team-driven code in both git and SVN.</p>
                </div>
              </blockquote>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="container" id="about">
      <div class="anchor-wrapper">
        <div class="row">
          <div class="section-content col-sm-9 col-xs-12">
            <article>
              <h2>About me</h2>
              <p>I was born and raised in Los Angeles, where I loved to wander through the neighborhoods and do art and creative projects such as "how to cross Sepulveda Blvd on foot" and "where am I supposed to park in Westwood Village?". I went to some of the finest schools in the area, then gave up and moved to the East Coast.</p>
              <p>At Boston University, I learned how to navigate a city with an established public and regional transit systems (plus the all-important Chinatown bus), and snow. I learned about music, film, the arts, and how to buy food at the supermarket.</p>
              <p>Later, I moved to New York and commuted to NYC from White Plains, where I learned about suburban life, discovered my love for wall-climbing, and began my education in web development with HTML4, CSS, Flash, and Dreamweaver.</p>
              <p>Then I travelled to New Zealand, explored the outdoors; then moved to Columbus, Ohio, where I gained real-world experience sitting at a desk pumping out websites. I gave the snow one last try, and then ditched muddy windshield wipers for a return to Southern California.</p>
              <p>Back in Los Angeles, I started a family and now reside in Santa Monica with my 2 wife and 2 mind-breakingly amazing kids.</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="container" id="contact">
      <div class="anchor-wrapper">
        <div class="row">
          <div class="section-content col-sm-9 col-xs-12">
            <article>
              <h2>Contact me</h2>
              <p>find me on <a class="alt-link" href="https://www.linkedin.com/in/judd-franklin-61340ba">linkedIn</a>, <a class="alt-link" href="https://twitter.com/juddfranklin">twitter</a>, or <a class="alt-link" href="https://github.com/juddfranklin1">github</a></p>
            </article>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="row">
            <p class="col-xs-12">Copyright &copy; <span class="copyright-year">2017</span> Judd Franklin.</p>
        </div>
      </div>
    </footer>
    <div id="test-content"></div>
    <div id="eventful-root"></div>
    <!-- <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.js" type="text/javascript"></script><!-- Tether used for absolutely positioned elements -->
    <script src="js/bootstrap-4.0.0-alpha.6.js" type="text/javascript"></script>

    <script src="js/app.js" type="text/javascript"></script>
    <script src="eventful/eventful-widget/dist/index_bundle.js" type="text/javascript"></script>
    <div id="eventful-root"></div>
  </body>
</html>