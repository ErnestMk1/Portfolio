type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
  id: number;
  handleProceed: (id: number) => void;
};

const ProjectCard = ({
  title,
  description,
  imgUrl,
  handleProceed,
  id
}: ProjectCardProps) => {
  return (
    <div className="proj-imgbx" onClick={() => handleProceed(id)}>
      <img src={imgUrl} alt="first page of the project" />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
