
/* @ngInject */
myApp.config(function($httpProvider) {
	$httpProvider.interceptors.push('noCacheInterceptor');
})

myApp.factory('noCacheInterceptor', function() {
	return {
		request: function(config) {
			console.log(config.method);
			console.log(config.url);

			if(config.method == 'GET') {
				var separator = config.url.indexOf('?') === -1 ? '?' : '&';
                config.url = config.url+separator+'noCache=' + new Date().getTime();
			}

			console.log(config.method);
			console.log(config.url);

			return config;
		}
	}
})
