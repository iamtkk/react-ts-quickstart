import React, { useEffect, useState } from 'react';

export type PositionType = {
  x: number;
  y: number;
};

export const connectMousePos = (TargetComponent: React.ComponentType<any>) => {
  return (props: any) => {
    // console.log(props);
    let [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
    useEffect(() => {
      const onMove = (e: MouseEvent) => setPosition({ x: e.pageX, y: e.pageY });
      window.addEventListener('mousemove', onMove);
      console.log(props);
      return () => {
        window.removeEventListener('mousemove', onMove);
      };
    }, []);

    return <TargetComponent {...props} position={position} />;
  };
};
