import { Outlet } from "react-router-dom"
import { ComponentTexto, ComponenButton } from "../../components"
import * as S from "./styles"


export function Layout() {
  return (
    <>
      
      <ComponenButton text="Tópicos"></ComponenButton>
      <ComponentTexto />
      <S.Main>
        <Outlet />
      </S.Main>
      
    </>
  )
}