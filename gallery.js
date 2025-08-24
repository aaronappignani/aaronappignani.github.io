document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-grid');
    if (!gallery) return;

    // 1. Define your image filenames (edit these to match your actual files)
    const galleryImages = [
        { filename: 'galleryPhoto1', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto2', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto3', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto04', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto05', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto06', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto07', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto11', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto19', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto21', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto24', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto27', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto29', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto32', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto33', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto35', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto37', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto38', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto40', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto45', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto46', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto47', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto48', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto54', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto55', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto58', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto77', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto78', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto79', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto95', alt: 'Sunset at the beach' },
        { filename: 'galleryPhoto97', alt: 'Sunset at the beach' },                                                                             
        
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