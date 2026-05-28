const statusBadge = document.getElementById('statusBadge');
const statusMessage = document.querySelector('.status-message');

async function fetchApiStatus() {
  statusBadge.textContent = 'Loading...';
  statusBadge.className = 'status-badge';
  statusMessage.textContent = 'Connecting to the backend API...';

  try {
    const response = await fetch('/api/health');
    if (!response.ok) throw new Error('Network response not ok');
    const data = await response.json();

    statusBadge.textContent = data.status === 'ok' ? 'Online' : 'Offline';
    statusBadge.classList.add(data.status === 'ok' ? 'online' : 'offline');
    statusMessage.textContent = data.message || 'Server responded successfully.';
  } catch (error) {
    statusBadge.textContent = 'Offline';
    statusBadge.classList.add('offline');
    statusMessage.textContent = 'Unable to reach the API. Please try again later.';
    console.error('API status fetch failed:', error);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  fetchApiStatus();
});
