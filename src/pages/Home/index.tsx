import * as S from './styles'
import {ComponenButton, ComponentButtonN, ComponentButtonD } from "../../components"


export function Home() {
    return(
        <S.Section>
            <a href="./Noticia">
            <ComponentButtonN text="Noticia"></ComponentButtonN>
            </a>
            
           <ComponenButton text="Tópicos"></ComponenButton>
           <ComponentButtonD text="Descricao"></ComponentButtonD>
           
           <h2>Notícia de Lançamento de Produto</h2>
           <h2>Análise de Gadget</h2>
           <h2>Artigo sobre Inteligência Artificial</h2>
           <h2>Notícia de Segurança Cibernética</h2>
        </S.Section>
    )
}