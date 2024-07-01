const Home = ({onGame}) => {
  return (
    <>
      <div className="home">
        <div className="title">
          Typing game
        </div>
        <div className="author">
          coding & <br />
          design by Yassine EL koujjer
        </div>
        <button className="btnPlay" onClick={()=>onGame('PlayGame')}>Play Game</button>
      </div>
    </>
  );
};
export default Home;
