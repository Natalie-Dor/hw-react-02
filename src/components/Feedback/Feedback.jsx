export default function Feedback({
  totalFeedback,
  feedback: { good, neutral, bad },
}) {
  return (
    <>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral: {neutral} </li>
        <li>Bad: {bad} </li>
        <li>Total:{totalFeedback} </li>
      </ul>
    </>
  );
}
