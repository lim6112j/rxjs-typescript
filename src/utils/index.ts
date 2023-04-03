const log = (function () {
  return function (msg: string) {
    return function (v: any) {
      const desc = msg + " => " + v;
      console.log(desc);
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(desc));
      document.getElementById("results")!.appendChild(li);
    };
  };
})();

export { log };
