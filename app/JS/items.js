const games = [
    {
      name: "Elden Ring",
      releaseDate: "2022-02-25",
      price: 59.99,
      sale: Math.random() * (0.60 - 0.10) + 0.10, // Random discount between 10% and 60%
      platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
      studio: "FromSoftware",
      director: "Hidetaka Miyazaki"
    },
    {
      name: "Sekiro: Shadows Die Twice",
      releaseDate: "2019-03-22",
      price: 59.99,
      sale: Math.random() * (0.60 - 0.10) + 0.10,
      platforms: ["PC", "PS4", "Xbox One"],
      studio: "FromSoftware",
      director: "Hidetaka Miyazaki"
    },
    {
      name: "Hollow Knight",
      releaseDate: "2017-02-24",
      price: 14.99,
      sale: Math.random() * (0.60 - 0.10) + 0.10,
      platforms: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
      studio: "Team Cherry",
      director: "Ari Gibson"
    },
    {
      name: "Bloodborne",
      releaseDate: "2015-03-24",
      price: 19.99,
      sale: Math.random() * (0.60 - 0.10) + 0.10,
      platforms: ["PS4"],
      studio: "FromSoftware",
      director: "Hidetaka Miyazaki"
    },
    {
      name: "Dark Souls",
      releaseDate: "2011-09-22",
      price: 39.99,
      sale: Math.random() * (0.60 - 0.10) + 0.10,
      platforms: ["PC", "PS3", "Xbox 360"],
      studio: "FromSoftware",
      director: "Hidetaka Miyazaki"
    },
    {
      name: "Dark Souls II",
      releaseDate: "2014-03-11",
      price: 39.99,
      sale: Math.random() * (0.60 - 0.10) + 0.10,
      platforms: ["PC", "PS3", "Xbox 360"],
      studio: "FromSoftware",
      director: "Tomohiro Shibuya, Yui Tanimura"
    },
    {
      name: "Dark Souls III",
      releaseDate: "2016-03-24",
      price: 59.99,
      sale: Math.random() * (0.60 - 0.10) + 0.10,
      platforms: ["PC", "PS4", "Xbox One"],
      studio: "FromSoftware",
      director: "Hidetaka Miyazaki"
    }
  ];
  