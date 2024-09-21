import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImage from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal/NewTransactionModal";
import { useState } from "react";
export function Header() {

  const [isTransactionModalOpen, setIsTransactionModalOpen] =
    useState<boolean>(false);

  function handleTransactionModalOpenChange(value: boolean) {
    setIsTransactionModalOpen(value);
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="dt money" />

        <Dialog.Root
          open={isTransactionModalOpen}
          onOpenChange={handleTransactionModalOpenChange}
        >
          <Dialog.Trigger asChild>
            <NewTransactionButton type="button">
              Nova transação
            </NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal handleTransactionModalOpenChange={handleTransactionModalOpenChange} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
