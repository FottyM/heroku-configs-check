const {co} = require('co');
const fs = require('fs/promises');

function * getLocalConfigPath(configsPath) {
	const data = yield fs.readFile(configsPath, 'utf8');
	return data.toString()
		.replace(/\s/g, '')
		.replace(/\n/g, '')
		.replace(/({|}|module.exports=|;)/g, '')
		.split(',')
		.filter(Boolean)
		.map(slice => slice.replace(/[^:]+:/g, '').replace(/process.env./g, ''))
		.filter(slice => !slice.includes('??') && !slice.includes('||'));
}

module.exports = co.wrap(getLocalConfigPath);
