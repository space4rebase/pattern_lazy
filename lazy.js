class LazyValue {
	constructor(factory) {
		this.factory = factory;
		this.state = {
				isForced: false
		};
	}

	force(...args) {
		if (!this.state.isForced) {
			this.state = {
				isForced: true,
				value: this.factory(args),
			}
		}

		return this.state.value;
	}
}

function lazy(factory) {
	return new LazyValue(factory);
}

function force (value, ...args) {
	return value.force(...args);
}

// Example

const lazyInstance = lazy(arg => `My ${arg}`);
force(lazyInstance, 'data');
console.log(lazyInstance.state.value);

force(lazyInstance, 'data2');
console.log(lazyInstance.state.value);