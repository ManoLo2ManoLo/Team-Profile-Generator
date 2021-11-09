const fs = require('fs');

// function to copy the css into the dist file
function copyFile() {
    fs.copyFile('./src/style.css', './dist/style.css', (err) => {
        if (err) {
            console.log('Style.css failed to copy into the proper folder');
        }
    });
}

module.exports = copyFile;