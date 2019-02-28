export default {
	checkedAll(state, getters) {
		let dataLen = getters.dataLen;
    	return getters.checkedCount === dataLen && dataLen !== 0;
	}
}
