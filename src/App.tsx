import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import InitiativesPage from './pages/InitiativesPage'
import KnowledgeCenterPage from './pages/KnowledgeCenterPage'
import DevOpsTopicPage from './pages/DevOpsTopicPage'
import MavenIntegrationDevOpsPage from './pages/MavenIntegrationDevOpsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn/knowledge-center" element={<KnowledgeCenterPage />} />
        <Route path="/learn/knowledge-center/devops/maven-integration" element={<MavenIntegrationDevOpsPage />} />
        <Route path="/learn/knowledge-center/devops" element={<DevOpsTopicPage />} />
        <Route path="/learn/initiatives" element={<InitiativesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
