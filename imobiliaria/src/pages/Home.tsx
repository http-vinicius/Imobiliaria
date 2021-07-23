import { Button } from '../components/Button'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import sobreImg from '../assets/imagens/sobre.jpg'
import imovelImg from '../assets/imagens/imoveis.jpg'
import newImg1 from '../assets/imagens/novidade1.jpg'
import newImg2 from '../assets/imagens/novidade2.jpg'
import newImg3 from '../assets/imagens/novidade3.jpg'
import newImg4 from '../assets/imagens/novidade4.jpg'
import newImg5 from '../assets/imagens/novidade5.jpg'
import newImg6 from '../assets/imagens/novidade6.jpg'
import pes1Img from '../assets/imagens/pessoa1.jpg'
import pes2Img from '../assets/imagens/pessoa2.jpg'
import pes3Img from '../assets/imagens/pessoa3.jpg'
import '../styles/home.scss'

export function Home() {
  return (
    /*Header*/
    <>
      <Nav />
      <header className="banner">
        <div className="container-title">
          <h1 className="logo">LOREN IPSUM</h1>
          <div className="espacamento">
            <h4><i>“Vestibulum non ligula sodales,<br /> fringilla.”</i></h4>
          </div>
          <div className="espacamento">
            <Button>SERVIÇOS</Button>
          </div>
        </div>
      </header>

      {/*----------------------------------------------------Sessão 1-------------------------------------------------------------------*/}

      <section className="section-1">
        <div className="container-1-img"><img src={sobreImg} alt="" /></div>
        <div className="description">
          <h2>LOREN IPSUN DOLOR SIT AMET</h2>
          <div className="separator"></div>
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue tortor, vehicula non eros scelerisque, commodo tristique turpis.
              Donec id ultricies nulla, quis congue velit. Nunc gravida, sapien sit amet interdum pulvinar, nisl justo pellentesque ipsum, in aliquam
              nisl diam quis eros.</h4>
          </div>
          <Button className="button">SOBRE</Button>
        </div>
      </section>

      {/*----------------------------------------------------Sessão 2-------------------------------------------------------------------*/}

      <section className="container-2">
        <div className="section-2">
          <div className="description">
            <h2>LOREN IPSUN DOLOR SIT AMET</h2>
            <div className="separator"></div>
            <div>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue tortor, vehicula non eros scelerisque, commodo tristique turpis.
                Donec id ultricies nulla, quis congue velit. Nunc gravida, sapien sit amet interdum pulvinar, nisl justo pellentesque ipsum, in aliquam
                nisl diam quis eros.</h4>
            </div>
            <Button>IMÓVEIS</Button>
          </div>
          <div><img src={imovelImg} alt="" /></div>
        </div>
      </section>

      {/*----------------------------------------------------Sessão 3-------------------------------------------------------------------*/}

      <section className="section-3">
        <div className="container-titulo">
          <h2 className="news-titulo">NOVIDADES</h2>
        </div>
        <div className="news-card-container">
          <div className="card-container">
            <img src={newImg1} alt="" />
            <h3><strong>LOREN IPSUN DOLOR SIT AMET</strong></h3>
            <div className="separator-2"></div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue tortor, vehicula non eros scelerisque.</h5>
            <div className="position-button">
              <Button className="button-news">SAIBA MAIS</Button>
            </div>
          </div>

          <div className="separator-img"></div>

          <div className="card-container">
            <img src={newImg2} alt="" />
            <h3>LOREN IPSUN DOLOR SIT AMET</h3>
            <div className="separator-2"></div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue tortor, vehicula non eros scelerisque.</h5>
            <div className="position-button">
              <Button className="button-news">SAIBA MAIS</Button>
            </div>
          </div>

          <div className="separator-img"></div>

          <div className="card-container">
            <img src={newImg3} alt="" />
            <h3>LOREN IPSUN DOLOR SIT AMET</h3>
            <div className="separator-2"></div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue tortor, vehicula non eros scelerisque.</h5>
            <div className="position-button">
              <Button className="button-news">SAIBA MAIS</Button>
            </div>
          </div>

          <div className="separator-3"></div>

          <div className="card-container">
            <img src={newImg4} alt="" />
            <h3>LOREN IPSUN DOLOR SIT AMET</h3>
            <div className="separator-2"></div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue tortor, vehicula non eros scelerisque.</h5>
            <div className="position-button">
              <Button className="button-news">SAIBA MAIS</Button>
            </div>
          </div>

          <div className="separator-img"></div>

          <div className="card-container">
            <img src={newImg5} alt="" />
            <h3>LOREN IPSUN DOLOR SIT AMET</h3>
            <div className="separator-2"></div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue tortor, vehicula non eros scelerisque.</h5>
            <div className="position-button">
              <Button className="button-news">SAIBA MAIS</Button>
            </div>
          </div>

          <div className="separator-img"></div>

          <div className="card-container">
            <img src={newImg6} alt="" />
            <h3>LOREN IPSUN DOLOR SIT AMET</h3>
            <div className="separator-2"></div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue tortor, vehicula non eros scelerisque.</h5>
            <div className="position-button">
              <Button className="button-news">SAIBA MAIS</Button>
            </div>
          </div>
        </div>
      </section>

      {/**--------------------------------------------------------------sessão 4----------------------------------------------------- */}

      <section className="container-section-4">
        <div className="section-4">
          <div className="container-titulo">
            <h2 className="news-titulo">NOSSA EQUIPE</h2>
          </div>
          <div className="news-card-container">
            <div className="card-container">
              <img src={pes1Img} alt="" />
              <h3>DOLOR SIT AMET</h3>
              <div className="separator-2"></div>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue tortor, vehicula non eros scelerisque, commodo tristique turpis.</h5>
            </div>

            <div className="separator-img"></div>

            <div className="card-container">
              <img src={pes2Img} alt="" />
              <h3>DOLOR SIT AMET</h3>
              <div className="separator-2"></div>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue tortor, vehicula non eros scelerisque, commodo tristique turpis.</h5>
            </div>

            <div className="separator-img"></div>

            <div className="card-container">
              <img src={pes3Img} alt="" />
              <h3>DOLOR SIT AMET</h3>
              <div className="separator-2"></div>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue tortor, vehicula non eros scelerisque, commodo tristique turpis.</h5>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}