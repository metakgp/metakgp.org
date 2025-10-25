import requests
import json

ORG_NAME = 'metakgp'


def get_repositories(org_name):
    url = f'https://api.github.com/orgs/{org_name}/repos'

    repos = dict()

    response = requests.get(url, params={'sort': 'updated', 'per_page': 100, 'type': 'public'})

    if response.status_code != 200:
        print(f"Error fetching repositories: {response.status_code} - {response.text}")
        return repos

    data = response.json()

    for repo in data:
        repos[repo.get('name')] = {
            'stars': repo.get('stargazers_count', 0),
            'forks': repo.get('forks_count', 0),
        }

    return repos


def update_repo_data(fetched_repos, filename):
    with open(filename, 'r') as f:
        existing = json.load(f)

    updated = []

    for repo in existing:
        name = repo.get('name')
        fetched = fetched_repos.get(name)
        if fetched:
            repo['stars'] = fetched.get('stars', 0)
            repo['forks'] = fetched.get('forks', 0)

        updated.append(repo)

    with open(filename, 'w') as f:
        json.dump(updated, f, indent=4)
    print(f"Wrote updated data to {filename}")


if __name__ == '__main__':
    repositories = get_repositories(ORG_NAME)
    update_repo_data(repositories, "src/data/repo_data.json")

