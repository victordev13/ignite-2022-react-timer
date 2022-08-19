import styled from 'styled-components'

export const HistoryContainer = styled.div`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child,
      &:last-child {
        border-top-left-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;

      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const COLORS_OF_TYPES = {
  inProgress: 'yellow-500',
  interrupted: 'red-500',
  completed: 'green-500',
} as const

interface StatusProps {
  type: keyof typeof COLORS_OF_TYPES
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${(props) => props.theme[COLORS_OF_TYPES[props.type]]};
  }
`
