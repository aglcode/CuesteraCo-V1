import React from 'react';
import { Layers } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Layers className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-2" />
      <div>
        <span className="font-display font-bold text-xl text-gray-900 dark:text-white">Cuestera</span>
        <span className="font-display text-primary-600 dark:text-primary-400 font-bold text-xl">Co.</span>
      </div>
    </div>
  );
};

export default Logo;