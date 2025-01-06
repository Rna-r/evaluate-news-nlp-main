function isValidURL(url) {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return regex.test(url);
}

function handleSubmit(event) {
    event.preventDefault();
    const formText = document.getElementById('name').value;
    if (!isValidURL(formText)) {
        alert('Please enter a valid URL.');
        return;
    }

    fetch(serverURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: formText }),
    })
        .then((res) => res.json())
        .then((data) => {
            // Update UI with response data
            document.getElementById('results').innerHTML = `
                Polarity: ${data.polarity}<br>
                Subjectivity: ${data.subjectivity}<br>
                Text: ${data.text}
            `;
        });
        test('Valid URL should pass', () => {
            expect(isValidURL('https://example.com')).toBe(true);
        });
        
        test('Invalid URL should fail', () => {
            expect(isValidURL('not-a-url')).toBe(false);
        });
        
}

export { handleSubmit };
