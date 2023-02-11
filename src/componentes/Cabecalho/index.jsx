import logo from './logo.png'
import search from './search.png'

export default function Cabecalho() {
    return ( 
      <header>
        <img src={logo} alt="Logo"/>
         <div>
            <input type="text" 
            placeholder="o que você procura?"/>
            <img src={search} alt="ícone de lupa" />

         </div>
      </header>
    )
}