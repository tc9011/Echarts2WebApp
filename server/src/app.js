const puppeteer = require('puppeteer');
const fs = require('fs');
const configs = require('./config/config');

let options = [];
let txtData = '';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // go to echarts option page
  await page.goto(configs.url + '#' + configs.path);
  await page.waitFor(5000);
  console.log('on option page now, begin to crawl the page, wait for a moment.');

  // get parent option data
  console.log('begin to crawl the parent option data');
  const parents = await page.evaluate(() => {
    let parentOptions = [];
    const list = document.querySelectorAll('.dtui-treelist-parent .ecdoc-api-tree-text-prop');
    list.forEach((value) => {
      parentOptions.push(value.innerText);
    });
    console.log('finish crawling the parent option data.');
    return parentOptions;
  });

  console.log(parents);

  for (result of parents) {
    const option = {
      [result]: [],
    };
    await page.goto(configs.url + '#' + result);
    await page.waitFor(2000);
    console.log(`begin to crawl the ${result} option data.`);
    option[result] = await page.evaluate(() => {
      let subOptions = [];
      const names = document.querySelectorAll('.ecdoc-api-doc-line-label strong');
      const types = document.querySelectorAll('.ecdoc-api-doc-line-head .ecdoc-api-doc-line-type');
      names.forEach((value, index) => {
        const subObj = {
          name: value.innerText,
          type: types[index].innerText,
        };
        subOptions.push(subObj);
      });
      return subOptions;
    });

    options.push(option);
  }
  console.log('finish crawling the children option data.');

  for (let i = 0; i < parents.length; i++) {
    const parentOption = parents[i];
    txtData += 'export interface ' + parentOption + 'Typings {\n';

    for (childOption of options[i][parentOption]) {
      txtData += '  ' + childOption.name + ': ' + childOption.type + ';\n'
    }
    txtData += '}\n\n';
  }

  console.log('begin to write file.');

  fs.writeFile('./src/results/result.ts', txtData, err => {
    console.log(err ? err : 'done');
  });

  await browser.close();
})();