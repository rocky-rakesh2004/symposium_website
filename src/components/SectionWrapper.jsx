const SectionWrapper = ({ id, children, className }) => {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col justify-center items-center px-6 py-16 ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
