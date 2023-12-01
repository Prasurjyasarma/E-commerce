import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.componet";
import Auth from "./routes/Auth/auth.component";
import AboutSection from "./routes/about-section/about-section.component";
import StudioSection from "./routes/studio-section/studio-section.component";
import Shop from "./routes/shop-section/shop.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about-section" element={<AboutSection />} />
        <Route path="studio-section" element={<StudioSection />} />
        <Route path="sign-in" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
