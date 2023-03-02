TypeScript ExtJS Custom Events Demo
===================================

在ExtJs中可以定义任意名字的event，它们可能跟浏览器内置的相同，也可以完全不同。

因为对于非浏览器event，需要靠代码调用来触发，实际上和调用一个方法差不多。

在代码里，可以通过 `listeners: {...}`来匹配，也可以通过`component.fireEvent('custom-event', component)`来触发。

比如本例中，可以通过`hello.app.mainView.fireEvent('myEvent', hello.app.mainView)`触发。

```
npm install
npm start
```

It will open page on browser automatically.
