import React from 'react';

const DebugAI: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">AI Character Debug Test</h1>
      
      {/* Simple AI Robot */}
      <div className="mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-2xl">🤖</span>
        </div>
        <p className="mt-2 text-gray-600">AI Robot should appear above</p>
      </div>

      {/* Simple Module Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: 'COMM', icon: '💬', color: 'from-blue-500 to-blue-700' },
          { name: 'DATA', icon: '📊', color: 'from-green-500 to-green-700' },
          { name: 'HEALTH', icon: '❤️', color: 'from-red-500 to-red-700' },
          { name: 'DESIGN', icon: '🎨', color: 'from-pink-500 to-pink-700' },
          { name: 'CRITICAL', icon: '🔍', color: 'from-orange-500 to-orange-700' },
          { name: 'PROMPT', icon: '🤖', color: 'from-purple-500 to-purple-700' },
          { name: 'ADAPTIVE', icon: '🧠', color: 'from-teal-500 to-teal-700' },
          { name: 'TEAM', icon: '👥', color: 'from-indigo-500 to-indigo-700' }
        ].map((module, index) => (
          <div
            key={index}
            className={`
              rounded-xl p-4 shadow-lg cursor-pointer hover:scale-105 transition-transform
              bg-gradient-to-br ${module.color}
            `}
            onClick={() => alert(`Clicked ${module.name}`)}
          >
            <div className="text-4xl mb-2 text-center">
              {module.icon}
            </div>
            <h3 className="text-sm font-bold text-white text-center">
              {module.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-green-100 rounded-lg">
        <p className="text-green-800">
          ✅ If you can see this, the basic setup is working!<br/>
          ✅ If you can see the robot and modules, the AI character is working!<br/>
          ✅ If you can click modules and see alerts, the interaction is working!
        </p>
      </div>
    </div>
  );
};

export default DebugAI;


