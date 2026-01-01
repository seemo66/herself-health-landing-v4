// main entry point for the app
// imports top-level layout and section components
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
// import GuideSection from './components/GuideSection';
import ServicesSection from './components/ServicesSection';
// import InsuranceSection from './components/InsuranceSection';
import MembershipSection from './components/MembershipSection';
// import FormGuideSectionDesktop from './components/FormGuideSectionDesktop';
import WaitingListSection from './components/WaitingListSection';
import ComparisonSection from './components/ComparisonSection';
import OffersScection from './components/OffersSection';
import LocationSection from './components/LocationsSection';
// import HerselfHealthLogoSection from './components/HerselfHealthLogoSection';
import MembershipDetailsSection from './components/MembershipDetailsSection';
import OurCareSection from './components/OurCareSection';
import NextStepSection from './components/NextStepSection';
import FaqSection from './components/FaqSection';
import Testimonials from './components/Testimonials';

function App() {
  // define the order of sections for easy management
  const sections = [
    HeroSection, // hero section with primary call-to-action
    ServicesSection, // services offered by the company
    MembershipSection, // membership or subscription information
    ComparisonSection, // comparison of services
    OffersScection, // offers promotions
    WaitingListSection, // waiting list or sign-up form
    MembershipDetailsSection,
    OurCareSection,
    Testimonials,
    NextStepSection,
    FaqSection,
    Footer,
    LocationSection,
    // GuideSection, // guide download section
    // InsuranceSection, // insurance information
    // FormGuideSectionDesktop, // desktop version of the form guide section
  ];

  return (
    // container for the entire app, centers content horizontally
    <div className="mx-auto mt-[102px] lg:mt-[78px]">
      {/* site header, usually contains navigation */}
      <Header />

      {/* main content area, semantically marked as main */}
      <main className="max-w-[1728px] mx-auto" role="main">
        {sections.map((Section, index) => (
          // render each section in order
          <Section key={index} />
        ))}
      </main>
    </div>
  );
}

export default App;
