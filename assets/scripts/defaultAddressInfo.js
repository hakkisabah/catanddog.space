const defaultAddress = (function () {
  const defaultImages = [
    {
      name: "Jovan",
      image: "assets/images/default-images/n02113186_2431.jpg",
      type: "corgi-cardigan",
      animal: "dog",
      sound: "bark",
      soundText:
        "<span class='text-info text-decoration-underline font-weight-bold'>Bark</span>\ntype b",
    },
    {
      name: "Maja",
      image: "assets/images/default-images/n02112706_663.jpg",
      type: "brabancon",
      animal: "dog",
      sound: "bark",
      soundText:
        "<span class='text-info text-decoration-underline font-weight-bold'>Bark</span>\ntype b",
    },
    {
      name: "Iver",
      image: "assets/images/default-images/n02093428_995.jpg",
      type: "terrier-american",
      animal: "dog",
      sound: "bark",
      soundText:
        "<span class='text-info text-decoration-underline font-weight-bold'>Bark</span>\ntype b",
    },
    {
      name: "Sofia",
      image: "assets/images/default-images/n02110185_13197.jpg",
      type: "husky",
      animal: "dog",
      sound: "bark",
      soundText:
        "<span class='text-info text-decoration-underline font-weight-bold'>Bark</span>\ntype b",
    },
    {
      name: "Laurie",
      image: "assets/images/default-images/n02098413_2584.jpg",
      type: "lhasa",
      animal: "dog",
      sound: "bark",
      soundText:
        "<span class='text-info text-decoration-underline font-weight-bold'>Bark</span>\ntype b",
    },
    {
      name: "Abby",
      image: "assets/images/default-images/n02105162_5556.jpg",
      type: "malinois",
      animal: "dog",
      sound: "bark",
      soundText:
        "<span class='text-info text-decoration-underline font-weight-bold'>Bark</span>\ntype b",
    },
    {
      name: "Jos",
      image: "assets/images/default-images/bs3vdvb.jpg",
      type: "kitten or cat",
      animal: "cat",
      sound: "meow",
      soundText:
        "<span class='text-info text-decoration-underline font-weight-bold'>Meow</span>\ntype m",
    },
    {
      name: "Gonca",
      image: "assets/images/default-images/xRbn6.jpg",
      type: "kitten or cat",
      animal: "cat",
      sound: "meow",
      soundText:
        "<span class='text-info text-decoration-underline font-weight-bold'>Meow</span>\ntype m",
    },
    {
      name: "Boris",
      image: "assets/images/default-images/n02107574_955.jpg",
      type: "mountain-swiss",
      animal: "dog",
      sound: "bark",
      soundText:
        "<span class='text-info text-decoration-underline font-weight-bold'>Bark</span>\ntype b",
    },
    {
      name: "Traudl",
      image: "assets/images/default-images/634.jpg",
      type: "kitten or cat",
      animal: "cat",
      sound: "meow",
      soundText:
        "<span class='text-info text-decoration-underline font-weight-bold'>Meow</span>\ntype m",
    },
  ];
  const defaultRequestPoints = [
    {
      animal: "cat",
      url: "https://aws.random.cat/meow",
      returnProperty: "file",
      sound: "meow",
      soundText:
        "<span class='text-info text-decoration-underline font-weight-bold'>Meow</span>\ntype m",
    },
    {
      animal: "dog",
      url: "https://dog.ceo/api/breeds/image/random",
      returnProperty: "message",
      sound: "bark",
      soundText:
        "<span class='text-info text-decoration-underline font-weight-bold'>Bark</span>\ntype b",
    },
  ];
  const defaultRandomNamePoint = "https://randomuser.me/api/?inc=name";
  return {
    defaultImages,
    defaultRequestPoints,
    defaultRandomNamePoint,
  };
})();
