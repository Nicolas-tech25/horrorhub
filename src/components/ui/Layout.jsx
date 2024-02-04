import Link from "next/link";
import Cabecalho from "./Cabecalho";
export default function Layout({ children }) {
  return (
    <>
      <Cabecalho />
      <main className="limitador">{children}</main>
    </>
  );
}
