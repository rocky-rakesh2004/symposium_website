import SectionWrapper from "../components/SectionWrapper";

const Register = () => {
  return (
    <SectionWrapper id="register" className="bg-black text-white">
           <h1
        className="text-4xl md:text-6xl font-extrabold text-center mb-12"
        style={{
          fontFamily: "'Cinzel Decorative', serif",
          textShadow:
            "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 40px rgba(0, 255, 255, 0.5)",
        }}
      >
        Register
      </h1>
      <form className="bg-gray-900 p-6 rounded-xl shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
        />
        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded">
          Submit
        </button>
      </form>
    </SectionWrapper>
  );
};

export default Register;
