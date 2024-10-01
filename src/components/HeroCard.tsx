import "./HeroCard.css";

interface CardProps {
  title: string;
  imageSource: string;
  description: string;
}

export const HeroCard = (props: CardProps) => {
  return (
    <div className="hero-card">
      <div className="image-div">
        <img className="card-image" src={props.imageSource} />
      </div>
      <div className="content-container">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-desc">{props.description}</p>
      </div>
    </div>
  )
}
