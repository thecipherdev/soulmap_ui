import { createFileRoute } from '@tanstack/react-router'
import MapBox from '@/components/Map'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="h-full">
      <MapBox />
    </div>
  )

}
