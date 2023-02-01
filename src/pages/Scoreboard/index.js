import React from "react";

import ScoreBoard from "../../components/ScoreBoard/ScoreBoard";
import BackToHome from "../../components/BackToHome";

const ScoreBoardPage = () => (
  <div className="page page-score-board">
    <BackToHome />
    <section>
      <ScoreBoard />
    </section>
  </div>
);

export default ScoreBoardPage;
