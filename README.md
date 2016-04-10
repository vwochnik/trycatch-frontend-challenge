# TryCatch Frontend Challenge

> A frontend challenge by [TryCatch](trycatch.tech)

## Prerequisites

You'll need a working version of Node with NPM and Ruby to be able to build the
project.

If you do not have `bower` or `grunt-cli` installed, run:

```
$npm install -g grunt-cli bower
```

If you do not have Bundler installed, run:

```
$ gem install bundler
```

## Building the project

Run the following commands in that order to build the project:

```
$ npm install
$ bower install
$ bundle install
$ grunt build
```

Alternatively, you can exchange the last command with the following to serve
the page locally:

```
$ grunt serve
```

## Contributing

* Please create an issue for every feature or bug fix before beginning the
  implementation.
* Then, create a new branch from the `master` branch following the naming
  convention `#-feature-name` where `#` is the number of the corresponding
  issue.
* When done, merge the newly created branch back into the `master` branch and
  close the corresponding issue.

## Licence

Copyright (c) 2016 Vincent Wochnik.

Licence: MIT
