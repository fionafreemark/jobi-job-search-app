// Modules

// Pages

// Components
import CategoriesSection from "../Components/CategoriesSection";
import ClientSection from "../Components/ClientSection";
import CollaborationSection from "../Components/CollaborationSection";
import GetStartedSection from "../Components/GetStartedSection";
import IconSection from "../Components/IconSection";
import JobiGuidesSection from "../Components/JobiGuidesSection"
import JobPortal from "../Components/JobPortal";
import ListingSection from "../Components/ListingSection";
import TalentSection from "../Components/TalentSection";
import TrendingSection from "../Components/TrendingSection";


const Index = () => {
  return (
    <>
      <IconSection />
      <CategoriesSection />
      <TrendingSection />
      <ListingSection />
      <GetStartedSection />
      <TalentSection />
      <ClientSection />
      <JobiGuidesSection />
      <CollaborationSection />
      <JobPortal />
    </>
  )
}

export default Index;