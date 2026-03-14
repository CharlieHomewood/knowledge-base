import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div id="links-header-container">
        <div id="links-header">        
            <a class="links-header-item" href="https://charliehomewood.github.io/website/" onClick={() => window.location.href = "https://charliehomewood.github.io/website/"}><b>&#x21A9; Return to Website</b></a>
        </div>
        <hr></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor

/* Code is from: https://github.com/morrowind-modding/morrowind-modding.github.io */