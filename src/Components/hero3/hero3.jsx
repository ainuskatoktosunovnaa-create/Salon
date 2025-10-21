import "./style.css"
import Foto2 from "../../assets/foto2.png"

function Hero3(){
    return (
      <div className="container">
        <div className="hero3">
          <div className="div">
            <h2>клуб и педагоги для детей</h2>
            <p>
              Я отдыхаю, пока моим ребенком  <br />занимается специалист по работе с
              детьми с  <br />
              педагогическим образованием
            </p>
          </div>
          <img src={Foto2} alt="" />
        </div>
      </div>
    );
}
export default Hero3