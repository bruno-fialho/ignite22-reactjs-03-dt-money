import logoImg from '../../assets/logo.svg'

import { HeaderContent, HeaderWrapper, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NewTransactionButton>
          Nova transação
        </NewTransactionButton>
      </HeaderContent> 
    </HeaderWrapper>
  )
}