const WelcomeMsg = ({ msg }) => {
  return (
    <>
      <p className="d-flex justify-content-center fs-4 fw-medium text-secondary">
        {msg}
      </p>
    </>
  );
};
export default WelcomeMsg;
