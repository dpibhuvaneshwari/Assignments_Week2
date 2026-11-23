let browser = "Chrome";

function checkBrowserVersion(callback) {

    setTimeout(() => {
        callback(browser);
    }, 2000);

}
function printBrowserVersion(version) {
    console.log("Browser version using callback: " + version);
}
checkBrowserVersion(printBrowserVersion);
