export default function Options({
  updateFeedback,
  totalFeedback,
  handleReset,
}) {
  return (
    <>
      {/* <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button> */}
      <button onClick={() => updateFeedback('good')} type="button">
        Good
      </button>
      <button onClick={() => updateFeedback('neutral')} type="button">
        Neutral
      </button>
      <button onClick={() => updateFeedback('bad')} type="button">
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={handleReset} type="button">
          Reset
        </button>
      )}
    </>
  );
}
