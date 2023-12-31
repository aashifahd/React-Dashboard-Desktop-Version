import "./app.css";
import Dashboard from "./components/Dashboard";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <div className="w-full flex">
        {/* Navigation Bar */}
        <NavigationBar />

        {/* Main Content */}
        <main className="grow">
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App;
