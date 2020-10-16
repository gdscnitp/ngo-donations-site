import React, { useState } from 'react';

import faqImg from './images/illustration-woman-online-desktop.svg';
import { GlobalStyle } from './styles/global';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Container, Content } from './styles/styles';

function App() {
  const [selectedQuestion, toggleQuestion] = useState(-1);

  function openQuestion(index) {
    toggleQuestion(selectedQuestion === index ? -1 : index);
  }

  const faqs = getFaqs();

  return (
    <Container>
      <GlobalStyle />
      <Content>
        <div id="img">
          <img src={faqImg} alt="cool" />
        </div>

        <div id="faq-content">
          <h1>FAQ</h1>
          {faqs.map(({ question, answer }, index) => (
            <>
              <button
                key={`item-${index}`}
                className={`item ${selectedQuestion === index ? 'open' : ''}`}
                onClick={() => openQuestion(index)}
              >
                <p className="question">{question}</p>
                <MdKeyboardArrowRight size={20} color="#ff724c" />
                <div
                  className={`item ${
                    selectedQuestion === index ? 'open' : 'answer'
                  }`}
                >
                  <p className="answer">{answer}</p>
                </div>
              </button>
            </>
          ))}
        </div>
      </Content>
    </Container>
  );
}

function getFaqs() {
  const faqs = [
    {
      question: 'How many donations can I do?',
      answer: 'There is no limit of donations. This only depends on your kindness and sympathy with needy people.',
    },
    {
      question: 'What is the maximum file upload size?',
      answer:
        'Not more than 10mb',
    },
    {
      question: 'How do i reset my password?',
      answer: 'Go to your profile and click on reset my password',
    },
    {
      question: 'Can i cancel my subscription?',
      answer: 'As you wish',
    },
    {
      question: 'Is this NGO trusted organisation?',
      answer: 'Yes, you can check NGO's documents varified by government',
    },
  ];
  return faqs;
}

export default App;
