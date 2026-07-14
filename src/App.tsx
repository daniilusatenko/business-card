import Sections from "@sections";
import { ScrollToTop } from "@components";
import { ThemeProvider } from "@contexts";
import "@styles/main.scss";

export default function App() {
  return (
    <ThemeProvider>
      <Sections.Header />
      <main>
        <Sections.Profile />
        <Sections.About />
        <Sections.Skills />
        <Sections.Projects />
        <Sections.Stack />
        <Sections.Timeline />
      </main>
      <Sections.Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}
