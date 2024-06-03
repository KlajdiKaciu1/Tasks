function readFile(content) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Content is read!");
            resolve(content);
        }, 3000);
    });
}

function transformContent(content) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newContent = content.toUpperCase();
            console.log("Content is transformed!");
            resolve(newContent);
        }, 1000);
    });
}

function saveFile(content) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("The file is saved with the content: " + content);
            resolve();
        }, 2000);
    });
}

function logCompletion() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("The process is finished!");
            resolve();
        }, 2000);
    });
}

function processFile() {
    readFile("klajdi")
        .then(value=> transformContent(value))
        .then(value=> saveFile(value))
        .then(logCompletion)
}

processFile();
