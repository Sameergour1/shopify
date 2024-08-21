// FAQ.jsx
import  { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Is Firebee Safe?',
      answer: 'Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection). Firebee is 3000x less powerful than your average smartphone. Firebee uses an ultra-low signal that is completely safe for home use. The technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested by users for efficacy and safety.'
    },
    {
      question: 'How Does Firebee work?',
      answer: 'Firebee uses safe ultra-low energy magnetic signals to gently nudge you into a different mental state. Every Firebee signal is made by studying real-world magnetic signatures. Did you know caffeine has a unique one-of-a-kind magnetic signature? It’s a relatively unknown fact that every molecule on earth actually has a unique magnetic signature. Firebee, using patented technology, is able to take a magnetic signature and play it back through the Firebee headband. When you use the alert signal with Firebee, you are actually playing back the magnetic signature of caffeine, which our bodies already recognize. Within minutes of feeling the ultra-low magnetic signal of caffeine, our body begins to feel more alert and awake. Firebee signal is 3000 times less powerful than a smartphone and completely safe to use.'
    },
    {
      question: 'Will Firebee Fit on My Head?',
      answer: 'Firebee has a fully adjustable headband that you can adjust to fit comfortably and snugly on your head.'
    },
    {
      question: 'What If I want the signal to stop?',
      answer: 'Firebee is designed to be used on command. If you wish to turn off a signal, the effects wear off within minutes.'
    },
    {
      question: 'How do you charge Firebee?',
      answer: 'Firebee comes with a charging dock and a charging cable. Just set up the charging dock on a nightstand and plug it in.'
    }
  ];

  return (
    <section className="faq bg-white py-8">
      <div className="container mx-auto text-center"> {/* Center text in container */}
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2"> {/* Flex container for heading and + sign */}
                <dt 
                  className="font-medium text-lg cursor-pointer flex items-center" 
                  onClick={() => toggleOpen(index)}
                >
                  {faq.question}
                </dt>
                <span 
                  className={`cursor-pointer ${openIndex === index ? 'text-red-600' : 'text-[#3F3631]'} text-3xl font-bold`} // Updated color and size
                >
                  {openIndex === index ? '–' : '+'}
                </span> {/* Stylish and larger + sign */}
              </div>
              <hr className="border-gray-300 my-2" /> {/* Horizontal line */}
              {openIndex === index && (
                <dd className="text-gray-700 mt-2">
                  {faq.answer}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
