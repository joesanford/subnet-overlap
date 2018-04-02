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
      console.log('current: ', cidrSubnet);
      console.log('rest: ', restCidrs);

      restCidrs.forEach(restCidr => {
        const restCidrSubnet = Addr(restCidr),
          subnetIntersection = restCidrSubnet.intersect(cidrSubnet);

        console.log('intersect: ', subnetIntersection);

        if (subnetIntersection) {
          const intersectionCidr = new IPCidr(subnetIntersection.toString());

          ipOverlaps.push({
            name: intersectionCidr.cidr,
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

  console.log('results' + ipOverlaps);
  return ipOverlaps;
};

module.exports = {
  findOverlaps
}
