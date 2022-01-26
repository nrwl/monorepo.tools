# Contributing to MonorepoTools

You found something wrong, want to fix a bug or make the website better?! Read this document to see how to do it.

## How to Get Started

Fork the repository and add your fix.

## Found an Issue?

If you find a bug in the source code or a mistake in the documentation, you can help us by [submitting an issue](https://github.com/nrwl/monorepo.tools/blob/master/CONTRIBUTING.md#submit-issue) to [our GitHub Repository](https://github.com/nrwl/monorepo.tools). Even better, you can [submit a Pull Request](https://github.com/nrwl/monorepo.tools/blob/master/CONTRIBUTING.md#submit-pr) with a fix.

## Project Structure

Source code and documentation are included in the top-level folders listed below.

- `apps` - Nx applications containing the main website artefact.
- `e2e` - E2E tests.
- `libs` - Nx libraries containing the layout and data for the website.

## Building the Project

After cloning the project to your machine, to install the dependencies, run:

```bash
yarn
```

To serve the website, run:

```bash
yarn start
# is the same as
nx run website:serve
```

## Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, please search the issue tracker. An issue for your problem may already exist and has been resolved, or the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. Having a reproducible scenario gives us wealth of important information without going back and forth with you requiring additional information, such as:

- `yarn.lock` or `package-lock.json`
- and most importantly - a use-case that fails

A minimal reproduction allows us to quickly confirm a bug (or point out coding problem) as well as confirm that we are fixing the right problem.

We will be insisting on a minimal reproduction in order to save maintainers time and ultimately be able to fix more bugs. Interestingly, from our experience, users often find coding problems themselves while preparing a minimal repository. We understand that sometimes it might be hard to extract essentials bits of code from a larger code-base, but we really need to isolate the problem before we can fix it.

You can file new issues by filling out our [issue form](https://github.com/nrwl/monorepo.tools/issues/new).

### <a name="submit-pr"></a> Submitting a PR

Please follow the following guidelines:

- Make sure you run `nx format:write`
- Make sure you run `nx run website:serve` to see your changes are effective.
