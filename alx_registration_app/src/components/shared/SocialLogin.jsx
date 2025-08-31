import { motion } from 'framer-motion';

const SocialLogin = () => (
  <div className="mt-6">
    <p className="text-center text-sm mb-4">Or sign in with</p>
    <div className="flex space-x-4">
      <motion.button
        className="flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-transform duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => alert('Google login not implemented')}
      >
        Google
      </motion.button>
      <motion.button
        className="flex-1 bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition-transform duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => alert('Facebook login not implemented')}
      >
        Facebook
      </motion.button>
    </div>
  </div>
);

export default SocialLogin;