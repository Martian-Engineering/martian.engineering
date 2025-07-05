'use client';

import styles from '@/components/MarsMatrixLoader.module.scss';

import * as React from 'react';

interface MarsMatrixLoaderProps {
  rows?: number;
  direction?: undefined | 'top-to-bottom' | 'left-to-right';
  mode?: undefined | 'greek' | 'katakana';
}

// TODO(jimmylee)
// Move these constants into a separate file
// Dynamically compute these constants since we're going to
// Support t-shirt sizes for the system.
const LINE_HEIGHT = 20;
const CHARACTER_WIDTH = 9.6;

function onTextGeneration({ mode = 'greek' }) {
  if (mode === 'greek') {
    const isUppercase = Math.random() < 0.5;

    return String.fromCharCode(isUppercase ? 0x0391 + Math.floor(Math.random() * (0x03a9 - 0x0391 + 1)) : 0x03b1 + Math.floor(Math.random() * (0x03c9 - 0x03b1 + 1)));
  }

  if (mode === 'katakana') {
    const japaneseRanges = [{ start: 0x30a0, end: 0x30ff }];

    const allJapaneseCharacters = japaneseRanges.flatMap((range) => Array.from({ length: range.end - range.start + 1 }, (_, i) => range.start + i));

    const randomJapaneseCharacter = allJapaneseCharacters[Math.floor(Math.random() * allJapaneseCharacters.length)];
    return String.fromCharCode(randomJapaneseCharacter);
  }

  return '0';
}

const MarsMatrixLoader: React.FC<MarsMatrixLoaderProps> = ({ rows = 25, direction = 'top-to-bottom', mode = 'greek' }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resizeCanvas = () => {
      const parentWidth = parent.clientWidth;
      const parentHeight = rows * LINE_HEIGHT;
      
      // Make it square for a circle
      const size = Math.min(parentWidth, parentHeight);

      const dpr = window.devicePixelRatio || 1;

      canvas.style.width = size + 'px';
      canvas.style.height = size + 'px';
      canvas.width = Math.floor(size * dpr);
      canvas.height = Math.floor(size * dpr);

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [rows]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let interval: number;

    const drawMatrix = () => {
      const w = canvas.width;
      const h = canvas.height;
      const size = Math.min(w, h);
      const radius = size / 2;
      const centerX = w / 2;
      const centerY = h / 2;

      if (direction === 'top-to-bottom') {
        const cols = Math.floor(w / CHARACTER_WIDTH);
        const ypos: number[] = Array(cols).fill(0);

        const matrix = () => {
          const themeTextColor = getComputedStyle(document.body).getPropertyValue('--theme-text').trim();
          const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family-mono').trim();

          // Create circular clipping mask
          ctx.save();
          ctx.beginPath();
          ctx.arc(centerX / window.devicePixelRatio, centerY / window.devicePixelRatio, radius / window.devicePixelRatio, 0, Math.PI * 2);
          ctx.clip();

          // Add reddish tint for Mars effect
          ctx.globalCompositeOperation = 'destination-out';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.fillRect(0, 0, w, h);
          ctx.textBaseline = 'top';
          ctx.font = `16px ${fontFamily}`;

          ctx.globalCompositeOperation = 'source-over';

          ypos.forEach((y, ind) => {
            const text = onTextGeneration({ mode });
            const x = ind * CHARACTER_WIDTH;
            
            // Check if position is within circle
            const dx = (x + CHARACTER_WIDTH/2) - centerX / window.devicePixelRatio;
            const dy = y - centerY / window.devicePixelRatio;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance <= radius / window.devicePixelRatio) {
              // Add Mars-like red tint randomly
              if (Math.random() > 0.7) {
                ctx.fillStyle = '#ff6b6b';
              } else if (Math.random() > 0.5) {
                ctx.fillStyle = '#cc4444';
              } else {
                ctx.fillStyle = themeTextColor;
              }
              ctx.fillText(text, x, y);
            }

            if (y > h + Math.random() * 10000) {
              ypos[ind] = 0;
            } else {
              ypos[ind] = y + LINE_HEIGHT;
            }
          });

          ctx.restore();
        };

        interval = window.setInterval(matrix, 50);
      } else if (direction === 'left-to-right') {
        const totalRows = rows; // Use rows directly for total rows
        const xpos: number[] = Array(totalRows).fill(0);

        const matrix = () => {
          const themeTextColor = getComputedStyle(document.body).getPropertyValue('--theme-text').trim();
          const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family-mono').trim();

          // Create circular clipping mask
          ctx.save();
          ctx.beginPath();
          ctx.arc(centerX / window.devicePixelRatio, centerY / window.devicePixelRatio, radius / window.devicePixelRatio, 0, Math.PI * 2);
          ctx.clip();

          ctx.globalCompositeOperation = 'destination-out';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.fillRect(0, 0, w, h);
          ctx.textBaseline = 'top';
          ctx.font = `16px ${fontFamily}`;

          ctx.globalCompositeOperation = 'source-over';

          xpos.forEach((x, ind) => {
            const text = onTextGeneration({ mode });
            const y = ind * LINE_HEIGHT;
            
            // Check if position is within circle
            const dx = x - centerX / window.devicePixelRatio;
            const dy = (y + LINE_HEIGHT/2) - centerY / window.devicePixelRatio;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance <= radius / window.devicePixelRatio) {
              // Add Mars-like red tint randomly
              if (Math.random() > 0.7) {
                ctx.fillStyle = '#ff6b6b';
              } else if (Math.random() > 0.5) {
                ctx.fillStyle = '#cc4444';
              } else {
                ctx.fillStyle = themeTextColor;
              }
              ctx.fillText(text, x, y);
            }

            if (x > w + Math.random() * 10000) {
              xpos[ind] = 0;
            } else {
              xpos[ind] = x + CHARACTER_WIDTH;
            }
          });

          ctx.restore();
        };

        interval = window.setInterval(matrix, 50);
      }
    };

    drawMatrix();

    return () => {
      window.clearInterval(interval);
    };
  }, [rows, direction, mode]);

  return (
    <div className={styles.container}>
      <canvas className={styles.root} ref={canvasRef} />
    </div>
  );
};

export default MarsMatrixLoader;