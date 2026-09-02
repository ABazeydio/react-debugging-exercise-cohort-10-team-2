import React from 'react'

interface ScoreCardProps {
  icon: string
  title: string
  // fix: change value type to String | number to allow for both string and number values
  value: String | number
}

const ScoreCard: React.FC<ScoreCardProps> = ({ icon, title, value }) => (
  <div className="info-card">
    <div className="info-icon">
       {/* fix: add missing src and value to ScoreCard component */}
      <img src={icon} className="score" alt={`${title} icon`} />
    </div>
    <div className="info-card-title-wrapper">
      <span className="info-card-title">{`${title}: `}</span>
      <span className="info-card-value">{value}</span>
    </div>
  </div>
)

export default ScoreCard
