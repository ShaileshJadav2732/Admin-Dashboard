interface LoaderProps {
  size?: "small" | "medium" | "large";
}

const Loader = ({ size = "large" }: LoaderProps) => {
  return (
    <section
      className="loader"
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <div className={`loader-spinner ${size}`}>
        <span className="sr-only">Loading...</span>
      </div>
    </section>
  );
};

export default Loader;
