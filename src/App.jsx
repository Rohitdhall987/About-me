import Avatar from "./components/avatar";
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-700 ">
            About Me
          </h1>
        </motion.div>

        <div className="max-w-6xl mx-auto bg-slate-200 rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-2/5 flex justify-center p-8"
            >
                <Avatar src="profile.jpeg" className="relative z-10" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:w-3/5 p-8"
            >
              <h2 className="font-bold text-3xl md:text-4xl mb-4 text-gray-800">
                Hi, everyone <span className="wave">👋</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                My name is Rohit. I'm a passionate and dedicated aspiring software developer on a mission to become FAANG-ready. With an unshakable work ethic, I commit over 12 hours a day to mastering data structures, algorithms, full-stack development, open source contributions, and communication skills.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I believe that no dream is too big and no goal is out of reach with relentless effort, discipline, and the right mindset. This is not just a journey—it's a commitment to becoming the best version of myself, and I won't stop until I achieve success at the highest level.
              </p>
            </motion.div>
          </div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <blockquote className="relative max-w-3xl mx-auto px-10">
            <div className="text-5xl text-blue-300 absolute top-0 left-0">"</div>
            <p className="text-xl md:text-2xl font-medium text-gray-800 italic">
              My goal is to become a FAANG Software Engineer — and I won't stop until I do.
            </p>
            <div className="text-5xl text-blue-300 absolute bottom-0 right-0">"</div>
          </blockquote>
        </motion.div>
      </div>


    </div>
  );
}

export default App;