import fs from "fs";

const TOKEN = "3dbc92971f310dd0e69b672a3b59d117";

const batmanIds = [
    17, 58, 63, 69, 73, 334, 491, 505, 546, 549, 561,
    60, 165, 181, 214, 216, 370, 386, 427, 457, 461,
    514, 522, 538, 558, 576, 609, 678
];

async function fetchCharacters() {
    const results = [];

    for (const id of batmanIds) {
        const res = await fetch(
            `https://superheroapi.com/api/${TOKEN}/${id}`
        );
        const data = await res.json();

        results.push({
            id: data.id,
            name: data.name,
            image: data.image.url
        });
    }

    fs.writeFileSync(
        "src/data/batmanCharacters.json",
        JSON.stringify(results, null, 2)
    );

    console.log("Batman data saved locally 🦇");
}

fetchCharacters();
