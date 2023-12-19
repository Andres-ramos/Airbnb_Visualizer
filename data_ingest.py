import requests 
import json
import random

url = "http://127.0.0.1:8000/airbnb/"


#Data Preparation
def prepare_data(airbnb:dict, host:str) -> dict:
    '''
    Prepares airbnb data to send to backend
    Removes currency and images
    Adds location and host
    '''
    #Deletes extra info
    del airbnb["currency"]
    del airbnb["images"]
    #Tranforms location 
    airbnb["location"] = prepare_location(airbnb['location'])
    airbnb["host"] = host
    return airbnb

def prepare_location(location:dict)-> str:
    '''
    Changes location format to string
    '''
    lat = location["lat"]
    lng = location["lng"]
    return f"SRID=4326;POINT ({lng} {lat})"

#Host mock data
def generate_host_list(num_hosts, list_size):
    '''
    Mocks host data
    Input: num_hosts, size_list :
    Output: host list of size 'list_size' 
    '''
    hosts = [f"host{i}" for i in range(num_hosts)]
    return [random.choice(hosts) for i in range(list_size)]

def add_host(airbnb, host_number):
    '''
    Adds host to airbnb entry
    '''
    airbnb['host'] = f"host{host_number}"
    return airbnb

#Backend request
def create_airbnb(airbnb:dict) -> requests.models.Response:
    '''
    Sends request to create airbnb entry in backend
    '''
    try :
        headers = {'Content-Type': 'application/json'}
        response = requests.post(url, headers=headers, data=json.dumps(airbnb))
        return response
    except Exception as e:
        print(e)

#Main method
def data_ingest(csv_path:str)-> None:
    #Loads data
    f = open(csv_path)
    data = json.load(f)
    raw_airbnbs= data['payload']['listings']

    #Prepares host mock data
    num_hosts = 100
    host_list = generate_host_list(num_hosts, 1000)
    
    for raw_airbnbs, host in zip(raw_airbnbs, host_list):
        #Cleans data
        airbnb = prepare_data(raw_airbnbs, host)
        #Sends request to backend 
        r = create_airbnb(airbnb)
        print(json.loads(r.text)['id'])
    return 


csv_path = "./airbnb_data/sanjuan_airbnb.json"
data_ingest(csv_path)