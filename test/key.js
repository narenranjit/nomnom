var argparse = require("../lib/argparse"),
    assert = require("assert"),
    sys = require("sys");

opts = [
  { name: 'aname',
    string: '-a'
  },
  { name: 'cname',
    full: '--config=PATH'
  },
  { name: 'bname',
    string: '--bkey'
  }
];

var parser = new argparse.ArgParser(opts);
var options = parser.parse(["-a", "--config", "--bkey"]);

assert.ok(options.aname);
assert.ok(options.cname);
assert.ok(options.bname);
assert.ok(!options.a);
assert.ok(!options.config);
assert.ok(!options.bkey);
