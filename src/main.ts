// TO add dev-dependency in package.json we have to install npm package with --save-dev option
// e.g. npm install --save-dev package_name

// TODO: MSH: How to add JS file and use it as a library
(async () => {
    // await owl.whenReady();
    await new Promise(function (resolve) {
            if (document.readyState !== "loading") {
                resolve();
            } else {
                document.addEventListener("DOMContentLoaded", resolve, false);
            }
        });
    (document.querySelector("span") as HTMLElement).innerText = "Hello World! Hi";
})();