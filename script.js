document.addEventListener('DOMContentLoaded', () => {
    // Copy to clipboard functionality
    const copyButton = document.getElementById('copy-button');
    const serverIp = document.getElementById('server-ip');

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(serverIp.textContent)
            .then(() => {
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = originalText;
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });

    // Placeholder for server status
    // In a real application, you would use a fetch request to a server status API
    const serverStatusSpan = document.getElementById('server-status');
    const statusMessageDiv = document.getElementById('status-message');

    // Simulate fetching server status
    // Replace this with a real API call later
    setTimeout(() => {
        const isOnline = true; // Change this based on real server status
        if (isOnline) {
            serverStatusSpan.textContent = 'Online';
            serverStatusSpan.style.color = '#4CAF50';
        } else {
            serverStatusSpan.textContent = 'Offline';
            serverStatusSpan.style.color = '#ff5252';
        }
    }, 1500);
});
