import FaqCard, { FaqProps } from "../components/FaqCard";

const Faqs = [
  {
    title: "What is  paydestal?",
    subtext:
      "We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences.",
  },
  {
    title: "Is it possible to integrate plugin ?",
    subtext:
      "We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences.",
  },
  {
    title: "What services do you offer?",
    subtext:
      "We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences.",
  },
  {
    title: "Do you offer banking services?",
    subtext:
      "We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences.",
  },
  {
    title: "What do i need to get started?",
    subtext:
      "We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences.",
  },
  {
    title: "Where is Paydestal located?",
    subtext:
      "We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences.",
  },
];

const FAQs = () => {
  return (
    <section className="body_container">
        <div className="text-center ">
            <p>If you have a question, we have an answer</p>
            <h1 className="header_typography text-3xl md:text-4xl md:leading-relaxed">Frequently Asked Questions</h1>
            <p className="info-text py-1">Get answers to all questions you have and boost your knowledge on our services.</p>
        </div>
      {Faqs.map(({ title, subtext }: FaqProps) => (
        <div key={title}>
          <FaqCard title={title} subtext={subtext} />
        </div>
      ))}
    </section>
  );
};

export default FAQs;
