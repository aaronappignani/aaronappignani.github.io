document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-grid');
    if (!gallery) return;

    // 1. Define your image filenames (edit these to match your actual files)
    const galleryImages = [
        { filename: 'DSCF0554.JPG', alt: 'Sunset at the beach' },
        { filename: 'DSCF0555.JPG', alt: 'Mountains in winter' },
        { filename: 'DSCF0606.JPG', alt: 'City skyline at night' },
        { filename: 'DSCF0632.JPG', alt: 'City skyline at night' },
        { filename: 'DSCF0647.JPG', alt: 'City skyline at night' },
        // Add more as needed...
    ];

    // 2. Generate HTML for each image
    galleryImages.forEach(img => {
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'gallery-item';
        imgWrapper.innerHTML = `
            <img 
                src="/assets/gallery/${img.filename}" 
                alt="${img.alt}" 
                width="600" 
                height="400" 
                class="gallery-image"
                loading = "lazy"
            >
        `;
        gallery.appendChild(imgWrapper);
    });

     // Modal functionality
    const modal = document.getElementById("galleryModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    // Add click event to all gallery images
    document.querySelectorAll('.gallery-image').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

  // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
});
