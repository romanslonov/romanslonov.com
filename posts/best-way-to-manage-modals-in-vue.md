---
title: Best way to manage modals in Vue
slug: best-way-to-manage-modals-in-vue
description: Learn best possible solution to manage modals in your Vue 3 application. Using store and hooks.
date: '2022-10-01T07:00:00.000Z'
---

Since bootstrap was released there was one preferred way to create and manage modals in your app. Putting HTML markup on your page, giving an id and small piece of javascript to open it by event like click.

## The problem

But let’s say you have a table with dynamic content, it might have 5 or 5000 items. So, having one modal for one record in the table, you will have the same number of modals in the markup. Your page will bloat and takes longer to load.

## The solution

In my projects I have a tons of modals. Mostly for managing items in tables but also for other tasks, like login, confirming actions, etc. I didn’t want to copy/paste my modals everywhere when I want to use them. Instead we can use only one instance of modal component for everything. To make it possible we need to use global store.

```js
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    opened: false,
    options: null,
    payload: null,
    dismissed: false,
  }),
});
```

I prefer to keep methods to change store’s state in composable function. So we will use only this function to manage our modal from anywhere. Let’s create it.

```js
import { storeToRefs } from 'pinia';
import { markRaw, onUnmounted } from 'vue';
import { useModalStore } from './store';

const defaults = {
  role: 'dialog',
  size: 'md',
  dismissible: true,
  dismissOn: 'backdrop esc close-button',
  onClose() {},
  onDismiss() {},
};

export const useModal = () => {
  const { options, opened, payload, dismissed } = storeToRefs(useModalStore());

  const open = (_options) => {
    // Make sure you wrap it in `markRaw` function for better performance as we don't need
    // to make component instance to be reactive
    options.value = markRaw({ ...defaults, ..._options });
    opened.value = true;
  };

  const close = (data, options = { dismissed: false }) => {
    opened.value = false;
    payload.value = data;
    dismissed.value = options.dismissed;
  };

  const clear = () => {
    payload.value = null;
    options.value = null;
    dismissed.value = false;
  };

  const dismiss = () => {
    close(null, { dismissed: true });
  };

  onUnmounted(() => {
    close(null, { dismissed: true });
  });

  return {
    open,
    close,
    clear,
    dismiss,
    options,
    opened,
    payload,
    dismissed,
  };
};
```

We have default options here to open modal and all methods to manage it. The most important thing here is that we divided dismiss and close into two separate methods. The main difference between them is that close method can get data that we can pass from modal up to parent component where we opened this modal.

The last thing you have to do is to implement your own modal component. There are many ways to implement it, I give you a basic idea how you can do it.

```js
<template>
  <transition name="modal">
    <div v-if="opened">
      <h4>{{ options.title }}</h4>
      <button type="button" @click="dismiss">x</button>
    </div>
    <div>
      <component v-bind="options.props" is="options.component" />
    </div>
  </transition>
</template>

<script setup>
import { useModal } from '@/components/Modal';

const { opened, dismiss, options } = useModal();
</setup>
```

You usually have to place it in your App.vue or default layout.

So now we can open our modal! Create the content of modal in separate component and pass it in options of `open` method. Inside of this Login.vue example component, you have to call `close` method from `useModal()` composable function to close the modal with some data from login form.

```js
<script setup>
import { useModal } from '@/components/Modal';

const {open: openModal } = useModal();

const openLoginModal = () => {
  openModal({
    title: 'Login modal',
    props: { some: 'value' },
    onClose: (data) => {
      // you can do whatever you want with this data from your login form here, ex.
      // sending to your server
    },
    component: defineAsyncComponent (() => import('@/components/modals/Login.vue')),
  });
}
</script>
```

That’s it! We created flexible modal system for a project of any complexity. If you have any question you can reach me out in comments below or via social media.

Thanks!
