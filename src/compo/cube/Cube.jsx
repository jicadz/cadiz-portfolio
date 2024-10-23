import { useEffect } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

const Cube = () => {

     useEffect(() => {
          const scene = new THREE.Scene();
      
          const camera = new THREE.PerspectiveCamera(
            50,
            500 / 500,
            1,
            1000
          );
      
          camera.position.z = 96;
      
          const canvas = document.getElementById('myThreeJsCanvas');
          const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true
          })
          renderer.setSize(50, 50);
          renderer.setClearColor( 0x000000, 0 );
          const container = document.getElementById('3d-container'); // Your target div
          container.appendChild(renderer.domElement);
          // document.body.appendChild(renderer.domElement);
      
          const ambientLight = new THREE.AmbientLight(0xffffff, 3);
          ambientLight.castShadow = true;
          scene.add(ambientLight);
      
          const spotLight = new THREE.SpotLight(0xffffff, 3);
          spotLight.castShadow = true;
          spotLight.position.set(0, 64, 32);
          scene.add(spotLight);
      
          const boxGeometry = new THREE.BoxGeometry(30, 30, 30);
          const boxMaterial = new THREE.MeshStandardMaterial({
            color: 0xff1d56, // Set cube color to green (you can use hex or CSS color strings)
            transparent: true,
            opacity: 1 // Full opacity, adjust if you want some transparency
          });
          const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
          scene.add(boxMesh);

          const edges = new THREE.EdgesGeometry(boxMesh.geometry); // Generates edges of the cube
          const lineMaterial = new THREE.LineBasicMaterial({ color: 0x28282B }); // Black color for the lines
          const outline = new THREE.LineSegments(edges, lineMaterial);
          scene.add(outline); // Adds the outline to the scene
      
          const controls = new OrbitControls(camera, renderer.domElement);
          controls.enableZoom = false;
          const stats = Stats();
      
          const animate = () => {
            boxMesh.rotation.x += 0.01;
            boxMesh.rotation.y += 0.01;
            outline.rotation.x += 0.01; // Rotate the outline along with the cube
            outline.rotation.y += 0.01;
            stats.update()
            controls.update()
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
          };
      
          animate()
      
        }, []);

        

     return(
          <div>
          <canvas id='myThreeJsCanvas'/>
        </div>
     );
}

export default Cube;