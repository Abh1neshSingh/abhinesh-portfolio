'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text, Box, Sphere, Torus } from '@react-three/drei'
import * as THREE from 'three'

const TechIcon = ({ position, color, children, rotationSpeed = 1 }: {
  position: [number, number, number]
  color: string
  children: React.ReactNode
  rotationSpeed?: number
}) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh ref={meshRef}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.8}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        <Text
          position={[0, 0, 0.8]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          {children}
        </Text>
      </group>
    </Float>
  )
}

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00d4ff" transparent opacity={0.6} />
    </points>
  )
}

const TechIcons3D = () => {
  return (
    <group>
      <ParticleField />
      
      {/* Python */}
      <TechIcon position={[-4, 2, -2]} color="#3776ab">
        Python
      </TechIcon>
      
      {/* AI/ML */}
      <TechIcon position={[4, 1, -1]} color="#ff6b35" rotationSpeed={0.8}>
        YOLOv8
      </TechIcon>
      
      {/* Flask */}
      <TechIcon position={[-2, -2, 1]} color="#000000" rotationSpeed={1.2}>
        Flask
      </TechIcon>
      
      {/* PowerBI */}
      <TechIcon position={[3, -1, 2]} color="#f2c811" rotationSpeed={0.6}>
        PowerBI
      </TechIcon>
      
      {/* OpenAI */}
      <TechIcon position={[0, 3, -3]} color="#10a37f" rotationSpeed={1.5}>
        OpenAI
      </TechIcon>
      
      {/* Deep Learning */}
      <TechIcon position={[-3, -1, -4]} color="#8b5cf6" rotationSpeed={0.9}>
        Deep Learning
      </TechIcon>
      
      {/* SQL */}
      <TechIcon position={[2, 2, 3]} color="#336791" rotationSpeed={1.1}>
        SQL
      </TechIcon>
      
      {/* Generative AI */}
      <TechIcon position={[-1, -3, -1]} color="#f472b6" rotationSpeed={0.7}>
        Gen AI
      </TechIcon>

      {/* Floating geometric shapes for ambiance */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <Torus position={[6, 0, -5]} args={[0.5, 0.2, 16, 100]}>
          <meshStandardMaterial color="#00d4ff" transparent opacity={0.3} />
        </Torus>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <Sphere position={[-6, -2, -3]} args={[0.8, 32, 32]}>
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.2} />
        </Sphere>
      </Float>
    </group>
  )
}

export default TechIcons3D
