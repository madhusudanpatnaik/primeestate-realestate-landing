
import Hero from './components/Hero';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleCards from './components/ArticleCards';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';

import VideoSection from './components/VideoSection';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero />
      <FeaturedArticle />
      <ArticleCards />
      <CallToAction />
      <FAQ />
      
      <VideoSection />
    </div>
  );
}

export default App;