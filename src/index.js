import * as THREE from "./three.module.js";

import { OrbitControls } from "./OrbitControls.js";
import { CSS3DRenderer, CSS3DObject, CSS3DSprite } from "./CSS3DRenderer.js";
import { DragControls } from "./DragControls.js";
import { GLTFLoader } from "./GLTFLoader.js";
import { RGBELoader } from './RGBELoader.js';
import { RoughnessMipmapper } from './RoughnessMipmapper.js';


var container;
var camera, scene, renderer, renderer1, controls;

var objects = [];

var changePosition = 0.1;

var mouse;
var raycaster;





  var loader = new GLTFLoader();
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
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


  // lights

  var light, materials;

  scene.add(new THREE.AmbientLight(0x666666));

  light = new THREE.DirectionalLight(0xdfebff, 0.1);
  light.position.set(50, 200, 100);
  light.position.multiplyScalar(1.3);

  light.castShadow = true;

  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;

  var d = 300;

  light.shadow.camera.left = -d;
  light.shadow.camera.right = d;
  light.shadow.camera.top = d;
  light.shadow.camera.bottom = -d;

  light.shadow.camera.far = 1000;

  scene.add(light);





			
  fetch('./vases.json').then(function (response) {
    return response.json();
  }).then(function (data) {

   // sndan(data.topic_id);
  console.log(data.data[1].positionX)
    for (let numberrose1 = 0; numberrose1 < data.data.length; numberrose1++) {
      rose1(data.data[numberrose1].name,data.data[numberrose1].positionX,data.data[numberrose1].positinY,data.data[numberrose1].positinZ,data.data[numberrose1].rotationX,data.data[numberrose1].rotationY,data.data[numberrose1].rotationZ);

//rose1(data.data[numberrose1].name,data.data[numberrose1].positionX,data.data[numberrose1].positionY,data.data[numberrose1].positionZ,data.data[numberrose1].rotationX,data.data[numberrose1].rotationY,data.data[numberrose1].rotationZ);
    }



 







  }).catch(function (err) {
    console.warn('Something went wrong.', err);
  });



var tomixerloop=0;
  function rose1(nam,pox,poy,poz,rox,roy,roz) {
    loader.load('models/rose1/' + nam + '.glb', function (gltff) {


     
    
      gltff.scene.children[0].traverse(function (child) {
      
        if (child.isMesh) {

        
          console.log(child.name)

          child.position.x=pox


if(poy<-9){
  poy==-1
}

            child.position.y=(poy<-9 ? -1 : -1) 
            child.position.z=poz
          
            child.rotation.z= roz
            child.rotation.x= rox
            child.rotation.y= roy
       
      
           
            scene.add(child);





     
   

        }

      });


    }, (xhr) => {
      
    }, (error) => {
      
    });


  }


















  sndan()

  function sndan() {
    loader.load('models/sndan1.glb', function (gltffsnd) {


      //face1.glb
      
      gltffsnd.scene.children[0].traverse(function (childsndan) {
        if (childsndan.isMesh) {
          childsndan.material.metalness = 0.9;
          childsndan.material.roughness = 0.02;
          childsndan.material.exposure = 0.1;
          childsndan.receiveShadow = true;
          childsndan.castShadow = true;
          //  childsndan.material.flatShading = true;
          childsndan.material.transparent = true;
          childsndan.material.opacity = 0.5;
          scene.add(childsndan);


        }

      });


    }, (xhr) => {
      
    }, (error) => {
      
    });


  }




water()
  
 

  function water() {
    loader.load('models/water.glb', function (gltffsnd) {


      //face1.glb
      
      gltffsnd.scene.children[0].traverse(function (childsndan) {
        if (childsndan.isMesh) {
          childsndan.material.metalness = 0.9;
          childsndan.material.roughness = 0.02;
          childsndan.material.exposure = 0.1;
          childsndan.receiveShadow = true;
          childsndan.castShadow = true;
          //  childsndan.material.flatShading = true;
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
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.top = 0;
  renderer.domElement.style.zIndex = "1";

 


  container.appendChild(renderer.domElement);

  renderer.gammaInput = true;
  renderer.gammaOutput = true;

  renderer.shadowMap.enabled = true;


  var controls = new OrbitControls(camera, renderer.domElement);


  

  window.addEventListener("resize", onWindowResize, false);

  let dragControls = new DragControls(objects, camera, renderer.domElement);

     console.log("DOWN");
 
 

  dragControls.addEventListener("dragstart", function(event) {
    
//console.log(event.object.name)
//console.log(event.object.position.x)
if(event.object.name=="base"){
  dragControls.enabled=true
  controls.enabled = false;
}else{
  dragControls.enabled=false
}

  });
  dragControls.addEventListener("dragend", function() {
    controls.enabled = true;
  });

  dragControls.addEventListener("drag", function(event) {

    //console.log(event.object.position.x)
    document.getElementById("xpo").value=event.object.position.x;
    document.getElementById("ypo").value=event.object.position.y;
    document.getElementById("zpo").value=event.object.position.z;

    


  })






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

 const roughnessMipmapper = new RoughnessMipmapper(renderer);





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
  /*
  if(mixer){

    mixer.update(clock5.getDelta());
    
    }
    */
  update();
  render();
  
}

function render() {
   
  renderer.render(scene, camera);

 
}
