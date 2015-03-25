require.config({
    paths: {
        "react": "bower_components/react/react-with-addons",
        "reactBootstrap": "bower_components/react-bootstrap/react-bootstrap",
        "JSXTransformer": "bower_components/react/JSXTransformer",
        "jsx": "bower_components/requirejs-react-jsx/jsx",
        "text": "bower_components/requirejs-text/text"
    },

    shim: {
        "react": {
            "exports": "React"
        },
        "JSXTransformer": "JSXTransformer"
    },

    jsx: {
        fileExtension: ".jsx",
        transformOptions: {
            harmony: true,
            stripTypes: false,
            inlineSourceMap: true
        },
        usePragma: false
    }
});
require(['jsx!app'], function(App) {

    var app = new App();
    app.init();

});