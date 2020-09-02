export default {
	namespaced: true,
	state: {
		isShown: false, //отобразить или нет
		text: '',
		type: 'success'
	},
	mutations: {
		SET_TOOLTIP: (state, tooltip) => {
			state.isShown = tooltip.isShown;
			state.text = tooltip.text;
			state.type = tooltip.type;
		}
	},
	actions: {
		show({commit, dispatch}, tooltip) {
			let timeout = null;

			commit("SET_TOOLTIP", {
				isShown: true, //отобразить или нет
				text: tooltip.text,
				type: tooltip.type
			});

			if(timeout) { //если что то есть в таймауте то очищаем
				clearTimeout(timeout);
			}

			timeout = setTimeout( () => {
				dispatch('hide')
			}, 2000)
		},
		hide({commit, state}) {
			commit("SET_TOOLTIP", {
				...state, //возьмем все поля state и заменим только одно isShown
				isShown: false, //отобразить или нет
			})
		}
	}

}