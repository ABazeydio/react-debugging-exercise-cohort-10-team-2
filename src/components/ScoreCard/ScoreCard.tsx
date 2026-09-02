import React from 'react'

interface ScoreCardProps {
  icon: string
  title: string
  value: String | number
}

const ScoreCard: React.FC<ScoreCardProps> = ({ icon, title, value }) => (
  <div className="info-card">
    <div className="info-icon">
      <img className="score" alt={`${title} icon`} />
    </div>
    <div className="info-card-title-wrapper">
      <span className="info-card-title">{`${title}: `}</span>
    </div>
  </div>
)

export default ScoreCard
