const generate = () => {
  var fs = require('fs');
  fs.readFile(
    'node_modules/react-native-scrollable-tab-view/index.js',
    'utf8',
    function (err, data) {
      var result = data.replace('.getNode()', '');
      fs.writeFile(
        'node_modules/react-native-scrollable-tab-view/index.js',
        result,
        'utf8',
        function (err) {},
      );
    },
  );
};
generate();
