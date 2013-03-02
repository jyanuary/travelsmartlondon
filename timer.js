/**
 * This module runs a timer and executes specified
 * modules at the specified intervals
 * 
 * @author  Kamil Przekwas, Andrew Li
 * @version 1.0
 */

/* Required modules */
var lines = require("./updater_lines");
var bikes = require("./updater_bike");

/**
 * Starts the timer
 */
function start() {
	/* Updates lines and bikes on start */
	line.start();
	bike.start();

    /* Lines refresh every 2 minutes */
    setInterval(lines.start, 120000);
    /* Bikes refresh every 5 minutes */
    setInterval(bike.start, 300000);
}

/* Make method available to other modules */
exports.start = start;