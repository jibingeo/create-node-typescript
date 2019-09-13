!(async () => {
  const msg = await Promise.resolve("hello world");
  console.log(msg);
})()
