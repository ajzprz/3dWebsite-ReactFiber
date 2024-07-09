import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.4}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={5}
        radius={9}
        intensity={1}
        ambient={0.25}
        position={[2, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={6}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
