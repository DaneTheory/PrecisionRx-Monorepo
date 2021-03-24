# Precision Rx Monorepo

--- 

## TODOs
  - List Workspaces out _**REF:** Section 1_
  - Badges  
  - Define/Describe workflow for `dev` to `prod` pipeline _**REF:** Section 2_
  - How to install (this monorepo) _**REF:** Section 3_
  - Docs and other resources _**REF:** Section 4_

---

### Section 1
> _Workspaces_

We have three workspaces:

- **web-app**: A Next.js app
- **foo**: A normal node module
- **bar**: A react component, that gets compiled by Next.js (see [packages/web-app/next.config.js](./packages/web-app/next.config.js) for more info)


---

### Section 2
> _Workflow_

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-yarn-workspaces&project-name=with-yarn-workspaces&repository-name=with-yarn-workspaces)


---

### Section 3
> _Installation_

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-yarn-workspaces with-yarn-workspaces-app
# or
yarn create next-app --example with-yarn-workspaces with-yarn-workspaces-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

> Choose `packages/web-app` as root directory when deploying.

---


### Section 4
> _Resources_

- [Documentation](https://yarnpkg.com/en/docs/workspaces)
- [yarn workspace](https://yarnpkg.com/lang/en/docs/cli/workspace)
- [yarn workspaces](https://yarnpkg.com/lang/en/docs/cli/workspaces)
- [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules)
