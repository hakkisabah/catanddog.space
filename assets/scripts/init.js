const init = (async function () {
  let _data = await animals.init();
  const refreshImg = document.getElementById("refresh-img");
  const awaitBg = document.getElementById("await-background");
  // CAT https://aws.random.cat/meow =>> return file property
  // DOG https://dog.ceo/api/breeds/image/random =>> return message property
  setter.init(_data);

  const _dataRefresher = async () => {
    _data = await animals.refresh();
    refreshImg.style.display = "block";
    awaitBg.style.display = "none";
  };

  const putRefreshElement = () => {
    refreshImg.style.display = "none";
    awaitBg.style.display = "block";
    document.querySelector("tbody").remove();
    const $tbody = document.createElement("tbody");
    document.querySelector("table").appendChild($tbody);
  };

  const refresh = () => {
    putRefreshElement();
    setter.init(_data);
    _dataRefresher();
  };

  await _dataRefresher();
  refreshImg.style.display = "block";
  awaitBg.style.display = "none";
  refreshImg.addEventListener("click", function () {
    refresh();
  });

  return {
    refresh,
  };
})();
