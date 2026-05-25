function Status({ status }) {
  return (
    <section 
      className={`status status--${status.type}`}
      aria-live="polite"
      aria-atomic="true"
      aria-label={`Game status: ${status.message}`}
    >
      {status.message}
    </section>
  );
}

export default Status;
