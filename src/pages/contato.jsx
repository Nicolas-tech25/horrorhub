import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import serverApi from "./api/server";
import { useRouter } from "next/router";

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let router = useRouter();

  const enviarContato = async (dados) => {
    const { nome, email, mensagem } = dados;

    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    try {
      await fetch(`${serverApi}/contatos.json`, opcoes);
      alert("Dados enviados!");
      router.push("/");
    } catch (error) {
      console.error("Deu ruim no envio: " + error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Contato - HorrorHub</title>
        <meta
          name="description"
          content="Entre em contato conosco pelo formulário abaixo"
        />
        <meta name="keywords" content="horrorhub, contato" />
      </Head>
      <StyledContato>
        <h2>Fale Conosco</h2>

        <Container>
          <form
            autoComplete="off"
            action=""
            method="post"
            onSubmit={handleSubmit((dados) => {
              enviarContato(dados);
            })}
          >
            <div>
              <label htmlFor="nome">Nome: </label>
              <input
                {...register("nome", { required: true })}
                type="text"
                name="nome"
                id="nome"
              />
            </div>

            {errors.nome?.type == "required" && <p>Você deve digitar o nome</p>}

            <div>
              <label htmlFor="email">E-mail: </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
              />
            </div>
            {errors.email?.type == "required" && (
              <p>Você deve digitar o e-mail</p>
            )}

            <div>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                {...register("mensagem", {
                  required: true,
                  minLength: 20,
                })}
                maxLength={500}
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="8"
              ></textarea>
            </div>

            {errors.mensagem?.type == "required" && (
              <p>Você deve digitar uma mensagem</p>
            )}

            {errors.mensagem?.type == "minLength" && (
              <p>Escreva pelo menos 20 caracteres</p>
            )}

            <div>
              <button type="submit">Enviar mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}

const StyledContato = styled.section`
  h2 {
    text-align: center;
  }

  form > div {
    margin-bottom: 1rem; /* Increased margin for better spacing */
    display: flex;
    flex-direction: column; /* Adjusted flex-direction for better responsiveness */

    & + p {
      color: red;
      font-size: 0.8rem;
      font-style: italic;
      margin-top: 0.5rem; 
    }

    & label {
      font-weight: bold;
      font-size: 1rem; 
      margin-bottom: 0.5rem; 
    }

    & input,
    & textarea {
      width: 100%; 
      border: none;
      box-shadow: var(--sombra-box);
      padding: 0.5rem;
      margin-bottom: 1rem; 
    }

    & button {
      background-color: var(--cor-primaria-fundo);
      color: var(--cor-primaria);
      padding: 0.75rem 1.5rem; 
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    & button:hover {
      background-color: var(--cor-terciaria-fundo-hover);
    }
  }
`;