import styles from "../SocialMedia/SocialMedia.module.css";

const SocialMedia = ({ contacts }) => {
  return (
    <div className="container-fluid mt-lg-3 mt-3 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-lg-column row-gap-2 flex-row justify-content-evenly">
        {contacts.map((contact, index) => {
          return (
            <div key={index} className="mx-4 mx-lg-0">
              <a href={contact.link} target="_blank" rel="noreferrer noopener" id={styles.medsos}>
                <img src={contact.img} alt={contact.name} width={25} />
                <span className="d-none d-lg-inline fw-medium" id={styles.medsosName}>
                  <small>{contact.name}</small>
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// mt-md-3 py-md-3 px-md-4 px-2 py-3

export default SocialMedia;
