import { useState } from "react";
import { projects } from "../../utils/sourceData";
import DetailModal from "../DetailModal";

const ProjectDetail = () => {
  const [data, setData] = useState(0);

  const getData = (index) => {
    setData(index);
  };

  console.log(data);

  return (
    <>
      {projects.map((project, index) => {
        return (
          <div className="row-cols-md-2 row mb-md-4 py-md-3 mb-4 py-3" key={index}>
            <div className="col-md-5 col-auto">
              <img className="img-fluid shadow mb-4 mb-md-0" src={`/assets/project/${project.pics[0]}`} alt="thumbnail" />
            </div>
            <div className="col-md-7 col-auto ps-md-4">
              <h6 className="fw-semibold">{project.name}</h6>
              <p className="text-body-secondary">
                <small>{project.desc}</small>
              </p>
              <div className="mb-md-3 mb-3">
                <span className="badge text-bg-light fw-semibold text-body shadow-sm">
                  <small>{project.type}</small>
                </span>
              </div>
              <a className="fw-medium link-dark link-offset-2 link-opacity-50-hover link-underline-opacity-50-hover" href="https://sigapar.skom.id" role="button" rel="noreferrer noopener" target="_blank">
                <small>
                  <i className="fas fa-external-link-alt"></i> Open Project
                </small>
              </a>
              <a
                className="fw-medium link-dark link-offset-2 link-opacity-50-hover link-underline-opacity-50-hover ms-md-3 ms-4"
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
        );
      })}
      ;
      <DetailModal project={projects[data]} />
    </>
  );
};

export default ProjectDetail;
