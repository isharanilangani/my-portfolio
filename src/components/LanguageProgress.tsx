import React from "react";
import "./LanguageProgress.css";

interface LanguageProgressProps {
  language: string;
  percentage: number;
  gradient: string;
}

const LanguageProgress: React.FC<LanguageProgressProps> = ({
  language,
  percentage,
  gradient,
}) => {
  return (
    <div className="language-progress">
      <span className="language-label">{language}</span>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${percentage}%`,
            background: gradient,
          }}
        ></div>
      </div>
      <span className="percentage-label">{percentage}%</span>
    </div>
  );
};

export default LanguageProgress;
