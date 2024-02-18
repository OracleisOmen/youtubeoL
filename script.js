function toggleSocialIcons() {
    const iconsContainer = document.getElementById('socialMediaIcons');
    iconsContainer.classList.toggle('visible');

    // Hide icons after 10 seconds of visibility
    setTimeout(() => {
        iconsContainer.classList.toggle('visible');
    }, 10000); // Visible duration can be adjusted
}

// Show icons every 1 minute and 12 seconds
setInterval(toggleSocialIcons, 72000);

// Optionally, show icons shortly after page loads
setTimeout(toggleSocialIcons, 5000);