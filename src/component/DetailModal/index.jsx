import { useEffect, useState } from "react";
import styles from "../DetailModal/DetailModal.module.css";

const DetailModal = ({ project }) => {
  const [mainPic, setMainPic] = useState(null);

  useEffect(() => {
    setMainPic(project.pics[0]);
  }, [project]);

  const changeMainPic = (index) => {
    const changePic = project.pics[index];
    setMainPic(changePic);
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="false">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content text-black bg-white bg-opacity-50 border-0 shadow" id={styles.modalContent}>
          <div className="modal-header border-0">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Detail Project
            </h1>
          </div>
          <div className="modal-body">
            <div className="row row-cols-lg-2 row-gap-3">
              <div className="col-lg-7 col-auto">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={`assets/project/${mainPic}`} height={330} alt="" className="overflow-hidden object-fit-contain" />
                </div>
                <hr />
                <div className="mb-1 px-3">
                  {project.pics.map((pic, index) => {
                    return (
                      <img
                        key={index}
                        src={`assets/project/${pic}`}
                        width={70}
                        height={40}
                        alt="Project Images"
                        onClick={() => {
                          changeMainPic(index);
                        }}
                        className={`object-fit-cover me-3 mb-2 mb-lg-0 shadow ${mainPic == pic ? "bg-dark bg-opacity-50 p-1" : ""}`}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-5 pe-4 col-auto overflow-y-auto">
                <p className="fw-bold text-body">{project.name}</p>
                <ul>
                  {project.details.map((detail, index) => {
                    return (
                      <li key={index} className="mb-1">
                        <small>{detail}</small>
                      </li>
                    );
                  })}
                </ul>
                <div className="my-3">
                  {project.tags.map((tag, index) => {
                    return (
                      <span key={index} className="badge text-bg-light fw-medium text-body me-2 mb-2 shadow border border-secondary">
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <div>
                  <a className="fw-bold link-dark link-offset-2 link-opacity-50-hover link-underline-opacity-50-hover" href={`${project.repo}`} role="button" rel="noreferrer noopener" target="_blank">
                    <small>
                      <i className="far fa-folder-open"></i> Github Repository
                    </small>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer border-0">
            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
