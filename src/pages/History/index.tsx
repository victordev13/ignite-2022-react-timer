import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { Cycle } from '../../reducers/cycles/reducer'
import { HistoryContainer, HistoryList, Status } from './styles'

export default function History() {
  const { cycles } = useContext(CyclesContext)
  const orderedCycles = (cycles || [])
    .sort((a: Cycle, b: Cycle) => b.startDate.getTime() - a.startDate.getTime())

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </thead>
          <tbody>
            {orderedCycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <Status type="completed">Concluído</Status>
                  )}
                  {cycle.interruptedDate && (
                    <Status type="interrupted">Interrompido</Status>
                  )}
                  {!cycle.interruptedDate && !cycle.finishedDate && (
                    <Status type="inProgress">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
