/**
 * A gulp task to inject live reload into JS files
 * 
 * @author Matheus Giovani
 * @since 06/04/2021
 */

const through = require("through2");

/**
 * @param {{
 *  port?: number,
 *  host?: string,
 *  protocol?: "http" | "https",
 *  inject?: boolean
 * }} config The configuration data
 * @returns 
 */
module.exports = (config) => {
    // Setup the defaults
    config = Object.assign({
        port: 35729,
        host: "localhost",
        protocol: "http",
        inject: true
    }, config);

    return through.obj(async (file, enc, cb) => {
        // Check if it's not injecting
        if (!config.inject) {
            // Ignore it
            return cb(null, file);
        }

        // Convert the file contents to a string
        let content = file.contents.toString("utf8");

        const livereload = /*javascript*/`
            // Injected by @ofertorio/modules/gulp/inject-livereload
            var script = document.createElement("script");
            script.src = "${config.protocol}://${config.host}:${config.port}/livereload.js?port=${config.port}";
            script.type = "text/javascript";
            script.async = "true";
            script.defer = "true";

            document.head.appendChild(script);
        `.replace(/\t/g, "");

        content += livereload;

        // Save the JS file contents
        file.contents = Buffer.from(content);

        cb(null, file);
    });
};