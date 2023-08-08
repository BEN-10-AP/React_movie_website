
const Movies = (props) => {
  return (
    <div className="movies">
    <img src={props.image} alt=""/>
    <p>{props.title}</p>
    <p>{props.year}</p>
    </div>
  )
}

export default Movies