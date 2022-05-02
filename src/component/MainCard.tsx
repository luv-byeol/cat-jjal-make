function MainCard({ img, handleHeartClick }: any) {
  return (
    <div className="main-card">
      <img
        src={img}
        alt="고양이"
        width="400"
      />
      <button onClick={handleHeartClick}>🤍</button>
    </div>
  )
}

export default MainCard;