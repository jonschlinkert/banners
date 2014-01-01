/**
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward
 * Licensed under the MIT License (MIT).
 */

module.exports = {
  // Use this banner on JavaScript and CSS files
  block: [
    '/*',
    ' * <%= pkg.name %> v<%= pkg.version %>',
    ' * <%= pkg.homepage %>',
    '',
    ' * Copyright (c) <%= grunt.template.date("yyyy") %>, Jon Schlinkert, Brian Woodward, contributors',
    ' * Licensed under the MIT license.',
    ' */\n\n'
  ].join('\n'),

  // Use this banner on minified JavaScript and CSS files
  min: [
    '/*! <%= pkg.name %> v<%= pkg.version %>',
    '<%= pkg.homepage %>',
    '(c) <%= grunt.template.date("yyyy") %> Jon Schlinkert, Brian Woodward, contributors',
    'MIT License */\n'
  ].join(' | ')
};