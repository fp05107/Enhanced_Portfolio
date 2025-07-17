import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { useCursorTrail } from "@/hooks/use-cursor-trail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useCursorTrail();

  return (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="cursor-trail" id="cursor-trail" />
          <Toaster />
          <Router />
        </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
