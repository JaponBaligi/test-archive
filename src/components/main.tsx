import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; 
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import "@/styles/globals.css";

export default function StateManager() {
  const [stage, setStage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (stage === 3) {
      setTimeout(() => window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), 30);
    }
  }, [stage]);

  const handleClick = () => {
    if (stage < 3) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStage(stage + 1);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {stage === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-3xl font-bold mb-4">Ücretsiz Premium Hesap Kazanın!</h1>
          <p className="text-gray-400 mb-6">Hesabınızı doğrulamak için aşağıdaki butona tıklayın.</p>
          <Button onClick={handleClick} className="bg-blue-600 hover:bg-blue-700 text-white">
            Doğrula
          </Button>
        </motion.div>
      )}
      {stage === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-3xl font-bold mb-4">Hesap doğrulanıyor...</h1>
          <Loader2 className="animate-spin text-blue-500 w-12 h-12" />
        </motion.div>
      )}
      {stage === 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-3xl font-bold mb-4">Son bir adım kaldı!</h1>
          <p className="text-gray-400 mb-6">Lütfen aşağıdaki butona tıklayın.</p>
          <Button onClick={handleClick} className="bg-green-600 hover:bg-green-700 text-white">
            Devam Et
          </Button>
        </motion.div>
      )}
      {stage === 3 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-3xl font-bold mb-4">Yükleniyor...</h1>
          <Loader2 className="animate-spin text-red-500 w-12 h-12" />
        </motion.div>
      )}
    </div>
  );
}
