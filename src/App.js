import { useState } from 'react';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const optionsArray = ["good", "neutral", "bad"];

  const handleGetFeedback = (feedback) => {
    
    switch (feedback) {
      case "good":
        setGood(state => state + 1);
        break;
      case "neutral":
        setNeutral(state => state + 1);
        break;
      case "bad":
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    return bad + neutral + good;
  }

  const countPositiveFeedbackPercentage = () => {
    return `${Number.parseInt(countTotalFeedback() !== 0 ?
      (100 / countTotalFeedback() * good) : 0)}%`;
  }

  return ( 
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsArray}
          onLeaveFeedback={handleGetFeedback}
        />
      </Section>

      <Section title="Statistics">
        {bad !== 0 || neutral !== 0 || good !== 0 ? 
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
          /> :
        <Notification message="There is no feedback!"></Notification>
        }
      </Section>
    </> 
  )
}

export default App;
