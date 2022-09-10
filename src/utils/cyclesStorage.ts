import storage from '../infra/storage';
import { Cycle } from '../reducers/cycles/reducer';

const CYCLES_KEY_V1 = '@ignite-timer:cycles-state:1.0.0'

interface CyclesStorage {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function saveCycles(cycles: Cycle[], activeCycleId: string | null) {
  storage.save(CYCLES_KEY_V1, cyclesToJson(cycles, activeCycleId))
}

export function getCycles(): CyclesStorage {
  return jsonToCycles(storage.get(CYCLES_KEY_V1) || '')
}

function cyclesToJson(cycles: Cycle[], activeCycleId: string | null) {
  return JSON.stringify({ cycles, activeCycleId })
}

function jsonToCycles(content: string): CyclesStorage {
  const json = JSON.parse(content) || undefined;
  let cycles = []
  try {
    cycles = json?.cycles?.map((cycle: any) => {
      return {
        ...cycle,
        startDate: new Date(cycle.startDate),
        interruptedDate: cycle.interruptedDate ? new Date(cycle.interruptedDate) : null,
        finishedDate: cycle.finishedDate ? new Date(cycle.finishedDate) : null
      }
    })
  } catch (err) {
  }

  return {
    cycles,
    activeCycleId: json?.activeCycleId || null
  }
}