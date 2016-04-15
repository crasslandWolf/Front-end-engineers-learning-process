var vm = new Vue({
	el: "#app",
	data: {
		items: [
	        { childMsg: 'Foo' },
	        { childMsg: 'Bar' }
	    ],
		setArray: [1, 2, 3, 4, 5],
		removeArray: [1, 2, 3, 4, 5],
		checkboxArray: [],
		radioArray: [],
		setArrayData: {
			index: 0,
			vauel: ''
		},
		removeArrayData: {
			value: ''
		},
		selectArrayData: {
			id: '',
			value: ''
		},
		selectArrayDatas: [
			{
				id: "111111",
				value: "第一个"
			},
			{
				id: "222222",
				value: "第二个"
			},
			{
				id: "333333",
				value: "第三个"
			}
		],
		selectedData: '',
		filterArray: ['filter', 'filter test', 'jinzk'],
		vForObjData: {
			"name": "jinzk",
			"age": 23,
			"sex": "man",
			"author": "jinzk-crassland_wolf"
		},
		orderByData: [4,1,3,8,5,3]
	},
	methods: {
		/**
		 * [setArrayFn Array.$set(index, value)]
		 * @param {[type]} index [description]
		 * @param {[type]} value [description]
		 */
		setArrayFn: function (index, value) {
			if(index == '' || value == '') {
				alert('请先填写字段...');					
			}else {
				vm.setArray.$set(index, value);
			}
			
		},
		/**
		 * [removeArrayFn Array.$remove(index, value)]
		 * @param  {[type]} value [description]
		 * @return {[type]}       [description]
		 */
		removeArrayFn: function (value) {
			console.log(value);
			if(value !== '') {
				vm.removeArray.$remove(parseInt(value));
			}else {
				alert('请先填写字段...');
			}
		},
		getSelectDataId: function (id) {
			console.log(id);
		},
		reverseArr: function () {
			vm.setArray.reverse();
		},
		fliterFn: function () {
			vm.filterArray = vm.filterArray.filter(function (item) {
				return item.match(/filter/);
			})
		}
	},
	watch: {
		selectedData: function (value) {
			console.log(value);
		}
	}
})