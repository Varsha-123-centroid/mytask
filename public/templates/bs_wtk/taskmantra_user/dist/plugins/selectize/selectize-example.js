
	$('.rs-selectize-tags').selectize({
		persist: false,
		createOnBlur: true,
		create: true
	});

	$('.rs-selectize-optgroup').selectize({
		sortField: 'text',
		create: true
	});


	$('.rs-selectize-programmatic').selectize({
		options: [
			{class: 'mammal', value: "dog", name: "Dog" },
			{class: 'mammal', value: "cat", name: "Cat" },
			{class: 'mammal', value: "horse", name: "Horse" },
			{class: 'mammal', value: "kangaroo", name: "Kangaroo" },
			{class: 'bird', value: 'duck', name: 'Duck'},
			{class: 'bird', value: 'chicken', name: 'Chicken'},
			{class: 'bird', value: 'ostrich', name: 'Ostrich'},
			{class: 'bird', value: 'seagull', name: 'Seagull'},
			{class: 'reptile', value: 'snake', name: 'Snake'},
			{class: 'reptile', value: 'lizard', name: 'Lizard'},
			{class: 'reptile', value: 'alligator', name: 'Alligator'},
			{class: 'reptile', value: 'turtle', name: 'Turtle'}
		],
		optgroups: [
			{value: 'mammal', label: 'Mammal', label_scientific: 'Mammalia'},
			{value: 'bird', label: 'Bird', label_scientific: 'Aves'},
			{value: 'reptile', label: 'Reptile', label_scientific: 'Reptilia'}
		],
		optgroupField: 'class',
		labelField: 'name',
		searchField: ['name'],
		render: {
			optgroup_header: function(data, escape) {
				return '<div class="optgroup-header">' + escape(data.label) + ' <span class="scientific">' + escape(data.label_scientific) + '</span></div>';
			}
		}
	});



	var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
	                  '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

	var formatName = function(item) {
		return $.trim((item.first_name || '') + ' ' + (item.last_name || ''));
	};

	