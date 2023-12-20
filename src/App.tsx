import { MainMenuScreen } from './Screens'
import AppThemeProvider from './providers/app-theme-provider'

function App() {
  return (
    <AppThemeProvider>
      <MainMenuScreen />
    </AppThemeProvider>
  )
}

export default App
