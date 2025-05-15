import { Router, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useState, useEffect } from "react";
import { queryClient } from "./lib/queryClient";

// Custom hook for hash-based routing
function useHashLocation(): [string, (to: string) => void] {
  const [location, setLocation] = useState(window.location.hash.replace("#", "") || "/");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "/";
      setLocation(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
  };

  return [location, navigate];
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router hook={useHashLocation}>
          <Toaster />
          <Route path="/" component={Home} />
          <Route path="/:rest*" component={NotFound} />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
