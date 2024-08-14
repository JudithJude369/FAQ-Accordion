import mobileIcon from './assets/background-pattern-mobile.svg';
import desktopIcon from './assets/background-pattern-desktop.svg';
import starIcon from './assets/icon-star.svg';
import AccordionList from './AccordionList';
import { useState } from 'react';

const faq = [
  {
    id: 0,
    question: 'What is Frontend Mentor, and how will it help me?',
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 1,
    question: 'Is Frontend Mentor free?',
    answer:
      'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing    access to a range of projects suitable for all skill levels.',
  },
  {
    id: 2,
    question: 'Can I use Frontend Mentor projects in my portfolio?',
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: 3,
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const Accordion = () => {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <main>
      <img src={mobileIcon} alt="mobile-pattern" className="mobile-bg" />
      <img src={desktopIcon} alt="desktop-pattern" className="desktop-bg" />
      <div className="card-wrapper">
        <section className="card">
          <div className="header-flex">
            <img src={starIcon} alt="logo" />
            <h1>FAQs</h1>
          </div>
          <ul>
            {faq.map((faq, i) => (
              <AccordionList
                data={faq}
                key={faq.id}
                num={i}
                currOpen={currOpen}
                onOpen={setCurrOpen}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Accordion;
