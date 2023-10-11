const uniqid = require("uniqid");

const cubes = [
  {
    name: "Cube",
    description: "no",
    imageUrl: "https://static6.depositphotos.com/1032436/666/i/450/depositphotos_6660591-stock-photo-black-3d-futuristic-cube.jpg",
    difficultyLevel: 5,

  },
];

exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };

  cubes.push(newCube);
  return newCube;
};

exports.getAll = (search, from, to) => {
    let filterCubes = [...cubes];
  
    if (search) {
      filterCubes = filterCubes.filter((cube) =>
        cube.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    if (from) {
      filterCubes = filterCubes.filter(
        (cube) => cube.difficultyLevel >= Number(from)
      );
    }
  
    if (to) {
      filterCubes = filterCubes.filter(
        (cube) => cube.difficultyLevel <= Number(to)
      );
    }
  
    return filterCubes;
  };
  
  exports.getSingleCube = (id) => {
    return cubes.find((cube) => cube.id === id);
  };