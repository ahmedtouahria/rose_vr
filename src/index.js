import * as THREE from "./three.module.js";
import { OrbitControls } from "./OrbitControls.js";
import { GLTFLoader } from "./GLTFLoader.js";
import { RGBELoader } from './RGBELoader.js';

var container;

var camera, scene, renderer


var numberrose1=0

var myTimeout;

  var loader = new GLTFLoader();
 
 

var camera, scene, renderer;
var loader = new GLTFLoader(); 

  container = document.createElement("div");
  document.body.appendChild(container);
  // scene
  scene = new THREE.Scene();
  // camera
  camera = new THREE.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.set(
    0,
    0,
   600
  );
  
 		
  fetch('./vases.json').then(function (response) {
    return response.json();
  }).then(function (data) {


    // for (let numberrose1 = 0; numberrose1 < data.data.length; numberrose1++) {
    //   rose1(data.data[numberrose1].name,data.data[numberrose1].positionX,data.data[numberrose1].positinY,data.data[numberrose1].positinZ,data.data[numberrose1].rotationX,data.data[numberrose1].rotationY,data.data[numberrose1].rotationZ);

    // }
  
    function icrenum(num){
 
    
    
     }

      myTimeout = setInterval(function (){  rose1(data.data[numberrose1].name,data.data[numberrose1].positionX,data.data[numberrose1].positinY,data.data[numberrose1].positinZ,data.data[numberrose1].rotationX,data.data[numberrose1].rotationY,data.data[numberrose1].rotationZ,data.data.length) ;icrenum(numberrose1++)}, 200);




  }).catch(function (err) {
    console.warn('Something went wrong.', err);
  });








var tomixerloop=0;
  


     
//var tomixerloop=0;
  function rose1(nam,pox,poy,poz,rox,roy,roz,lngthdata) {
    loader.load('models/rose1/' + nam + '.glb', function (gltff) {
    
      gltff.scene.children[0].traverse(function (child) {
        if (child.isMesh) {
          child.position.x=pox
            child.position.y=poy 
            child.position.z=poz
            child.rotation.z= roz
            child.rotation.x= rox
            child.rotation.y= roy

     

            scene.add(child);
            if(numberrose1>=lngthdata-1){
              clearInterval(myTimeout)
            }
        
       




     
   

        }
      });
    }, (xhr) => {
    }, (error) => {
    });
  }

 






  sndan()
  function sndan() {
    loader.load('models/sndan3.glb', function (gltffsnd) {
      //face1.glb
      gltffsnd.scene.children[0].traverse(function (childsndan) {
        if (childsndan.isMesh) {
          childsndan.material.metalness = 0.1;
          childsndan.material.roughness = 0.02;
          childsndan.material.exposure = 0.9;
          childsndan.receiveShadow = true;
          childsndan.castShadow = true;
           childsndan.material.flatShading = false;
          childsndan.material.transparent = true;
          childsndan.material.opacity = 0.5;
     

   
      
          scene.add(childsndan);

        }
      });
    }, (xhr) => {
    }, (error) => {
    });
  }






  renderer = new THREE.WebGLRenderer({ antialias: true,alpha: true });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);


  container.appendChild(renderer.domElement);

  renderer.gammaInput = true;
  renderer.gammaOutput = true;

  renderer.shadowMap.enabled = true;


  var controls = new OrbitControls(camera, renderer.domElement);

  window.addEventListener("resize", onWindowResize, false);


  
 const pmremGenerator = new THREE.PMREMGenerator(renderer);
 pmremGenerator.compileEquirectangularShader();
 new RGBELoader()
   .setDataType(THREE.UnsignedByteType)
   .setPath('textures/equirectangular/')
   .load('studio_small_08_1k.hdr', function (texture) {

     const envMap = pmremGenerator.fromEquirectangular(texture).texture;


     scene.environment = envMap;

     texture.dispose();
     pmremGenerator.dispose();

     render();
   });







function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
 
}
var clock5=new THREE.Clock();


function update() {
  camera.updateProjectionMatrix();
}
//
animate();

function animate() {
  requestAnimationFrame(animate);

  update();
  render();
  
}

function render() {
   
  renderer.render(scene, camera);

 
}
