
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import AiPrd from "./pages/AiPrd";
import ProjectManagement from "./pages/ProjectManagement";
import TalentMatching from "./pages/TalentMatching";
import Freelancers from "./pages/Freelancers";
import BecomeFreelancer from "./pages/BecomeFreelancer";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features/ai-prd" element={<AiPrd />} />
          <Route path="/features/project-management" element={<ProjectManagement />} />
          <Route path="/features/talent-matching" element={<TalentMatching />} />
          <Route path="/freelancers" element={<Freelancers />} />
          <Route path="/become-a-freelancer" element={<BecomeFreelancer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
