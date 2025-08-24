document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-grid');
    if (!gallery) {
        console.error('Gallery element not found!');
        return;
    }

    // Define your image filenames
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
    ];

    // Function to try loading image with different extensions
    function loadImageWithFallback(imgElement, filename, alt) {
        const basePath = 'assets/gallery/';
        const extensions = ['.jpg', '.jpeg'];
        let currentExtensionIndex = 0;
        
        function tryNextExtension() {
            if (currentExtensionIndex >= extensions.length) {
                // All extensions failed
                imgElement.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%233498db"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="white">Image not found: ' + filename + '</text></svg>';
                console.error(`Image failed to load with all extensions: ${filename}`);
                return;
            }
            
            const extension = extensions[currentExtensionIndex];
            imgElement.src = basePath + filename + extension;
            imgElement.alt = alt;
            
            currentExtensionIndex++;
        }
        
        imgElement.onerror = tryNextExtension;
        
        // Start with first extension
        imgElement.src = basePath + filename + extensions[0];
    }

    // Generate HTML for each image
    galleryImages.forEach(img => {
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'gallery-item';
        
        // Create image element
        const image = document.createElement('img');
        image.className = 'gallery-image';
        image.loading = 'lazy';
        
        // Load image with fallback for different extensions
        loadImageWithFallback(image, img.filename, img.alt);
        
        imgWrapper.appendChild(image);
        gallery.appendChild(imgWrapper);
    });

    // Modal functionality
    const modal = document.getElementById("galleryModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    // Add click event to all gallery images
    gallery.addEventListener('click', function(e) {
        if (e.target.classList.contains('gallery-image')) {
            modal.style.display = "block";
            modalImg.src = e.target.src;
            captionText.innerHTML = e.target.alt;
        }
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
