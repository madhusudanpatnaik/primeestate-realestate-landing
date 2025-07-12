import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    setHeights(
      answerRefs.current.map((ref) => (ref ? ref.scrollHeight : 0))
    );
  }, []);

  const faqs = [
    {
      question: "How do I get started with luxury real estate investment?",
      answer: "Begin by researching prime locations, understanding market trends, and consulting with our experienced agents. We recommend starting with properties in established luxury neighborhoods with strong appreciation potential."
    },
    {
      question: "What factors determine luxury property values?",
      answer: "Location, architectural design, premium amenities, neighborhood prestige, and scarcity are key factors. Properties with unique features, waterfront access, or historic significance typically command higher values."
    },
    {
      question: "Do you provide property management services?",
      answer: "Yes, we offer comprehensive property management including maintenance, tenant screening, rent collection, and investment optimization. Our team ensures your luxury properties maintain their value and generate optimal returns."
    },
    {
      question: "How long does the luxury home buying process take?",
      answer: "The timeline varies but typically ranges from 30-90 days depending on financing, inspections, and negotiations. High-end properties may require additional due diligence for unique features or historic significance."
    },
    {
      question: "What financing options are available for luxury properties?",
      answer: "We work with private lenders, portfolio lenders, and specialized luxury mortgage products. Options include jumbo loans, interest-only mortgages, and asset-based lending for ultra-high-net-worth clients."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 font-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about luxury real estate
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-[300] text-black pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              <div
                ref={el => (answerRefs.current[index] = el)}
                style={{
                  maxHeight: openIndex === index ? heights[index] : 0,
                  opacity: openIndex === index ? 1 : 0,
                  transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s',
                  overflow: 'hidden',
                }}
                aria-hidden={openIndex !== index}
              >
                <div className="px-6 pb-5 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;