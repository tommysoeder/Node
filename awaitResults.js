function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }
  
  async function getResults() {
    try {
      const results = [
        await luckyDraw('Tina'),
        await luckyDraw('Jorge'),
        await luckyDraw('Julien')
      ];
  
      results.forEach(result => {
        console.log(result);
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  getResults();
  