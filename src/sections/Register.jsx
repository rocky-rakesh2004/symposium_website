import SectionWrapper from "../components/SectionWrapper";

const Register = () => {
  return (
    <SectionWrapper id="register" className="bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Register</h2>
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
