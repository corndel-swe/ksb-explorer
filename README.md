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

## Moving on

### Level 1

Initially, we just want to get the data being displayed nicely. You will see
that the KSBs are being displayed in a pretty raw form.

It's recommended to make two React components: one component which displays a
single KSB nicely, and another component which displays the list of KSBs.

## Level 2

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
> [map](https://tech-docs.corndel.com/js/array-map.html) and perhaps
> [filter](https://tech-docs.corndel.com/js/array-filter.html)

> [!TIP]
>
> Try `useState` to create a piece of state for the query string, and a piece of
> state for the results array.

> [!TIP]
>
> Try `useEffect` to make sure the results array changes whenever the query
> string changes. Be sure to add the user query string to the dependency array
> of the useEffect.
