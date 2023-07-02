// Components
import WorkItem from "./WorkItem"

const jobs = [
  {
    year: '2023 - Atualmente',
    company: 'Círculo Militar de São Paulo',
    title: 'Estágio em Desenvolvimento e Suporte',
    duration: '1 ano',
    details: 'Desenvolvimento front-end com HTML, CSS, SASS, Bootstrap, Tailwind CSS, JavaScript e React.\nDesenvolvimento back-end com NodeJS.\nBanco de dados com Microsoft PL/SQL.\nVersionamento de código com Git.'
  },
  {
    year: '2021 - Atualmente',
    company: 'Círculo Militar de São Paulo',
    title: 'Auxiliar Administrativo II',
    duration: '1 ano',
    details: 'Responsável pelas rotinas administrativas, tais como atendimento telefônico, controles, planilhas e relatórios para os supervisores.'
  },
  {
    year: '2020 - 2021',
    company: 'Círculo Militar de São Paulo',
    title: 'Auxiliar Administrativo III',
    duration: '1 ano e 10 meses',
    details: 'Responsável pelas rotinas administrativas, tais como atendimento telefônico, controles, planilhas e relatórios para os supervisores.'
  },
  {
    year: '2017 - 2020',
    company: 'Círculo Militar de São Paulo',
    title: 'Gandula',
    duration: '3 anos e um mês',
    details: 'Responsável por buscar as bolas que são jogadas para fora da quadra em uma partida de tênis e as repor para que o jogo tenha continuidade.'
  },
  {
    year: '2016 - 2017',
    company: 'Círculo Militar de São Paulo',
    title: 'Aprendiz em Esportes',
    duration: '1 ano',
    details: 'Responsável por buscar as bolas que são jogadas para fora da quadra em uma partida de tênis e as repor para que o jogo tenha continuidade.'
  },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto p-4 py-16 md:pl-20'>
      <h1 className='text-4xl font-bold text-center text-[#001B5E] mb-8'>Trabalhos</h1>
      {jobs.map((job, id) => (
        <WorkItem
          key={id}
          year={job.year}
          company={job.company}
          duration={job.duration}
          title={job.title}
          details={job.details}
        />
      ))}
    </div>
  )
}

export default Work