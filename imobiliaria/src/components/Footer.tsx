import whatsImg from "../assets/icons/whatsapp.png"
import faceImg from "../assets/icons/facebook.png"
import instaImg from "../assets/icons/instagram.png"
import './styles/rodape.scss'

export function Footer() {
  return (
    <footer>
      <div className="nav-footer">
        <div className="itens">
          <div className="imagem">LOGO</div>
          <div className="content-footer">
            <h1>Redes Sociais</h1>
            <ul>
              <li><a href="#"><img src={whatsImg} alt="" /></a></li>
              <li><a href="#"><img src={faceImg} alt="" /></a></li>
              <li><a href="#"><img src={instaImg} alt="" /></a></li>
            </ul>
          </div>
        </div>
        <div className="separator-3"></div>
        <div className="copyright">
          <h1>Brasil</h1>
          <h1>© 2021 LOREN. Todos os direitos reservados.</h1>
        </div>
      </div>
    </footer>
  )
}