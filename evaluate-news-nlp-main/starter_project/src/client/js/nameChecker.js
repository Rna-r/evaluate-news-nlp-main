function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ];

    if(names.includes(inputText)) {
        alert("Welcome, Captain!");
    }
    else {
        alert("Enter a valid captain name");
    }
    test('Valid URL should pass', () => {
        expect(isValidURL('https://example.com')).toBe(true);
    });
    
    test('Invalid URL should fail', () => {
        expect(isValidURL('not-a-url')).toBe(false);
    });
    
}

export { checkForName };
