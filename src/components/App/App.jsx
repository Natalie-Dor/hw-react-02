import { useState } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  //   const handleClick = () => {
  //     setFeedback(clicks + 1);
  //   };
  //   setFeedback();
  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      <Feedback feedback={feedback} totalFeedback={totalFeedback} />
    </div>
  );
}
// feedback={feedback}
