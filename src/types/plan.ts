// Een interface beschrijft de vorm van een object: welke velden het heeft en van welk type.
// Deze velden zijn precies hetzelfde als `PlanResponse` in de backend.
export interface Plan {
  id: number
  name: string
  monthly_price: number
  max_profiles: number
}
