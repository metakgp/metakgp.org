import { ReactNode } from "react";
import "../styles/components/StatsCard.css";

interface CardProps {
  cardStat: string;
  cardIcon: ReactNode;
  cardDescription: string;
}

export const StatsCard = (props: CardProps) => {
  return (
    <div className="card">
      <div className="card-icon">
        {props.cardIcon}
      </div>
      <div className="card-content">
        <div className="card-stat">
          {props.cardStat}
        </div>
        <div className="card-description" >
          {props.cardDescription}
        </div>
      </div>
    </div>
  )
}
