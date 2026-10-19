import "./ErrorUi.css";
import ErrorIcon from "../../assets/icons/icon-error.svg";
import RetryIcon from "../../assets/icons/icon-retry.svg";

export function ErrorUi() {
  const handleRetry = () => {
    window.location.reload();
  };
  return (
    <section className="error-section">
      <img className="error-icon" src={ErrorIcon} />
      <p className="smth-went-wrong">Something went wrong</p>
      <p className="error-description">
        We couldn't connect to the server (API error). Please try again in a few
        moments
      </p>
      <button className="retry-btn" onClick={handleRetry}>
        <img src={RetryIcon} />
        <p>Retry</p>
      </button>
    </section>
  );
}
