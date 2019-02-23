function getAllAddresses(ip, mask, cb) {

    let octets = ip.split('.');
    let ipBin = '';

    octets.forEach(octet => {
        ipBin += format((octet >>> 0).toString(2), 8);
    });

    let netAddressBin = broadcastAddressBin = ipBin;

    for (let i = mask; i < 32; i++) {
        netAddressBin = replaceAt(netAddressBin, i, '0');
        broadcastAddressBin = replaceAt(broadcastAddressBin, i, '1');
    }

    let netAddress = broadcastAddress = '';

    for (let i = 0; i < 32; i += 8) {
        netAddress += `${parseInt(netAddressBin.substr(i, 8), 2)}.`;
        broadcastAddress += `${parseInt(broadcastAddressBin.substr(i, 8), 2)}.`;
    }

    cb({
        network: netAddress.substr(0, netAddress.length - 1),
        broadcast: broadcastAddress.substr(0, broadcastAddress.length - 1),
        count: Math.pow(2, 32 - mask) - 2
    });
}

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

function format(s, length) {
    let str = `${s}`;

    for (let i = 0; i < length - s.length; i++) {
        str = '0' + str;
    }

    return str;
}

module.exports = {
    getAllData: getAllAddresses
};