
const planetFacts = {
    mercury: "Mercury is the smallest planet and closest to the Sun.",
    venus: "Venus spins in the opposite direction to most planets.",
    earth: "Earth is the only planet known to support life.",
    mars: "Mars is home to the tallest mountain in the solar system.",
    jupiter: "Jupiter is so big, all other planets could fit inside it.",
    saturn: "Saturn has the most spectacular rings in the solar system.",
    uranus: "Uranus rotates on its side — it's basically rolling through space.",
    neptune: "Neptune has the strongest winds in the solar system.",
    pluto: "Pluto is a dwarf planet with a heart-shaped glacier."
};

const infoPanel = document.getElementById('infoPanel');
const planetName = document.getElementById('planetName');
const planetInfo = document.getElementById('planetInfo');
const closeBtn = document.getElementById('closeBtn');

const rotations = document.querySelectorAll('.orbit-rotation');

document.querySelectorAll('.planet, .dwarf-planet').forEach(planet => {
    planet.addEventListener('click', () => {
        const id = planet.id;
        planetName.textContent = id.charAt(0).toUpperCase() + id.slice(1);
        planetInfo.textContent = planetFacts[id] || "Fun fact coming soon!";
        
        // Show info panel
        infoPanel.style.display = 'flex';
        
        // Pause all rotations
        rotations.forEach(r => r.style.animationPlayState = 'paused');
    });
});

closeBtn.addEventListener('click', () => {
    infoPanel.style.display = 'none';
    
    // Resume all rotations
    rotations.forEach(r => r.style.animationPlayState = 'running');
});

