const { AutoId } = require('../models/AutoId');

const getValueForNextSequence = async (sequenceOfName, id) => {
    console.log('[getvaluefornext]', sequenceOfName, id);
    if (!id) {
        const sequenceDoc = await AutoId.findOne({ field_name: sequenceOfName }).sort(
            '-field_value'
        );
        const newSequenceDoc = await new AutoId({
            field_name: sequenceOfName,
            field_value: sequenceDoc.field_value + 1,
            field_counts: 0
        }).save();
        return newSequenceDoc.field_value;
    }
    const sequenceDoc = await AutoId.findOne({
        field_name: sequenceOfName,
        field_value: id.replace(/\D/g, '')
    }).sort('-field_counts');
    const newSequenceDoc = await new AutoId({
        field_name: sequenceOfName,
        field_value: sequenceDoc.field_value,
        field_counts: sequenceDoc.field_counts + 1
    }).save();
    const { field_value, field_counts } = newSequenceDoc;
    return '' + field_value + nextChar(field_counts - 1);
};
function nextChar(c) {
    return String.fromCharCode('a'.charCodeAt(0) + c);
}
module.exports = { getValueForNextSequence };
