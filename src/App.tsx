
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomeV2 from "./pages/HomeV2";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import HireWokkah from "./pages/HireWokkah";
import AiPrd from "./pages/AiPrd";
import AiPrdGenerator from "./pages/AiPrdGenerator";
import ProjectManagement from "./pages/ProjectManagement";
import TalentMatching from "./pages/TalentMatching";
import FindTalent from "./pages/FindTalent";
import AiMatching from "./pages/AiMatching";
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
import TalentProfile from "./pages/talent/TalentProfile";
import FAQ from "./pages/FAQ";
import AiNeedsAssessment from "./pages/AiNeedsAssessment";
import ReportNextSteps from "./pages/ReportNextSteps";

// Import the hiring automation pages
import JobDistribution from "./pages/automation/hiring/JobDistribution";
import AIResumeScreening from "./pages/automation/hiring/AIResumeScreening";
import SkillsAssessment from "./pages/automation/hiring/SkillsAssessment";
import InterviewScheduling from "./pages/automation/hiring/InterviewScheduling";
import CandidateCommunication from "./pages/automation/hiring/CandidateCommunication";
import OnboardingPreparation from "./pages/automation/hiring/OnboardingPreparation";

// Create a new QueryClient instance for React Query
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home-v2" element={<HomeV2 />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hire-wokkah" element={<HireWokkah />} />
            <Route path="/solutions/business-automation" element={<BusinessAutomationTools />} />
            <Route path="/solutions/business-automation/marketing" element={<MarketingAutomation />} />
            <Route path="/solutions/business-automation/hr" element={<HRAutomation />} />
            <Route path="/solutions/business-automation/operations" element={<OperationsAutomation />} />
            <Route path="/solutions/business-automation/finance" element={<FinanceAutomation />} />
            <Route path="/solutions/business-automation/customer-service" element={<CustomerServiceAutomation />} />
            <Route path="/solutions/business-automation/manufacturing" element={<ManufacturingAutomation />} />
            <Route path="/solutions/business-automation/amazon" element={<AmazonAutomation />} />
            <Route path="/solutions/business-automation/ppc" element={<PPCAutomation />} />
            <Route path="/solutions/business-automation/hiring" element={<HiringAutomation />} />
            <Route path="/solutions/business-automation/sales" element={<SalesAutomation />} />
            <Route path="/solutions/business-automation/market-research" element={<MarketResearch />} />
            
            {/* Routes for the hiring automation pages */}
            <Route path="/solutions/business-automation/hiring/job-distribution" element={<JobDistribution />} />
            <Route path="/solutions/business-automation/hiring/resume-screening" element={<AIResumeScreening />} />
            <Route path="/solutions/business-automation/hiring/skills-assessment" element={<SkillsAssessment />} />
            <Route path="/solutions/business-automation/hiring/interview-scheduling" element={<InterviewScheduling />} />
            <Route path="/solutions/business-automation/hiring/candidate-communication" element={<CandidateCommunication />} />
            <Route path="/solutions/business-automation/hiring/onboarding-preparation" element={<OnboardingPreparation />} />
            
            <Route path="/features/ai-prd" element={<AiPrd />} />
            <Route path="/features/ai-prd/generator" element={<AiPrdGenerator />} />
            <Route path="/features/project-management" element={<ProjectManagement />} />
            <Route path="/features/talent-matching" element={<TalentMatching />} />
            <Route path="/find-talent" element={<FindTalent />} />
            <Route path="/ai-matching" element={<AiMatching />} />
            <Route path="/talent/:id" element={<TalentProfile />} />
            <Route path="/freelancers" element={<Freelancers />} />
            <Route path="/become-a-freelancer" element={<BecomeFreelancer />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/login" element={<Login />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/ai-needs-assessment" element={<AiNeedsAssessment />} />
            <Route path="/report" element={<ReportNextSteps />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
