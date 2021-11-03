const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]
async function fetchUser(){
	const resp = await fetch(urls[1])
	const data = await resp.json()
	
	console.log(data)
}

fetchUser()