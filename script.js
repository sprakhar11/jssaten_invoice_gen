
console.log("I am alive***************************")
 // Outputs: Hello, world!

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const uploadBtn = document.getElementById('uploadBtn');
    const resultMessage = document.getElementById('result');

    uploadBtn.addEventListener('click', async () => {
        const file = fileInput.files[0];
        console.log("hit in side ");

        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                var contentToCopy = data.filePath;
                
                document.getElementById('copyButton').addEventListener('click', function() {
                var tempInput = document.createElement('textarea');
                tempInput.value = contentToCopy;
                document.body.appendChild(tempInput);
                
                tempInput.select();
                tempInput.setSelectionRange(0, 99999); // For mobile devices
                
                try {
                    var successful = document.execCommand('copy');
                    var message = successful ? 'Content copied to clipboard!' : 'Unable to copy content.';
                    alert(message);
                } catch(err) {
                    console.error('Unable to copy content:', err);
                }
                
                document.body.removeChild(tempInput);
                });

                resultMessage.textContent = `File '${data.fileName}' uploaded successfully at ${data.dateTime}. Path: ${data.filePath}`;
            } else {
                resultMessage.textContent = 'Error uploading file.';
            }
        }
    });
});
