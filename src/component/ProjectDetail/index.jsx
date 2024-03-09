import { useState } from "react";
import { projects } from "../../utils/sourceData";
import DetailModal from "../DetailModal";

const ProjectDetail = () => {
  const [data, setData] = useState(0);

  const getData = (index) => {
    setData(index);
  };

  return (
    <>
      {projects.map((project, index) => {
        return (
          <div key={index} className="card mb-5 bg-transparent border-0">
            <div className="row g-0 bg-transparent">
              <div className="col-lg-4">
                <img src={`/assets/project/${project.pics[0]}`} className="img-fluid shadow rounded" alt="Thumbnail Project" />
              </div>
              <div className="col-lg-8 ">
                <div className="card-body py-0 ps-lg-4 pe-lg-0 pt-lg-0 pt-3 px-1 ">
                  <h6 className="card-title fw-semibold">{project.name}</h6>
                  <p className="card-text mb-1">
                    <small className="text-body-secondary">{project.period}</small>
                  </p>
                  <p className="card-text">
                    <small>{project.desc}</small>
                  </p>
                  <p className="card-text">
                    <small className="badge text-bg-light fw-semibold text-body-secondary shadow-sm">{project.type}</small>
                  </p>
                  <a className="fw-medium link-dark link-offset-2 link-opacity-50-hover link-underline-opacity-50-hover" href={`${project.link}`} role="button" rel="noreferrer noopener" target="_blank">
                    <small>
                      <i className="fas fa-external-link-alt"></i> Open Project
                    </small>
                  </a>
                  <a
                    className="fw-medium link-dark link-offset-2 link-opacity-50-hover link-underline-opacity-50-hover ms-lg-3 ms-4"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    role="button"
                    rel="noreferrer noopener"
                    onClick={() => {
                      getData(index);
                    }}
                  >
                    <small>
                      <i className="fas fa-angle-double-right"></i> Detail
                    </small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <DetailModal project={projects[data]} />
    </>
  );
};

export default ProjectDetail;
