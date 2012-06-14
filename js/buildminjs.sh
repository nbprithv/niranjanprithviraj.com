java -jar ../../yuicompressor-2.4.7/build/yuicompressor-2.4.7.jar -o main.js.min main.js
java -jar ../../yuicompressor-2.4.7/build/yuicompressor-2.4.7.jar -o data.js.min data.js
cat jquery-hashchange-min.js > main-min.js
cat main.js.min >> main-min.js
cat data.js.min >> main-min.js
