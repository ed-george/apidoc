function parse(content)
{
	// Trim
	name = content.replace(/^\s+|\s+$/g, "");

	if(content.length === 0) return null;
	return {
		defineHeaderStructure: name
	};
} // parse

function pushTo()
{
	return "global";
} // pushTo

/**
 * Exports.
 */
module.exports = {
	parse: parse,
	pushTo: pushTo
};