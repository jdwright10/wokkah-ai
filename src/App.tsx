
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import AlternativeIndex from "./pages/AlternativeIndex";
import HomeV3 from "./pages/HomeV3";
import HomeV4 from "./pages/HomeV4";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import HireWokkah from "./pages/HireWokkah";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import BusinessAutomationTools from "./pages/BusinessAutomationTools";
import FAQ from "./pages/FAQ";
import AiNeedsAssessment from "./pages/AiNeedsAssessment";
import ReportNextSteps from "./pages/ReportNextSteps";
import VettingProcess from "./pages/VettingProcess";
import UshiftProCaseStudy from "./pages/case-studies/UshiftPro";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";

// Create a new QueryClient instance for React Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/alt" element={<AlternativeIndex />} />
            <Route path="/v3" element={<HomeV3 />} />
            <Route path="/v4" element={<HomeV4 />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hire-wokkah" element={<HireWokkah />} />
            <Route path="/solutions/business-automation" element={<BusinessAutomationTools />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai-needs-assessment" element={<AiNeedsAssessment />} />
            <Route path="/report" element={<ReportNextSteps />} />
            <Route path="/vetting-process" element={<VettingProcess />} />
            <Route path="/case-studies/ushift-pro" element={<UshiftProCaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
