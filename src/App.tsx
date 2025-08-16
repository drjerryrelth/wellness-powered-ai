import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Templates from "./pages/Templates";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import Progress from "./pages/Progress";
import Micronutrients from "./pages/Micronutrients";
import TodaysMeals from "./pages/TodaysMeals";
import NotFound from "./pages/NotFound";
import FoundersPro from "./pages/FoundersPro";
import Checkout from "./pages/Checkout";
import Upsell1 from "./pages/Upsell1";
import Upsell2 from "./pages/Upsell2";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Hipaa from "./pages/Hipaa";
import Disclaimer from "./pages/Disclaimer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/micronutrients" element={<Micronutrients />} />
          <Route path="/meals" element={<TodaysMeals />} />
          
          {/* Funnel Pages */}
          <Route path="/founders-pro" element={<FoundersPro />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/upsell-1" element={<Upsell1 />} />
          <Route path="/upsell-2" element={<Upsell2 />} />
          <Route path="/thank-you" element={<ThankYou />} />
          
          {/* Legal Pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/hipaa" element={<Hipaa />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
