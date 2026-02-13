import Header from "@/view/Header";
import StudyPlanner from "@/view/StudyPlanner";
import Footer from "@/view/Footer";

function App() {
  console.log("App()");
  return (
    <div className="app">
    <Header />
    <StudyPlanner />
    <Footer />
    </div>
  );
}

export default App;
