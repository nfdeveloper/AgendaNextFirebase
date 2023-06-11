import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

import { database } from '../services/firebase'
import { FormEvent, useState } from 'react'

export default function Home() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [observacoes, setObservacoes] = useState("");

  function submit(event: FormEvent){

    event.preventDefault()

    const ref = database.ref("contatos")

    const dados = {
      nome,
      email,
      telefone,
      observacoes
    }

    ref.push(dados);
  }

  return (
    <>
      <main className={styles.container}>
        <form onSubmit={submit}>
          <input type='text' placeholder='Nome' onChange={event => setNome(event.target.value)} />
          <input type='email' placeholder='Email' onChange={event => setEmail(event.target.value)} />
          <input type='tel' placeholder='Telefone' onChange={event => setTelefone(event.target.value)} />
          <textarea placeholder='Observações' onChange={event => setObservacoes(event.target.value)} ></textarea>
          <button type='submit' >Salvar</button>
        </form>
        <div className={styles.caixacontatos}>
          <input type='text' placeholder='Buscar' />
          <div className={styles.caixaindividual}>
            <div className={styles.boxtitulo}>
              <p className={styles.nometitulo}>Carla Gomes Farias</p>
              <div>
                <a>Editar</a>
                <a>Excluir</a>
              </div>
            </div>
          <div className={styles.dados}>
            <p>carla@gmail.com</p>
            <p>000000098</p>
            <p>Amiga da escola de natação</p>
          </div>
          </div>
        </div>
      </main>
    </>
  )
}
