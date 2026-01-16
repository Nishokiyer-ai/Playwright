/*Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
`runTests` with `switch` for test type messages.*/

function launchBrowser(browser) {
    if (browser === "Chrome") {
        console.log("Chrome Browser is invoked");
    } else if (browser === "Firefox") {
        console.log("Firefox Browser is invoked");
    } else if (browser === "Safari") {
        console.log("Safari Browser is invoked");
    } else {
        console.log("Browser not supported");
    }
}

launchBrowser("Chrome");
launchBrowser("Firefox");
launchBrowser("Edge");

function runTests(testType) {
    switch (testType) {
        case "unit":
            console.log("Unit tests");
            break;
        case "integration":
            console.log("Integration tests");
            break;
        case "e2e":
            console.log("E2E tests");
            break;
        default:
            console.log("Test type not supported");
    }
}

runTests("unit");
runTests("integration");
runTests("performance");