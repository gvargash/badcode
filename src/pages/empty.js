import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Emoji from "../components/emoji"
import empty_page from "./../images/empty_page.svg"
const EmptyPage = ({
  button = { label: "Ver Posts" },
  description = "Estamos trabajando para traer el mejor contenido en video 📺, para ti.",
  url = "/posts",
  title = "!CREANDO CONTENIDO... ✍!",
  emoji = "",
}) => (
  <Layout>
    <SEO title="Pagina vacía" />
    <div className="row-max-1">
      <div className="gv-container-not-found">
        <h3>{title}</h3>
        <div className="gv-img_portada_not_found">
          <img src={empty_page} alt="pagina no encontrada" />
        </div>
        <p>
          {description}
          <Emoji arial-label="la-tristeza" symbol={emoji} />
        </p>
        <Link to={url} className="btn btn-green">
          {button.label}
        </Link>
      </div>
    </div>
  </Layout>
)

export default EmptyPage
