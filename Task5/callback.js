function readFile(content, callback) {
    setTimeout(() => {
        console.log("Content is read!");
        callback(content);
    }, 3000);
}

function transformContent(content, callback) {
    setTimeout(() => {
        const newContent = content.toUpperCase();
        console.log("Content is transformed!");
        callback(newContent);
    }, 1000);
}

function saveFile(content, callback) {
    setTimeout(() => {
        console.log("The file is saved with the content: " + content);
        callback();
    }, 2000);
}

function logCompletion() {
    setTimeout(() => {
        console.log("The process is finished!");
    }, 2000);
}

function processFile() {
    readFile("klajdi", (content) => {
        transformContent(content, (newContent) => {
            saveFile(newContent, () => {
                logCompletion();
            });
        });
    });
}

processFile();
