import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Clock, AlertCircle } from 'lucide-react';
import { VideoChallenge } from '../../types/challengeTypes';

interface VideoListeningChallengeProps {
  challenge: VideoChallenge;
  onVideoComplete: () => void;
  onVideoStart?: () => void;
}

const VideoListeningChallenge: React.FC<VideoListeningChallengeProps> = ({
  challenge,
  onVideoComplete,
  onVideoStart
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      if (!hasStarted) {
        setHasStarted(true);
        onVideoStart?.();
      }
    }
  };

  const handlePause = () => {
    if (videoRef.current && challenge.video.allowPause) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setHasEnded(true);
    onVideoComplete();
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startChallenge = () => {
    setShowInstructions(false);
    setTimeout(() => handlePlay(), 500);
  };

  if (showInstructions) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="emoji-card text-center">
          <div className="text-6xl mb-4">🎧</div>
          <h3 className="text-2xl font-bold mb-4">{challenge.title}</h3>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {challenge.description}
          </p>
        </div>

        <div className="emoji-card">
          <h4 className="text-lg font-semibold mb-4 text-blue-600">📋 Challenge Instructions</h4>
          <ul className="space-y-3">
            {challenge.instructions.map((instruction, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                  {index + 1}
                </span>
                <span className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {instruction}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="emoji-card">
          <h4 className="text-lg font-semibold mb-4 text-amber-600">⚠️ Important Notes</h4>
          <div className="space-y-2">
            <p className="text-base text-gray-700 dark:text-gray-300">
              • You cannot pause or rewind the video once it starts
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              • Pay close attention to details like dates, times, and specific requirements
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              • You'll be tested immediately after the video ends
            </p>
          </div>
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startChallenge}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            🚀 Start Listening Challenge
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Video Player */}
      <div className="emoji-card">
        <div className="aspect-video bg-black rounded-xl overflow-hidden relative">
          <video
            ref={videoRef}
            src={challenge.video.url}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
            controls={challenge.video.showControls}
          >
            Your browser does not support the video tag.
          </video>

          {/* Custom Controls Overlay (if controls disabled) */}
          {!challenge.video.showControls && (
            <div className="absolute inset-0 flex items-center justify-center">
              {!isPlaying && !hasEnded && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePlay}
                  className="w-20 h-20 bg-blue-500/80 hover:bg-blue-500 rounded-full flex items-center justify-center text-white shadow-2xl"
                >
                  <Play size={32} fill="white" />
                </motion.button>
              )}
            </div>
          )}

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/50">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
              style={{ width: `${(currentTime / challenge.video.duration) * 100}%` }}
            />
          </div>

          {/* Time Display */}
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            <Clock size={14} className="inline mr-1" />
            {formatTime(currentTime)} / {formatTime(challenge.video.duration)}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">{challenge.video.title}</h3>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {challenge.video.description}
          </p>
        </div>
      </div>

      {/* Status Message */}
      {hasStarted && !hasEnded && (
        <div className="emoji-card text-center">
          <div className="flex items-center justify-center gap-3 text-blue-600">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-base font-medium">Listen carefully - you'll be tested on this content!</span>
          </div>
        </div>
      )}

      {hasEnded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="emoji-card text-center"
        >
          <div className="text-4xl mb-3">✅</div>
          <h3 className="text-lg font-semibold mb-2 text-green-600">Video Complete!</h3>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Now let's test your active listening skills with comprehension questions.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default VideoListeningChallenge;





