import requests
import threading
# Usage: python3 checker.py threads
def check_proxy(proxy):
    try:
        response = requests.get('https://www.google.com/', proxies={'http': proxy, 'https': proxy}, timeout=15)
        if response.status_code == 200:
            print(f"Proxy is working -> {proxy}")
            with open('proxy.txt', 'a') as f:
                f.write(proxy + '\n')
        else:
            print(f"Proxy {proxy}")
    except:
        print(f"Proxy is not working -> {proxy}")

# Read proxies from a file
with open('http.txt', 'r') as f:
    proxy_list = f.read().splitlines()

# Create threads to check proxies
threads = []
for proxy in proxy_list:
    thread = threading.Thread(target=check_proxy, args=[proxy])
    thread.start()
    threads.append(thread)

# Wait for all threads to finish
for thread in threads:
    thread.join()
