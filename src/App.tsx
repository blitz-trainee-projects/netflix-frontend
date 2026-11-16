import { PlanList } from './components/PlanList'

function App() {
  return (
    <main className="app">
      <h1 className="app-title">Netflix</h1>

      <section className="section">
        <h2 className="section-title">Abonnementen</h2>
        <PlanList />
      </section>

      {/* Hier komen vanaf laag 1 je films. */}
    </main>
  )
}

export default App
