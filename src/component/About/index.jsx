import styles from "../About/About.module.css";

const About = ({ bioData }) => {
  return (
    <div className="container-fluid px-lg-5 pt-lg-5 pb-lg-3 px-4 pt-5 pb-3">
      <h4 className="desc">&#128512; About Me</h4>
      <hr />
      <p className="m-0 text-body" id={styles.aboutContent}>
        <small>{bioData.about}</small>
      </p>
    </div>
  );
};

export default About;
