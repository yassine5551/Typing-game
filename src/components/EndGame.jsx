const EndGame = ({score, onGame}) => {
    return (
      <>
        <div className="endGame">
          <div className="result">
            <div>
              <div className="title">
                Right Word
              </div>
              <div className="number">
                {score.right}
              </div>
            </div>
            <div>
              <div className="title">
                Wrong Word
              </div>
              <div className="number">
                {score.wrong}
              </div>
            </div>
          </div>
          <button className="btnPlay" onClick={() => onGame('PlayGame')}>Play Game Again</button>
        </div>
      </>
    );
  };
  export default EndGame;
  