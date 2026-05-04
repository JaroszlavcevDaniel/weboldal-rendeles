

    document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');

    if (!localStorage.getItem('cookieAccepted')) {
      banner.style.display = 'flex';
    }

    acceptBtn.addEventListener('click', function() {
      localStorage.setItem('cookieAccepted', 'true'); 
      banner.style.display = 'none'; 
    });
  });

const canvas = document.getElementById("bg");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 5000; i++) {
  vertices.push(
    (Math.random() - 0.5) * 2000,
    (Math.random() - 0.5) * 2000,
    (Math.random() - 0.5) * 2000
  );
}

geometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(vertices, 3)
);

const material = new THREE.PointsMaterial({ color: 0xffffff });

const stars = new THREE.Points(geometry, material);
scene.add(stars);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  stars.rotation.y += 0.0005;

  renderer.render(scene, camera);
}

animate();

renderer.setClearColor(0x000000);

function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
}

window.addEventListener("resize", resize);
resize();

