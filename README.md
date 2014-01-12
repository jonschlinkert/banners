# banners [![NPM version](https://badge.fury.io/js/banners.png)](http://badge.fury.io/js/banners)

> Reusable banners for Node.js and Grunt.js projects.

## Getting started

```bash
npm i banners --save
```

_You may either use the banners as [Lo-Dash templates](http://lodash.com/docs#template), or as [Lo-Dash mixins](http://lodash.com/docs#mixin)_:

#### Use as templates

```js
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: require('banners').

    concat: {
      scripts: {
        options: {
          banner: '<%= banner.block %>'
        },
        files: {
          'dist/script.js': ['src/script.js']
        }
      }
    }
  });
  ...
};
```

#### Use as mixins

Alternatively, you can add the banners as Lo-Dash mixins if you need to override the defaults:

```js
module.exports = function (grunt) {
  // Mix the banners into Grunt's Lodash
  grunt.util._.mixin(require('banners'));

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      scripts: {
        options: {
          // Then use as a mixin
          banner: '<%= _.bannerBlock() %>'
        },
        files: {
          'dist/script.js': ['src/script.js']
        }
      }
    }
  });
  ...
};
```


## Usage

#### defaults

The following fields in `package.json` are used (in precident):
 * name
 * description
 * version
 * homepage
 * author.name *or* author
 * licences.type *or* licence.type *or* license
 
A copyright year is automatically updated to current.  

#### mixins examples

Given we have:

```json
{
  "name": "grunt-readme",
  "author": {
    "name": "Jon Schlinkert"
  }
}
```

If no parameters are passed to the mixin, it will attempt to automatically retrieve the correct values from `package.json`:

```js
//
banner: '<%= _.bannerBlock() %>'
// => "Jon Schlinkert"
```

To override these automatic values, you may pass a config object as a paramter:

```js
// Passed directly to the mixin
banner: '<%= _.bannerBlock({author: pkg.name}) %>'
// => "grunt-readme"

// Or as a custom metadata object in the Grunt config
opts: {
  author: 'Jon Schlinkert, Brian Woodward'
},
banner: '<%= _.bannerBlock(opts) %>'
// => "Jon Schlinkert, Brian Woodward"

// Same as previous...
opts: {
  author: pkg.name
},
banner: '<%= _.bannerBlock(pkg.name) %>'
// => "grunt-readme"
```

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)


## Contributing
Feel free to [submit a pull request](https://github.com/helpers/banners/issues) to add a banner.

## License
Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
Released under the MIT license
