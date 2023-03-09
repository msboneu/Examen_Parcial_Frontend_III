//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
  return (
    <div className="card">
      <h2>Your favorite song is:</h2>
      <p>Artist: {props.artist}</p>
      <p>Song: {props.song}</p>
    </div>
  );
}

export default Card;
