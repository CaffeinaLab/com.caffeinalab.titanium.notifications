var args = _.extend({
	duration: 2000,
	animationDuration: 250,
	message: '',
	title: Ti.App.name,
	elasticity: 0.5,
	pushForce: 30,
	usePhysicsEngine: true
}, arguments[0] || {});

var That = null;

exports.show = function(opt) {
	That = Widget.createController(OS_IOS ? 'ios' : 'android',
	_.extend(args, _.isObject(opt) ? opt : (_.isString(opt) ? { message: opt }: {})
	));
};

exports.hide = function() {
	if (That) That.hide();
};