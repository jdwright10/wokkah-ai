
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import AiPrd from "./pages/AiPrd";
import AiPrdGenerator from "./pages/AiPrdGenerator";
import ProjectManagement from "./pages/ProjectManagement";
import TalentMatching from "./pages/TalentMatching";
import FindTalent from "./pages/FindTalent";
import Freelancers from "./pages/Freelancers";
import BecomeFreelancer from "./pages/BecomeFreelancer";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Comparison from "./pages/Comparison";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import BusinessAutomationTools from "./pages/BusinessAutomationTools";
import MarketingAutomation from "./pages/automation/MarketingAutomation";
import HRAutomation from "./pages/automation/HRAutomation";
import OperationsAutomation from "./pages/automation/OperationsAutomation";
import FinanceAutomation from "./pages/automation/FinanceAutomation";
import CustomerServiceAutomation from "./pages/automation/CustomerServiceAutomation";
import ManufacturingAutomation from "./pages/automation/ManufacturingAutomation";
import AmazonAutomation from "./pages/automation/AmazonAutomation";
import PPCAutomation from "./pages/automation/PPCAutomation";
import HiringAutomation from "./pages/automation/HiringAutomation";
import SalesAutomation from "./pages/automation/SalesAutomation";
import MarketResearch from "./pages/automation/MarketResearch";

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
          <Route path="/services/business-automation" element={<BusinessAutomationTools />} />
          <Route path="/services/business-automation/marketing" element={<MarketingAutomation />} />
          <Route path="/services/business-automation/hr" element={<HRAutomation />} />
          <Route path="/services/business-automation/operations" element={<OperationsAutomation />} />
          <Route path="/services/business-automation/finance" element={<FinanceAutomation />} />
          <Route path="/services/business-automation/customer-service" element={<CustomerServiceAutomation />} />
          <Route path="/services/business-automation/manufacturing" element={<ManufacturingAutomation />} />
          <Route path="/services/business-automation/amazon" element={<AmazonAutomation />} />
          <Route path="/services/business-automation/ppc" element={<PPCAutomation />} />
          <Route path="/services/business-automation/hiring" element={<HiringAutomation />} />
          <Route path="/services/business-automation/sales" element={<SalesAutomation />} />
          <Route path="/services/business-automation/market-research" element={<MarketResearch />} />
          <Route path="/features/ai-prd" element={<AiPrd />} />
          <Route path="/features/ai-prd/generator" element={<AiPrdGenerator />} />
          <Route path="/features/project-management" element={<ProjectManagement />} />
          <Route path="/features/talent-matching" element={<TalentMatching />} />
          <Route path="/find-talent" element={<FindTalent />} />
          <Route path="/freelancers" element={<Freelancers />} />
          <Route path="/become-a-freelancer" element={<BecomeFreelancer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
