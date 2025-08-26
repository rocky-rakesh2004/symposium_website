import Particles from "../components/Particles"

function Home() {
  return (

    <div className='w-full h-screen relative bg-black flex justify-center items-center'>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="absolute text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          AAA College of Engineering And Technology
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Welcome to our CSE Symposium & cultural fest 🎉
        </p>
      </div>
    </div>
  )
}

export default Home
