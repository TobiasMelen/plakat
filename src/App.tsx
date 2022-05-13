import { OrbitControls } from "@react-three/drei";
import { Canvas, GroupProps, MeshProps, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Group } from "three";

function App() {
  return (
    <main style={{ background: "#e2ebee", height: "100%" }}>
      <h1
        style={{
          fontFamily: "system-ui",
          fontSize: "30vmin",
          position: "absolute",
          textTransform: "uppercase",
          margin: 0,
          //letterSpacing: 4,
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.75,
          fontWeight: 400,
          color: "#ff5852"
          
        }}
      >
        plakat
      </h1>

      <Canvas>
        {/* <OrbitControls /> */}
        <ambientLight />
        <spotLight position={[0, 4, 6]} intensity={3} />

        <group>
          <Sign position={[-5, -2, 0]} />
          <Sign position={[-2.5, -1.25, 0]} />
          <Sign position={[0, -1.5, 0]} />
          <Sign position={[2.5, -1.5, 0]} />
          <Sign position={[5, -1.5, 0]} />
        </group>
      </Canvas>
    </main>
  );
}

export default App;

const Sign = (props: GroupProps) => {
  const ref = useRef<Group>(null);
  const random = useMemo(() => Math.random(), []);
  useFrame((state) => {
    if (!ref.current) {
      return;
    }
    const t = state.clock.getElapsedTime() * (random * 1.5);
    // ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
    // ref.current.rotation.y = Math.sin(t / 4) / 8;
    // ref.current.rotation.z = (0 + Math.sin(t / 1.5)) / 20;
    ref.current.position.y = (-15 + Math.sin(t * 7)) / 10;
  });
  return (
    <group {...props} ref={ref}>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 3, 0.1]} />
        <meshStandardMaterial color={"#999"} metalness={0.3} roughness={0.8} />
      </mesh>
      <mesh position={[0, -2, -0.1]}>
        <boxGeometry args={[0.1, 3, 0.1]} />
        <meshStandardMaterial
          color={"#978438"}
          roughness={0.9}
          metalness={0.2}
        />
      </mesh>
    </group>
  );
};
