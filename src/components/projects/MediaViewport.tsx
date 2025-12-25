import { motion } from 'motion/react';
import { useState } from 'react';

interface MediaViewportProps {
  thumbnail: string;
  title: string;
  videoUrl?: string;
}

function MediaViewport({ thumbnail, title, videoUrl }: MediaViewportProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handlePlayClick = () => {
    if (videoUrl) {
      setIsPlaying(true);
    }
  };

  // Extract YouTube video ID if it's a YouTube URL
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="relative aspect-video bg-primary border border-accent-blue/30 overflow-hidden">
      {isPlaying && videoUrl ? (
        // Video Player
        <div className="absolute inset-0">
          {getYouTubeId(videoUrl) ? (
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeId(videoUrl)}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={videoUrl}
              className="w-full h-full object-cover"
              autoPlay
              controls
            />
          )}
        </div>
      ) : (
        <>
          {/* Thumbnail / Placeholder */}
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
              <div className="text-center">
                <div className="text-3xl text-accent-blue/30 mb-2">[//]</div>
                <div className="text-[8px] text-accent-blue/50 tracking-wider">
                  VISUAL DATA UNAVAILABLE
                </div>
              </div>
            </div>
          ) : (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover grayscale-[30%]"
              onError={() => setImageError(true)}
            />
          )}

          {/* Scanline Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(52,73,94,0.4) 2px, rgba(52,73,94,0.4) 4px)',
            }}
          />

          {/* Moving Scanline */}
          <motion.div
            className="absolute left-0 right-0 h-4 bg-linear-to-b from-transparent via-accent-gold/10 to-transparent pointer-events-none"
            animate={{ y: ['-100%', '500%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          {/* Video Play Button Overlay */}
          {videoUrl && (
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-primary/50 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-accent-gold/20 border border-accent-gold clip-chamfer-sm">
                <span className="text-accent-gold text-lg">▶</span>
                <span className="text-[10px] text-accent-gold tracking-[0.2em]">
                  PLAY_STREAM
                </span>
              </div>
            </button>
          )}

          {/* Corner Technical Markers */}
          <div className="absolute top-2 left-2 text-[7px] text-accent-blue/50 font-mono">
            VIS.01
          </div>
          <div className="absolute bottom-2 right-2 text-[7px] text-accent-blue/50 font-mono">
            {videoUrl ? 'VID_AVAIL' : 'STATIC'}
          </div>
        </>
      )}
    </div>
  );
}

export default MediaViewport;
