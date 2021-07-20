import { Button } from '../components/Button'
import { Nav } from '../components/Nav'
import sobreImg from '../assets/imagens/sobre.jpg'
import imovelImg from '../assets/imagens/imoveis.jpg'
import '../styles/home.scss'

export function Home() {
  return (

    /*Header*/

    <>
      <Nav />
      <header className="banner">
        <div className="container-title">
          <h1>LOREN IPSUM</h1>
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
          <h2>NOVIDADES</h2>
        </div>
      </section>
    </>
  )
}