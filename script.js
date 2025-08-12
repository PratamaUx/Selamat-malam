// Menampilkan waktu real-time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('currentTime').textContent = timeString;
}

// Update waktu setiap detik
updateTime();
setInterval(updateTime, 1000);

// Menambah bintang secara dinamis
function createRandomStars() {
    const starsContainer = document.querySelector('.stars');
    
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Buat bintang tambahan saat halaman dimuat
createRandomStars();

// Fungsi untuk menambah efek interaktif
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    
    // Efek klik pada container
    container.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Efek mouse move untuk bintang
    document.addEventListener('mousemove', function(e) {
        const stars = document.querySelectorAll('.star');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        stars.forEach((star, index) => {
            const speed = (index % 3 + 1) * 0.5;
            const x = mouseX * speed;
            const y = mouseY * speed;
            star.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});

