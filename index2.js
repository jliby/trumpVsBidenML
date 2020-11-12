const brain = require("brain.js");
const data = require('./data.json')


const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

network.train(trainingData, {
    iterations: 2000
});

const output = network.run(`The numbers tell us a clear and convincing story: We're going to win this race.`);

console.log(`Category: ${output}`);