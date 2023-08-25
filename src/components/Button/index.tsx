import * as S from "./styles"




export function Button(props: {text: string}) {
    return (
    
        <S.Button>
          <button>{props.text}</button>
        </S.Button>


  

    )
  }