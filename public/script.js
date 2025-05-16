document.addEventListener('DOMContentLoaded', () => {
    const uploadFilesBtn = document.getElementById('uploadFilesBtn');
    const uploadXlsxBtn = document.getElementById('uploadXlsxBtn');
    const startAutomationBtn = document.getElementById('startAutomationBtn');
    const statusSection = document.getElementById('statusSection');
    const statusMessage = document.getElementById('statusMessage');
    const fileInput = document.getElementById('fileInput');
    const fileDataBox = document.getElementById('fileBox')
    window.addEventListener('DOMContentLoaded', fetchData);

    async function fetchData (){

         const uploadedFiles = await fetch('/api/v1/file/list');
                
                const files = await uploadedFiles.json();

                fileDataBox.innerHTML = `
                    <h3>Uploaded Files</h3>
                    <ul>
                        ${files.data.map(fileName => `
                        <li>
                            <a href="/assets/${fileName}" target="_blank">${fileName}</a>
                        </li>
                        `).join('')}
                    </ul>
                    `;
                
    };


    uploadFilesBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const file = fileInput.files[0];
        
        if(!file){
            alert('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('file',file);

        try {
            const response = await fetch('/api/v1/file/single', {
                method : 'POST',
                body : formData
            });

            if(response.status == 200){
                alert('File Uploaded sucessfully')

                const uploadedFiles = await fetch('/api/v1/file/list');
                
                const files = await uploadedFiles.json();

               fileDataBox.innerHTML = `
                    <h3>Uploaded Files</h3>
                    <ul>
                        ${files.data.map(fileName => `
                        <li>
                            <a href="/api/v1/file/${fileName}" target="_blank">${fileName}</a>
                        </li>
                        `).join('')}
                    </ul>
                    `;
            }else{
                alert('Upload failed')
            }
            
        } catch (error) {
            console.log(error);
            alert('Something went wrong');
        }
    });
});