import type { Plan } from '../types/plan'

// De props van een component beschrijf je ook met een interface.
interface PlanCardProps {
  plan: Plan
}

// Een component is een functie die HTML (JSX) teruggeeft. De naam begint met een hoofdletter.
export function PlanCard({ plan }: PlanCardProps) {
  return (
    <article className="card">
      <h3 className="card-title">{plan.name}</h3>
      <p className="card-meta">€ {plan.monthly_price.toFixed(2)} per maand</p>
      <p className="card-meta">Maximaal {plan.max_profiles} profielen</p>
    </article>
  )
}
