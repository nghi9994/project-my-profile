import {
  AboutPage,
  AppContainer,
  ContactPage,
  HomePage,
  Navbar,
  SkillsPage,
} from "@/components";

function App() {
  return (
    <AppContainer>
      <Navbar />
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ContactPage />
    </AppContainer>
  );
}

export default App;
