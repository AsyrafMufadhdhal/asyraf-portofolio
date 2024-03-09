import Profile from "../Profile";
import SocialMedia from "../SocialMedia";
import About from "../About";
import Project from "../Project";
import styles from "../Content/Content.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Content = ({ bioData, contacts }) => {
  return (
    <div className="row row-cols-lg-2 ">
      <div className="col-lg-4 col-auto text-center container-fluid" data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" id={styles.bioContainer}>
        <Navbar />
        <Profile bioData={bioData} />
        <SocialMedia contacts={contacts} />
      </div>
      <div className="col-lg-8 col-auto d-flex flex-column gap-4 p-0 overflow-x-hidden px-lg-2" id={styles.portoContainer}>
        <About bioData={bioData} />
        <Project />
        <Footer />
      </div>
    </div>
  );
};

export default Content;
