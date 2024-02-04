import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function Menu() {
  const rotaAtual = usePathname();

  return (
    <StyledNav>
      <Link href="/" className={rotaAtual == "/" ? "ativo" : ""}>
        Home
      </Link>
      <Link href="/watch" className={rotaAtual == "/watch" ? "ativo" : ""}>
        Watch
      </Link>
      <Link href="/contato" className={rotaAtual == "/contato" ? "ativo" : ""}>
        Contato
      </Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 0.8rem 1rem;

    &:first-child {
      border-top-left-radius: var(--borda-arredondada);
      border-bottom-left-radius: var(--borda-arredondada);
    }

    &:last-child {
      border-top-right-radius: var(--borda-arredondada);
      border-bottom-right-radius: var(--borda-arredondada);
    }

    &:hover,
    &:focus {
      background-color: #000;
    }

    @media screen and (min-width: 700px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  a.ativo {
    background-color: black;
  }
`;
