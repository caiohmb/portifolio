/**
 * Dots Background Component
 */
import React from 'react';

export const DotsBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.0] dark:opacity-[0.08]"
        style={{
          backgroundImage: `radial(circle, currentColor 2px, transparent 1px)`,
          backgroundSize: '40px 40px',
          color: 'rgb(6, 182, 212)', // cyan-500
        }}
      />
    </div>
  );
};
