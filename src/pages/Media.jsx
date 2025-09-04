import { useState } from 'react';
import { Mail, Rocket, Stars } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AlternativeComingSoon = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      console.log('Submitted email:', email);
    }
  };

  // Rocket launch animation
  const rocketVariants = {
    initial: { y: 0, x: 0 },
    float: {
      y: [0, -20, 0],
      x: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    launch: {
      y: -1000,
      opacity: 0,
      transition: {
        duration: 2,
        ease: "easeIn"
      }
    }
  };

  // Star twinkle animation
  const starVariants = {
    twinkle: {
      opacity: [0.2, 1, 0.2],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center p-6 overflow-hidden relative">
      {/* Animated stars background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
          variants={starVariants}
          animate="twinkle"
          transition={{ delay: Math.random() * 2 }}
        />
      ))}

      <div className="max-w-2xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Animated rocket */}
          <motion.div
            className="flex justify-center mb-8"
            variants={rocketVariants}
            initial="initial"
            animate={submitted ? "launch" : "float"}
          >
            <Rocket className="text-yellow-400 w-16 h-16" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 shadow-lg"
          >
            <motion.h1 
              className="text-4xl font-bold text-white mb-2"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            >
              Blast Off Soon!
            </motion.h1>
            
            <motion.p 
              className="text-blue-200 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Our new platform is launching into orbit soon. Be the first to know!
            </motion.p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-green-500/20 text-green-200 p-4 rounded-lg border border-green-500/30"
                >
                  <p>Success! You'll be the first to know when we launch.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                  >
                    Notify Me
                    <motion.span
                      animate={{ 
                        rotate: isHovered ? 45 : 0,
                        transition: { type: "spring" }
                      }}
                    >
                      <Stars className="w-5 h-5" />
                    </motion.span>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="mt-8 text-blue-300 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p>© {new Date().getFullYear()} Cosmic Creations</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AlternativeComingSoon;