import requests
import json

ORG_NAME = 'metakgp'

BLACKLISTED_LANGUAGES = {"Dockerfile", None, "Ruby", "CoffeeScript"}

def get_repositories(org_name):
    url = f'https://api.github.com/orgs/{org_name}/repos'
    
    repos = []
    
    response = requests.get(url, params={'sort':'updated', 'per_page': 100, 'type': 'public'}) # we only have like 70 repos so don't need to handle pagination yet
    
    if response.status_code != 200:
        print(f"Error fetching repositories: {response.status_code} - {response.text}")
        return repos
    
    data = response.json()
    
    for repo in data:
        if repo['archived'] == False and repo['language'] not in BLACKLISTED_LANGUAGES:
            repos.append({
                'name': repo['name'],
                'description': repo['description'],
                'stars': repo['stargazers_count'],
                'forks': repo['forks_count'],
                'language': repo['language'],
                'homepage': repo['homepage']
            })
    
    return repos

def save_to_json(data, filename):
    with open(filename, 'w') as json_file:
        json.dump(data, json_file, indent=4)
    print(f"Data saved to {filename}")

if __name__ == '__main__':
    repositories = get_repositories(ORG_NAME)
    save_to_json(repositories, "src/data/repo_data.json")

