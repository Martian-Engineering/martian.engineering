import { useEffect } from 'react';

export const useHotkeys = (key: string, callback: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keys = key.toLowerCase().split('+');
      const isCtrlOrCmd = keys.includes('ctrl') || keys.includes('cmd');
      const keyCode = keys[keys.length - 1];
      
      const isCtrlPressed = event.ctrlKey || event.metaKey;
      const isShiftPressed = event.shiftKey;
      const isAltPressed = event.altKey;
      
      const hasCtrlRequirement = keys.includes('ctrl') || keys.includes('cmd');
      const hasShiftRequirement = keys.includes('shift');
      const hasAltRequirement = keys.includes('alt');
      
      if (hasCtrlRequirement && !isCtrlPressed) return;
      if (hasShiftRequirement && !isShiftPressed) return;
      if (hasAltRequirement && !isAltPressed) return;
      
      if (!hasCtrlRequirement && isCtrlPressed) return;
      if (!hasShiftRequirement && isShiftPressed) return;
      if (!hasAltRequirement && isAltPressed) return;
      
      if (event.key.toLowerCase() === keyCode) {
        event.preventDefault();
        callback(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback]);
};