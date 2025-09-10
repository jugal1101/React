import React from "react";
export default function Web() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo text-dark ms-5">Art Studio</h2>
        <ul className="text-light list-unstyled d-flex align-items-center fs-5 px-5 pt-3">
          <li className="px-5">
            {" "}
            <a href="" className="text-decoration-none text-dark">
              Home
            </a>{" "}
          </li>
          <li className="px-5">
            {" "}
            <a href="" className="text-decoration-none text-dark">
              About me
            </a>{" "}
          </li>
          <li className="px-5">
            {" "}
            <a href="" className="text-decoration-none text-dark">
              Offer
            </a>{" "}
          </li>
          <li className="px-5">
            {" "}
            <a href="" className="text-decoration-none text-dark">
              Blog
            </a>{" "}
          </li>
          <li className="px-5">
            {" "}
            <a href="" className="text-decoration-none text-dark">
              Contact
            </a>{" "}
          </li>
        </ul>
      </nav>
      <div className="contaner-fluid d-flex justify-content-around content">
        <div className="box1">
          <p className=" p1">
            Welcome to my world, where I create beautiful things
          </p>
          <p className="p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At
            consectetur lorem donec massa sapien faucibus.
          </p>
          <button className="btn btn-dark btn1">Find out more</button>
        </div>
        <div className="box2">
          <img
            className="img1"
            src="https://bsihgp.yourbrand.studio/files/dynamicContent/sites/bsihgp/images/en/webpage_20/ls1uqfa3/element_693/rwdMode_1/485x660/zdjecie_1.webp"
            alt=""
          />
        </div>
      </div>

      <div className="container d-flex about">
        <div className="div1">
          <img
            src="https://bsihgp.yourbrand.studio/files/dynamicContent/sites/bsihgp/images/en/webpage_20/ls1uqfa3/element_698/rwdMode_1/485x660/zdjecie_2.webp"
            alt=""
          />
        </div>
        <div className="div2">
          <h2 className=" aboutH">About Me</h2>
          <p className="aboutP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
            viverra aliquet eget sit amet. In eu mi bibendum neque egestas
            congue quisque. Metus vulputate eu scelerisque felis imperdiet
            proin. Quis commodo odio aenean sed. Lorem mollis aliquam ut
            porttitor leo a. Consectetur purus ut faucibus pulvinar elementum.
            At risus viverra adipiscing at in. Felis bibendum ut tristique et.
            Risus nullam eget felis eget nunc lobortis mattis. In fermentum et
            sollicitudin ac orci phasellus egestas tellus. Cursus vitae congue
            mauris rhoncus aenean. Amet est placerat in egestas. Praesent
            tristique magna sit amet purus gravida.
          </p>

          <button className="btn btn-dark btn2" type="button">
            Find Out More
          </button>
        </div>
      </div>

      <div className="gallery bg-dark">
        <p className="text-center text-light passion">MY PASSIONS</p>
        <div className="gallery1 d-flex justify-content-evenly">
          <img
            src="https://bsihgp.yourbrand.studio/files/dynamicContent/sites/bsihgp/images/en/webpage_20/ls1uqfa3/element_704/rwdMode_1/384x384/mojepasje_malarstwo.webp"
            alt=""
          />
          <img
            src="https://bsihgp.yourbrand.studio/files/dynamicContent/sites/bsihgp/images/en/webpage_20/ls1uqfa3/element_702/rwdMode_1/384x384/mojepasje_murale.webp"
            alt=""
          />
          <img
            src="https://bsihgp.yourbrand.studio/files/dynamicContent/sites/bsihgp/images/en/webpage_20/ls1uqfa3/element_700/rwdMode_1/384x384/mojepasje_rysunek.webp"
            alt=""
          />
        </div>
        <div className="name text-light d-flex justify-content-around fs-2 mt-3">
          <p className="mx-5">PAINTING</p>
          <p className="me-5">MURALS</p>
          <p className="me-5">DRAWING</p>
        </div>
      </div>

      <div className="blog">
        <h2 className="blog1 mt-5 pt-5 text-center">Blog</h2>

        <div className="container blog2 mt-5 d-flex justify-content-between">
          <img
            src="https://bsihgp.yourbrand.studio/files/dynamicContent/sites/bsihgp/images/en/webpage_20/ls1uqfa3/element_711/rwdMode_1/600x600/blog_1.webp"
            alt=""
          />

        <p className="fs-1 id">
        What to keep in mind when creating a visual brand identity?</p>
        </div>
      </div>

  <div className="container-fluid post">
   
   <p className="text-center postP">Write to me and we will find the perfect solutions for you!</p>
 <button className="btn btn-dark btn5">CONTACT</button>
  </div>


<div className="follow">
  <h1>Follow me on instagram</h1>
</div>

<div className="d-flex justify-content-around mt-5 pt-5 pics">
  <img src="https://bsihgp.yourbrand.studio/files/dynamicContent/sites/bsihgp/images/en/webpage_20/ls1uqfa3/element_681/0/instagram_4.webp" alt="" />
  <img src="https://bsihgp.yourbrand.studio/files/dynamicContent/sites/bsihgp/images/en/webpage_20/ls1uqfa3/element_681/1/instagram_3.webp" alt="" />
  <img src="https://bsihgp.yourbrand.studio/files/dynamicContent/sites/bsihgp/images/en/webpage_20/ls1uqfa3/element_681/2/instagram_2.webp" alt="" />

</div>

<div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p className="copyright">Company Name © 2018</p>
            </div>
        </footer>
    </div>
    </>
  );
}
