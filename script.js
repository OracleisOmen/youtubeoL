const socialProfiles = [
  { icon: '<i class="fab fa-twitter"></i>', url: 'https://twitter.com/yourhandle' },
  { icon: '<i class="fab fa-twitch"></i>', url: 'https://twitch.tv/yourhandle' },
  // Add more profiles as needed
];

let currentIndex = 0;

function updateSocialProfile() {
  const profile = socialProfiles[currentIndex];
  const container = document.getElementById('socialMediaIcon');
  container.innerHTML = `<a href="${profile.url}" target="_blank" class="social-icon">${profile.icon}</a>`;
  
  currentIndex = (currentIndex + 1) % socialProfiles.length; // Cycle through profiles
}

// Update every 5 seconds
setInterval(updateSocialProfile, 5000);

// Initial update
updateSocialProfile();
