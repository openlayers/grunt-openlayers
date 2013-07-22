# Grunt Tasks for OpenLayers

This package contains common Grunt tasks for OpenLayers development, website building, etc.  Tasks that are specific to just OpenLayers development can remain in the code respository.  Tasks that are specific to just OpenLayers website building can remain in the website repository.  Tasks that are used in more than one place should go here.

## Development

This package is published as a package in the npm repository and is added as a development dependency of other projects.  To facilitate local development (instead of making a change to a common task and having to publish it before testing its use with another local project), use [`npm link`](https://npmjs.org/doc/link.html).

Where practical, tasks should have tests.  Run the linter and any tests before pushing changes:

    npm test

## Publishing

After committing changes to your task, update the published package with the `release` task:

    grunt release:minor

This will bump the version number in `package.json`, add the changes, commit, create a tag, push, and publish the package to the npm registry.  You can also run `grunt release:patch` or `grunt release:major`.
