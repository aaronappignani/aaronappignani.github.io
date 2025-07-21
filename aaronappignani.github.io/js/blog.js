document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.getElementById('blog-container');
    const readMoreBtn = document.getElementById('read-more-btn');
    const readLessBtn = document.getElementById('read-less-btn');
    const posts = Array.from(blogContainer.getElementsByClassName('post'));
    
    // Sort posts by date (newest first)
    posts.sort((a, b) => {
        const dateA = new Date(a.querySelector('.post-date').textContent.replace('Posted on ', '').replace('.', ''));
        const dateB = new Date(b.querySelector('.post-date').textContent.replace('Posted on ', '').replace('.', ''));
        return dateB - dateA;
    });
    
    // Clear container and re-append sorted posts
    blogContainer.innerHTML = '';
    posts.forEach(post => blogContainer.appendChild(post));
    
    // Initially hide all except the first (newest) post
    const allPosts = blogContainer.querySelectorAll('.post');
    allPosts.forEach((post, index) => {
        post.style.display = index === 0 ? 'block' : 'none';
    });
    
    // Track visible posts (minimum 1 visible - the newest)
    let visibleCount = 1;
    
    // Update button visibility
    function updateButtons() {
        readMoreBtn.style.display = visibleCount < allPosts.length ? 'block' : 'none';
        readLessBtn.style.display = visibleCount > 1 ? 'block' : 'none';
    }
    
    // Read More functionality
    readMoreBtn.addEventListener('click', function() {
        if (visibleCount < allPosts.length) {
            allPosts[visibleCount].style.display = 'block';
            visibleCount++;
            updateButtons();
        }
    });
    
    // Read Less functionality (won't affect the first/newest post)
    readLessBtn.addEventListener('click', function() {
        if (visibleCount > 1) { // Ensure we never hide the first post
            allPosts[visibleCount - 1].style.display = 'none';
            visibleCount--;
            updateButtons();
        }
    });
    
    // Initial button state
    updateButtons();
});
