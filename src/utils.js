const IPCidr = require('ip-cidr'),
  Addr = require('netaddr').Addr;

const findOverlaps = cidrs => {
  const ipOverlaps = [];
  try {
    cidrs = cidrs.split(' ').join('');
    cidrs = cidrs.split(',');
    cidrs.forEach(cidr => {
      const cidrSubnet = Addr(cidr),
        restCidrs = cidrs.splice(cidrs.indexOf(cidr), cidrs.length).filter(e => e !== cidr);

      restCidrs.forEach(restCidr => {
        const restCidrSubnet = Addr(restCidr),
          subnetIntersection = restCidrSubnet.intersect(cidrSubnet);

        if (subnetIntersection) {
          const intersectionCidr = new IPCidr(subnetIntersection.toString());

          ipOverlaps.push({
            intersectionStart: intersectionCidr.start(),
            intersectionEnd: intersectionCidr.end(),
            cidr1: cidr,
            cidr2: restCidr
          });
        }
      });
    });
  } catch (e) {
    ipOverlaps.push(e.toString());
  }

  return ipOverlaps;
};

module.exports = {
  findOverlaps
}
