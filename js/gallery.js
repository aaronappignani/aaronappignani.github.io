document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-grid');
    if (!gallery) return;

    // 1. Define your image filenames (edit these to match your actual files)
    const galleryImages = [
                { filename: 'galleryPhoto1.JPEG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto2.JPEG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto3.JPEG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto04.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto06.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto07.JPEG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto11.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto19.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto21.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto24.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto27.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto29.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto32.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto33.JPEG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto33.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto35.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto37.JPEG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto38.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto40.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto45.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto46.JPEG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto47.JPEG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto48.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto54.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto55.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto58.JPG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto77.JPEG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto78.JPEG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto79.JPEG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto95.JPEG', alt: 'Sunset at the beach' },
                { filename: 'galleryPhoto97.JPG', alt: 'Sunset at the beach' },     
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
