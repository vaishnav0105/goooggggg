import { useState } from "react";
import GoogleHeader from "./components/GoogleHeader";
import GoogleLogo from "./components/GoogleLogo";
import SearchSection from "./components/SearchSection";
import GoogleFooter from "./components/GoogleFooter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <GoogleHeader />
        <main className="flex-1 flex flex-col justify-center items-center px-4">
          <div className="w-full max-w-2xl">
            <GoogleLogo />
            <SearchSection />
          </div>
        </main>
        <GoogleFooter />
      </div>
    </>
  );
}

export default App;
