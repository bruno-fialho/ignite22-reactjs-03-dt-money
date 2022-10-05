import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'

import { NewTransactionModal } from '../NewTransactionModal'

import { HeaderContent, HeaderWrapper, NewTransactionButton } from './styles'

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderWrapper>
  )
}
