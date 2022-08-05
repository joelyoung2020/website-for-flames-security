//contact components


function Contacts() {
  return (
    <div className="contacts-nav">
        <div><a href="tel:+2347034528136"><i class="fa fa-phone"></i><span> Call us now</span></a></div>
        <ul>
            <li><a href="https://www.instagram.com/flamessecurityagency?igshid=YmMyMTAM2Y="><i class="fa fa-instagram"></i></a></li>
            {/* <li><i class="fa fa-facebook"></i></li>
            <li><i class="fa fa-twitter"></i></li> */}
            <li><a href="mailto:flmsscrtgnc@gamil.com"><i class="fa fa-envelope"></i></a></li>
        </ul>
    </div>
  )
}


//navbar component
const Navbar = () => {
    return (
      <nav className="navbar navbar-default ">
          <div class="container-fluid">
              <div class="navbar-header">
                  <button data-toggle="collapse" data-target="#demo" class="navbar-toggle" ><span class="glyphicon glyphicon-list"></span></button>
                  
                  <a className="navbar-brand" href="#main"><img src="fire.png" className="logo"/></a><span className="navbar-brand letter"></span>
              </div>
              <div id="demo" class="collapse-in navbar-collapse">
              <ul class="nav navbar-nav navbar-right">
                  <li class="active"><a href="#main">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#contact">Contact us</a></li>
              </ul>
          </div>
          </div>
      </nav>
    )
  }

  
  //Front page component
  const Front = () => {
    return (
        <div id="main">
          <img src="IMG-20220804-WA0012.jpg" className=" front img-responsive"/>
      </div>
    )
  }
  
  
//services components
const Services = () => {
  return (
    <div id="services">
         <div class="container">
             <div class="maincol row">
                 <div data-aos="fade-up" class="col-md-4 col-sm-6 col-xs-12">
                 <img src="images.png"/>
                    <div>
                    <h1>Business Security</h1>
                    <h4>We operate as secuirty personnels over your business areas and make it a priority to keep it safe</h4>
                  </div>
                  </div>
                  <div data-aos="fade-up"  class="col-md-4 col-sm-6col-xs-12">
                  <img src="dog images (1).png"/>
                    <div>
                    <h1>Guard dogs</h1>
                    <h4>We have different breed of weel trained security dogs that are assigned to beats of work to keep watch and secure our clients</h4>
                  </div>
                  </div>
                  <div data-aos="fade-up" class="col-md-4 col-sm-6 col-xs-12">
                  <h1><i class="fa fa-lock"></i></h1>
                    <div>
                    <h1>Industrial security</h1>
                    <h4>We opearte as personnels and also use doges to secure and inspect the industry</h4>
                  </div>
                  </div>
                  <div data-aos="fade-up" class="col-md-4 col-sm-6 col-xs-12">
                    <img src="enterprise-security-officer-security-guard-icon-free-hd.png"/>
                    <div>
                       <h2>Escort services </h2>
                       <h4>We provide personnel escorts, vehicle escort,airport escort and many more for your safety to any destination</h4>
                  </div>
                  </div>
                  <div data-aos="fade-up" class="col-md-4 col-sm-6 col-xs-12">
                  <img src="cctv.png"/>
                    <div>
                    <h1>Events security</h1>
                    <h4>Personnels and dogs secuirty over the place of events and having the safety of it's client and guests</h4>
                  </div>
                  </div>
                  <div data-aos="fade-up" class="col-md-4 col-sm-6 col-xs-12">
                  <img src="home.jpg"/>
                    <div>
                       <h2>Resident home guard</h2>
                       <h4>Guard dogs/personnels or both residing at same place with the principal/clients to secure the client and environment and make it conducive and safe</h4>
                  </div>
                  </div>
             </div>
         </div>
    </div>
  )
}


//about components

AOS.init();
const About = () => {
    
  return (
    <div id="about" class="container about">
    <div class="row">
    <div  class="col-md-6 col-xs-12">
       <div data-aos="flip-right" className="image img-responsive">
           <img className="img-responsive" src="IMG-20220804-WA0032.jpg"/>
        </div>
        </div>
        <div data-aos="flip-left" class="col-md-6 col-xs-12">
        <div className="intro">
           <h1>No 1 security agency in Nigeria</h1>
           <h5>FLAMES SECURITY AGENCY is a Nigerian limited liablity company registered in Nigeria for the provsion of advanced security technology services.</h5>
           <p>Our expertise in the fields of special protection,consulting and instructing. FLAMES Security Agency was set up top meet the demadn for professional security knowledge and capabilities for the industrial, private adn government sectors</p>
           <p> We have established our reputation at the forefront of security companies in Nigeria, utilizing a wide range of the most advanced security systems,teams of high-standard professional quards and leading security means using the last methods, mixed martial art, tecnological equipments and knowledge.</p>
           <p> Our company is th first choice of many security-conscious oragnizations, business men and high-profile figures </p>
        </div>
        </div>
        
        </div>
    </div>
  )
}


//footer components

const Footer = () => {
  return (
    <div id="contact">
      <div className="container gallery">
    <div className="row">
            <div className="innercol col-md-6 col-xs-6 col-sm-6">
                <div data-aos="zoom-in" class=" info col col2">
                <h3>Say Hello</h3>
                    <p>Address: Old Army check point Umudike Ikwuano Abia State</p>
                    <p>Phone: 09038245421</p>
                    <p>Email: flmsscrtgnc@gamil.com</p>
                </div>
            </div>
            <div className="innercol col-md-6 col-xs-6 col-sm-6">
                <div data-aos="zoom-in"className=" info col col2">
                  <h3>Socials</h3>
                  <ul>
                     <li><a href="https://www.instagram.com/flamessecurityagency?igshid=YmMyMTAM2Y="><i class="fa fa-instagram"></i> Message</a></li>
                     {/* <li><i class="fa fa-facebook"></i></li>
                     <li><i class="fa fa-twitter"></i></li> */}
                     <li><a href="mailto:flmsscrtgnc@gamil.com"><i class="fa fa-envelope"></i> Send email</a></li>
                     <li><a href="tel:+2347034528136"><i class="fa fa-phone"></i> Call us now</a></li>
                  </ul>
                </div>
            </div>
            
    </div>     
    </div> 
    <div className="back">
          <h4><a href="#main">Back to the top</a></h4>
            <br></br><br></br>
            <div className="design-by">
               <div >Designed and produced by 
                  <div>Joel Okebugwu</div>
               </div>
            </div>
            </div>
    </div>
  )
}


//main app component
const App = () => {
    return (
      <div>
        <Contacts/>
          <Navbar/>
          <Front/>
          <Services/> 
          <About/>
          <Footer/>
      </div>
    )
  }
  
  
  ReactDOM.render(<App/>, document.getElementById("root"))