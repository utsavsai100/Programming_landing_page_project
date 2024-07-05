import Header from './Header';
import Mid_Page from './Mid_Page';
import Clients from './clients';
import Community from './Community';
import Services from './services';
import Business from './Business'
import Quality from './Quality'
import TimSmith from './TimSmith'
import Marketing from './Marketing'
import Footer from './Footer'
import ThemeToggle from './ThemeToggle';
import { ThemeProvider } from './Theme';
function App() {
  return (
    <ThemeProvider>
   <div className="App bg-white dark:bg-gray-900 text-black dark:text-white">
        <Header />
        <ThemeToggle />
        <Mid_Page />
        <div className="mb-4">
          <Clients />
        </div>
        <Community />
        <Services />
        <Business />
        <Quality />
        <TimSmith />
        <Marketing />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
