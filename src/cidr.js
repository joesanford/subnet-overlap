const IPCidr = require('ip-cidr'),
  Addr = require('netaddr').Addr;

const findOverlaps = cidrs => {
  const ipOverlaps = [];

  cidrs.forEach(cidr => {
    const cidrSubnet = Addr(cidr),
      restCidrs = cidrs.splice(cidrs.indexOf(cidr), cidrs.length).filter(e => e !== cidr);

    restCidrs.forEach(restCidr => {
      const restCidrSubnet = Addr(restCidr),
        subnetIntersection = cidrSubnet.intersect(restCidrSubnet);

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

  return ipOverlaps;
};

module.exports = {
  findOverlaps
}
