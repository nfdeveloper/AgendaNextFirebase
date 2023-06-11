import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <form>
          <input type='text' placeholder='Nome' />
          <input type='email' placeholder='Email' />
          <input type='tel' placeholder='Telefone' />
          <textarea placeholder='Observações' ></textarea>
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
