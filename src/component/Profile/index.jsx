const Profile = ({ bioData }) => {
  return (
    <div className="container-fluid px-lg-5 py-lg-4 px-5 py-4">
      <img src={bioData.photo} className="img-fluid rounded-circle mb-3 border border-2 border-dark p-1" alt="Profile" width={155} />
      <h5 className="fw-bold">{bioData.name}</h5>
      <h6 className="mb-3 text-body-secondary">
        <em>{bioData.role}</em>
      </h6>
      <h6 className="m-0 text-body-tertiary">
        <small>{bioData.address}</small>
      </h6>
    </div>
  );
};

export default Profile;
