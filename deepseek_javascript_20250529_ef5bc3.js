function showTab(tabName) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}

function calculateConversionROI() {
    // Logjika për Conversion ROI
}

function calculateTrafficROI() {
    // Logjika për Traffic ROI
}

function calculateReachROI() {
    // Logjika për Reach ROI
}

function calculateAwarenessROI() {
    // Logjika