import { useEffect, useState } from 'react'
import { fetchPlans } from '../api/planApi'
import type { Plan } from '../types/plan'
import { PlanCard } from './PlanCard'

export function PlanList() {
  // State: gegevens die kunnen veranderen. Verandert state, dan tekent React het component opnieuw.
  const [plans, setPlans] = useState<Plan[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // useEffect met een lege lijst [] draait één keer, nadat het component op het scherm staat.
  useEffect(() => {
    async function loadPlans() {
      try {
        const data = await fetchPlans()
        setPlans(data)
      } catch {
        setError('Kon de abonnementen niet ophalen. Draait de backend?')
      } finally {
        setLoading(false)
      }
    }

    loadPlans()
  }, [])

  if (loading) {
    return <p className="message">Abonnementen laden...</p>
  }

  if (error) {
    return <p className="message message-error">{error}</p>
  }

  return (
    <div className="card-grid">
      {/* Bij een lijst geef je elk element een unieke key, zodat React ze uit elkaar houdt. */}
      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  )
}
