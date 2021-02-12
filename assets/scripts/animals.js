const animals = (function () {
  const createdModalAndId = elementCreator.createModal("$loading");
  const $myModal = new bootstrap.Modal(
    document.getElementById(createdModalAndId),
    {
      keyboard: false,
      backdrop: "static",
    }
  );
  $myModal.toggle();
  let howManyAnimalListing = 10;
  const localDisplay = defaultAddress.defaultImages;
  const urlAndParams = defaultAddress.defaultRequestPoints;
  const _getShuffledAndSelectedAnimal = () => {
    return urlAndParams[Math.floor(Math.random() * urlAndParams.length)];
  };
  const _fetchApi = (url) => {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch(() => {
        $myModal.hide();
        return false;
      });
  };
  const _getRandomName = async () => {
    const randomNamed = await _fetchApi(defaultAddress.defaultRandomNamePoint);
    if (randomNamed === false) {
      return false;
    }
    return randomNamed.results[0].name.first;
  };
  const _fetchAnimalUrl = async (url, reponseProperty) => {
    const fetchedAnimalUrl = await _fetchApi(url);
    if (fetchedAnimalUrl === false) {
      return false;
    }
    return fetchedAnimalUrl[reponseProperty];
  };
  const _analyzeUrlForAnimalType = (animal, selectedAnimal) => {
    return animal === "dog"
      ? selectedAnimal.split("/")[selectedAnimal.split("/").length - 2]
      : "kitten or cat";
  };
  const _getRandomAnimal = async (selectedAnimal) => {
    const randomizedAnimal = {};
    const fetchedAnimalUrl = await _fetchAnimalUrl(
      selectedAnimal.url,
      selectedAnimal.returnProperty
    );
    if (fetchedAnimalUrl !== false) {
      randomizedAnimal.name = await _getRandomName();
    } else {
      return false;
    }
    if (randomizedAnimal.name !== false) {
      randomizedAnimal.image = fetchedAnimalUrl;
      randomizedAnimal.type = _analyzeUrlForAnimalType(
        selectedAnimal.animal,
        fetchedAnimalUrl
      );
      randomizedAnimal.animal = selectedAnimal.animal;
      randomizedAnimal.sound = selectedAnimal.sound;
      randomizedAnimal.soundText = selectedAnimal.soundText;
      return randomizedAnimal;
    } else {
      return false;
    }
  };
  const _collectAnimals = async (isRefresh) => {
    let collected = [];
    for (let i = 0; i < howManyAnimalListing; i++) {
      const selectedAnimal = _getShuffledAndSelectedAnimal();
      const resolvedAnimal = await _getRandomAnimal(selectedAnimal);
      if (resolvedAnimal !== false) {
        collected.push(resolvedAnimal);
      } else {
        return localDisplay;
      }
    }
    $myModal.hide();
    if (!isRefresh) {
      document.getElementById(createdModalAndId).remove();
    }
    return collected;
  };
  const init = () => {
    return _collectAnimals();
  };
  const refresh = () => {
    return _collectAnimals(true);
  };
  return {
    init,
    refresh,
  };
})();
