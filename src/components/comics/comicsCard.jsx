const seriesCard = (props) => {
  const { id, thumb, series } = props.cardData;
  return (
    <div className="card" key={id}>
      <div className="card_img">
        <img src={thumb} alt="" />
      </div>
      <div className="card_title">
        <h4>{series}</h4>
      </div>
    </div>
  )
}

export default seriesCard;