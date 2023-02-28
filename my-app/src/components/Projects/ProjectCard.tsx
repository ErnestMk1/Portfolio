type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
  mobileImgUrl: string;
  id: number;
  handleProceed: (id: number) => void;
};

const ProjectCard = ({
  title,
  description,
  imgUrl,
  mobileImgUrl,
  handleProceed,
  id
}: ProjectCardProps) => {
  return (
    <div className="proj-imgbx" onClick={() => handleProceed(id)}>
      <img
        className="desktop-img"
        src={imgUrl}
        alt="first page of the project"
      />
      <img
        className="mobile-img"
        src={mobileImgUrl}
        alt="first page of the project"
      />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
