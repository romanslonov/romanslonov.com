---
title: Best way to manage modals in Vue
slug: post-1
description: I care deeply for nature. Oh, you're gonna be in a coma, all right. He'll want to use your yacht, and I don't want this thing smelling like fish. Get me a vodka rocks. And a piece of toast. No! I was ashamed to be SEEN with you. I like being with you.
date: '2022-11-10T17:01:22.920Z'
---

Since bootstrap was released there was one preferred way to create and manage modals in your app. Putting HTML markup on your page, giving an id and small piece of javascript to open it by event like click.

## The problem
But let’s say you have a table with dynamic content, it might have 5 or 5000 items. So, having one modal for one record in the table, you will have the same number of modals in the markup. Your page will bloat and takes longer to load.


## The solution
In my projects I have a tons of modals. Mostly for managing items in tables but also for other tasks, like login, confirming actions, etc. I didn’t want to copy/paste my modals everywhere when I want to use them. Instead we can use only one instance of modal component for everything. To make it possible we need to use global store.

```js
import { defineStore } from 'pinia';
```