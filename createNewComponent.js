const fs = require("fs");
const path = require("path");

const main = () => {
  const componentName = process.argv[2];
  const componentsPath = path.join(__dirname, "\\src\\components");

  if (process.argv.length > 3) {
    console.log("Script only uses 1 argument");
    return;
  } else if (!componentName) {
    console.log("Enter a component name as an argument");
    return;
  } else {
    const formattedName =
      componentName.charAt(0).toUpperCase() + componentName.slice(1);

    const js = `import style from './${formattedName}.module.css';
    
const ${formattedName} = () => {
    
};
        
export default ${formattedName}`;

    createJS(componentsPath, js, formattedName);
    createCSS(componentsPath, "", formattedName);
  }
};

const createJS = (componentsPath, data, formattedName) => {
  fs.writeFile(`${componentsPath}\\${formattedName}.js`, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("js created successfully");
    }
  });
};

const createCSS = (componentsPath, data, formattedName) => {
  fs.writeFile(
    `${componentsPath}\\${formattedName}.module.css`,
    data,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("css created successfully");
      }
    }
  );
};

main();
