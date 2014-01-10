/**
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward
 * Licensed under the MIT License (MIT).
 */

var defaults = {
  author: '<% if (pkg.author.name){ %><%= pkg.author.name %><% } else if (pkg.author && !pkg.author.name){ %><%= pkg.author %><% } %>',
  license: '<% if (pkg.licenses){ %><%= _.pluck(pkg.licenses, "type").join(", ") %> license<%= (pkg.licenses.length === 1 ? "" : "s") %><% } else if (pkg.license){ %><%= pkg.license %> license<% } %>',
  year: '<%= new Date().getFullYear() %>'
};


// Use this banner on JavaScript and CSS files
exports.bannerBlock = function(opts) {
  opts = opts || {};
  opts.author = opts.author || defaults.author;
  opts.license = opts.license || defaults.license;
  opts.year = opts.year || defaults.year;
  var banner = [
    '/**',
    ' * <%= pkg.name %> v<%= pkg.version %>',
    ' * <%= pkg.homepage %>',
    ' *',
    ' * Copyright (c) ' + opts.year + ' ' + opts.author + ', contributors',
    ' * Licensed under the ' + opts.license + '.',
    ' */\n\n'
  ].join('\n');
  return banner;
};
exports.block = exports.bannerBlock();



// Use this banner on minified JavaScript and CSS files
exports.bannerMin = function(opts) {
  opts = opts || {};
  opts.author = opts.author || defaults.author;
  opts.license = opts.license || defaults.license;
  opts.year = opts.year || defaults.year;

  var banner = [
    '/*! <%= pkg.name %> v<%= pkg.version %>',
    '<%= pkg.homepage %>',
    '(c) ' + opts.year + ' ' + opts.author + ', contributors',
    'Licensed under the ' + opts.license + '. */\n'
  ].join(' | ');
  return banner;
};
exports.min  = exports.bannerMin();
