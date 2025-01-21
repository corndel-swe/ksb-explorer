# KSB Explorer

Welcome to this very useful but none-the-less brutalistic front-end project!

The purpose of this project is to practise creating React components to display
information and interact with (mock) backend services.

## Getting started

1. Make sure your machine is set up according to the instructions with

   - [bash](https://tech-docs.corndel.com/bash/)
   - [vscode](https://tech-docs.corndel.com/vscode/)
   - [git](https://tech-docs.corndel.com/git/)
   - [node & npm](https://tech-docs.corndel.com/js/installation.html)

1. Clone the repository (i.e. download it), so you have a copy on your machine.

1. Once cloned, open a terminal in the project folder, and run

   ```bash
   npm install
   ```

   to install dependencies.

1. When installed, run

   ```bash
   npm run dev
   ```

   and visit the localhost URL displayed in your terminal.

> [!TIP]
>
> Don't have the dependencies installed? This project will run in Codespaces!

## Learning about React

First things first, do some independent learning about React!
1. Peruse the [React Quick Start](https://react.dev/learn#next-steps). You
don't need to read and understand *all* of this. You'll refer back to what you
need, when you need it.
1. Read Your First Component and practice the challenges at the bottom of the
page.
1. Choose your own adventure!
   1. Do "Moving on" below if you want a more free-form learning challenge
      (this uses the files in this workshop). Best if you feel relatively
       confident in your frontend abilities or want to flex your creative
      muscles!
   1. Or, if you want want a more structured learning challenge, try the
      [Tic Tac Toe](https://react.dev/learn/tutorial-tic-tac-toe) tutorial.
      Best if you want a bit more step-by-step guidance or the creative
      juices just aren't flowing today.

## Moving on

### Level 1

Initially, we just want to get the data being displayed nicely. You will see
that the KSBs are being displayed in a pretty raw form.

It's recommended to make two React components: one component which displays a
single KSB nicely, and another component which displays the list of KSBs.

You may benefit from some extra reading if you're struggling:
- [Creating and nesting components](https://react.dev/learn#components)
- [JavaScript in JSX with Curly Braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [Rendering Lists](https://react.dev/learn/rendering-lists)

> [!TIP]
>
> Struggling with where to start? Try creating a component that just contains
> the paragraph elements `<p>`. Then, create another component that creates the
> the list `<li>`, itself rendering the previous component. (This is a "nested
> component".)

### Level 2

Once the components are working, try adding some CSS to make the whole thing a
bit easier on the eye. Display the data in any way you feel would be useful for
you.

### Level 3

If you want an extra challenge, you could make use of the `idx` object exported
by the `src/data/search.js` file. This is a full-text search index powered by
[lunr.js](https://lunrjs.com/). The index is configured to search across the
KSBs.

If you call, for example, `idx.search("data")`, then the id of any KSBs
containing the word "data" in any of the indexed fields will be returned:

```js
;[
  { ref: 'S3', score: 3.662 },
  { ref: 'S16', score: 3.311 },
  { ref: 'B5', score: 2.496 },
  { ref: 'K9', score: 2.407 },
  { ref: 'K8', score: 1.186 }
]
```

The "score" represents the relevance of the result based on the search input.
Results are ordered by score by default.

Your challenge, then, is to:

- [ ] add a textbox which will filter the displayed KSBs according to the user's
      search term

- [ ] but if the textbox is empty, show all the KSBs

> [!TIP]
>
> You will almost certainly be using
> [map](https://tech-docs.corndel.com/js/array-map.html) and
> [filter](https://tech-docs.corndel.com/js/array-filter.html)

### Extension

Learn about [React Bootstrap](https://react-bootstrap.github.io/) and try some
of the components out in this repo.
