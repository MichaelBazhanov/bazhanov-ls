const { defaults } = require('jest-config');
module.exports = {
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'json', 'vue'],
	transform: {
		".*\\.(vue)$": "vue-jest",
		".*\\.(js)$": "babel-jest"
	}
}



//старый вариант от loftSchool
// module.exports = {
// 	"jest": {
// 		"moduleFileExtensions": [
// 			//настройка указывает какие файлы обрабатывать
// 			"js",
// 			"json",
// 			"vue"
// 		],
// 		"transform": {
// 			// настройка указывает то как именно обрабатывать файлы
// 			".*\\.(vue)$": "vue-jest",
// 			".*\\.(js)$": "babel-jest"
// 		}
// 	}
// }