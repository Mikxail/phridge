"use strict";

/**
 * Opens the given page and resolves when phantomjs called back.
 * Will be executed inside of phantomjs.
 *
 * @private
 * @param {string} url
 * @param {Function} resolve
 * @param {Function} reject
 */
function openPage(url, resolve, reject) { /* jshint validthis: true */
    this.open(url, function onPageLoaded(status) {
        if (status !== "success") {
            return reject(new Error("Cannot load " + url + ": Phantomjs returned status " + status));
        }
        resolve();
    });
}

/**
 * Calls phantom.exit() with errorcode 0
 *
 * @private
 */
function exitPhantom() { /* global phantom */
    phantom.exit(0);
}

/**
 * Cleans all references to a specific page.
 *
 * @private
 * @param {number} pageId
 */
function disposePage(pageId) { /* global pages */
    delete pages[pageId];
}

exports.openPage = openPage;
exports.exitPhantom = exitPhantom;
exports.disposePage = disposePage;