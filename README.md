<!-- <p align="center"><img src="logo.png" /></p> -->

<h1 align="center"> Caseize </h1>

<p align="center"> Deeply case any object/collection's keys </p>

<hr/>

<p> Caseize allow you to transform deeply any object or collection by casing keys. At this time only snakecase and camelcase are compatible. But feel free to add any case type you want and PR them to be available to the community.</p>

<h3> List of features </h3>

<ul>
  <li>Casing to snakecase</li>
  <li>Casing to camelcase</li>
</ul>

<!-- <h3> Demo </h3> -->

<!-- <a href="#"> Link to Demo </a> -->

<h3> Code Demo </h3>

```js
import caseize from 'caseize'

const inputData = {
  snake_case_key: 'value',
  mixed_caseKey: 'value',
}

const outputData = caseize(inputData, 'camelcase')

// outputData === {
//   snakeCaseKey: 'value',
//   mixedCaseKey: 'value,
// }

```

<h3> Download & Installation </h3>

```shell
$ npm i caseize
```
<h3>Contributing</h3>
Keep it simple. Keep it minimal. Don't put every single feature just because you can.

<h3>Authors or Acknowledgments</h3>
<ul>
  <li>abdalem</li>
</ul>

<h3>License</h3>

This project is licensed under the ISC License
