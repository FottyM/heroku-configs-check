const fs = require('fs/promises');

async function getLocalConfigPath(configsPath) {
	const data = await fs.readFile(configsPath, 'utf8');
	return data.toString()
		.replace(/\s/g, '')
		.replace(/\n/g, '')
		.replace(/({|}|module.exports=|;|process.env.NODE_ENV)/g, '')
		.split(',')
		.filter(Boolean)
		.filter(slice => slice.includes('process.env'))
		.map(slice => slice.replace(/[^:]+:/g, '').replace(/process.env./g, ''))
		.filter(slice => !slice.includes('??') && !slice.includes('||'));
}

module.exports = getLocalConfigPath;
