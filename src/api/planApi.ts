import { API_URL } from './config'
import type { Plan } from '../types/plan'

// Haalt alle abonnementen op bij GET /plans.
// Alle communicatie met de backend staat in de map api, niet in je components.
export async function fetchPlans(): Promise<Plan[]> {
  const response = await fetch(`${API_URL}/plans`)

  // fetch geeft bij een 404 of 500 géén fout. Dat moet je zelf controleren.
  if (!response.ok) {
    throw new Error(`De backend gaf status ${response.status}`)
  }

  // TypeScript controleert níet of de JSON echt een Plan[] is. Dat beloof jij hier.
  return response.json()
}
