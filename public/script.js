document.addEventListener('DOMContentLoaded', () => {
    const uploadFilesBtn = document.getElementById('uploadFilesBtn');
    const uploadXlsxBtn = document.getElementById('uploadXlsxBtn');
    const startAutomationBtn = document.getElementById('startAutomationBtn');
    const statusSection = document.getElementById('statusSection');
    const statusMessage = document.getElementById('statusMessage');

    uploadFilesBtn.addEventListener('click', () => {
        // Simulate file upload (replace with actual file handling)
        console.log('Upload Files button clicked');
        updateStatus('Uploading files...', true);
        // In a real scenario, you would trigger a file input dialog here
        // and then use FormData to send the files to your API.
        setTimeout(() => {
            updateStatus('Files uploaded successfully.', true);
            // Call your API endpoint here:
            // fetch('/upload-files', { method: 'POST', body: formData })
            //   .then(response => response.json())
            //   .then(data => console.log('Success:', data))
            //   .catch(error => updateStatus('Error uploading files.', false));
        }, 1500);
    });

    uploadXlsxBtn.addEventListener('click', () => {
        // Simulate XLSX upload (replace with actual file handling)
        console.log('Upload XLSX button clicked');
        updateStatus('Uploading XLSX file...', true);
        // Similar to uploadFilesBtn, trigger file input and use FormData.
        setTimeout(() => {
            updateStatus('XLSX file uploaded successfully.', true);
            // Call your API endpoint here:
            // fetch('/upload-xlsx', { method: 'POST', body: formData })
            //   .then(response => response.json())
            //   .then(data => console.log('Success:', data))
            //   .catch(error => updateStatus('Error uploading XLSX file.', false));
        }, 1500);
    });

    startAutomationBtn.addEventListener('click', () => {
        console.log('Start Automation button clicked');
        updateStatus('Starting email automation...', true);
        // Call your API endpoint to start the automation
        fetch('/api/v1/email/send', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                console.log('Automation started:', data);
                updateStatus('Email automation started successfully!', true);
            })
            .catch(error => {
                console.error('Error starting automation:', error);
                updateStatus('Failed to start email automation.', false);
            });
    });

    function updateStatus(message, success) {
        statusMessage.textContent = message;
        statusSection.style.display = 'block';
        if (success) {
            statusSection.style.backgroundColor = '#e6ffe6';
            statusSection.style.borderColor = '#ccffcc';
            statusMessage.style.color = '#2e7d32';
        } else {
            statusSection.style.backgroundColor = '#ffe6e6';
            statusSection.style.borderColor = '#ffcccc';
            statusMessage.style.color = '#d32f2f';
        }
        // Optionally hide the status after a few seconds
        // setTimeout(() => {
        //     statusSection.style.display = 'none';
        // }, 5000);
    }
});