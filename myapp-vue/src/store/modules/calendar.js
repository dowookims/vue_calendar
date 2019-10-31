const state = {
	today: "",
	baseDay: "",
	baseFirstDay: "",
	baseLastDate: "",
	baseLastMonthDate: "",
	selectDate: "",
	selectMonth: ""
};

const getters = {
	today: state => state.today,
	baseDay: state => state.baseDay,
	baseFirstDay: state => state.baseFirstDay,
	baseLastDate: state => state.baseLastDate,
	baseLastMonthDate: state => state.baseLastMonthDate,
	selectDate: state => state.selectDate,
	selectMonth: state => state.selectMonth
};

const actions = {};

const mutations = {
	setToday: state => (state.today = new Date()),
	setBaseDay: state => (state.baseDay = new Date()),
	setBaseOtherDay: (state, payload) => {
		state.baseDay = new Date(state.baseDay.getFullYear(), payload, 0);
	},
	setBaseFirstDay: state => {
		const monthFirst = new Date(
			state.baseDay.getFullYear(),
			state.baseDay.getMonth(),
			1
		);
		state.baseFirstDay = monthFirst.getDay();
	},
	setBaseLastDate: state => {
		const d = new Date(
			state.baseDay.getFullYear(),
			state.baseDay.getMonth() + 1,
			0
		);
		state.baseLastDate = d.getDate();
	},
	setBaseLastMonthDate: state => {
		const lastMonthLastDay = new Date(
			state.baseDay.getFullYear(),
			state.baseDay.getMonth(),
			0
		);
		state.baseLastMonthDate = lastMonthLastDay.getDate();
	},
	setSelectDate: (state, payload) => {
		state.selectDate = new Date(
			state.baseDay.getFullYear(),
			state.baseDay.getMonth(),
			payload
		);
	},
	setOtherYear: (state, payload) => {
		state.baseDay = new Date(
			state.baseDay.getFullYear() + payload,
			state.baseDay.getMonth(),
			0
		);
	},
	setSelectMonth: (state, payload) => {
		state.selectMonth = payload;
	}
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
};
