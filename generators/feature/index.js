'use strict';
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');
var _ = require('lodash');

module.exports = yeoman.generators.NamedBase.extend({

    constructor: function() {

        yeoman.generators.NamedBase.apply(this, arguments);

        this.names = {
            name: _.camelCase(this.name),
            upperName: _.capitalize(_.camelCase(this.name))
        };
    },

    writing: {

        feature: function() {
            this.fs.copyTpl(this.templatePath('feature.js'), this.destinationPath('public/app/' + this.names.name + '/' + this.names.name + '.js'), this.names);
            this.fs.copyTpl(this.templatePath('feature.html'), this.destinationPath('public/app/' + this.names.name + '/' + this.names.name + '.html'), this.names);
            this.fs.copyTpl(this.templatePath('feature.scss'), this.destinationPath('public/app/' + this.names.name + '/' + this.names.name + '.scss'), this.names);
            this.fs.copyTpl(this.templatePath('feature.spec.js'), this.destinationPath('public/app/' + this.names.name + '/' + this.names.name + '.spec.js'), this.names);
        }

    }

});
