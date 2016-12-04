var page = new tabris.Page({
  topLevel: true,
  title: "hello"
});
new tabris.TextView({
  layoutData: {centerX: 0, centerY: 0},
  text: "Hello Tabris World!"
}).appendTo(page);
page.open();
