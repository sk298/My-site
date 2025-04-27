// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Top';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px';
scrollToTopButton.style.backgroundColor = '#ff9933';
scrollToTopButton.style.color = 'white';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.cursor = 'pointer';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

<div class="product-container">
    <div class="product-item">
        <h3>Military Badges</h3>
        <img src="D:\SK\HND\Projects\PROJECTS\08. WEBSITE DESIGN & DEVELOPMENT\Website\05. Images\military_badge.jpg" alt="Military Badges">
        <p>High-quality military badges for all army units.</p>
    </div>
    <div class="product-item">
        <h3>Service Medals</h3>
        <img src="service-medals.jpg" alt="Service Medals">
        <p>Service medals awarded for bravery and excellence.</p>
    </div>
    <div class="product-item">
        <h3>Flags & Medals</h3>
        <img src="flags-medals.jpg" alt="Flags & Medals">
        <p>National flags and special ceremonial medals.</p>
    </div>
    <div class="product-item">
        <h3>Uniform Accessories</h3>
        <img src="uniform-accessories.jpg" alt="Uniform Accessories">
        <p>High-quality accessories for military uniforms.</p>
    </div>
</div>



