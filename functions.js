
//2 list function

function list(clients) {
  const listClient = clients.map((client) => `
  <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
  <strong>${client.name}</strong> 
  $${client.balance}
  </li>
`)
  return listClient.join('')
}

// 3 order function 
function order(clients, property) {
  const sortedClients = clients.slice();
  sortedClients.sort((clientA, clientB) => {
    if (clientA[property] < clientB[property]) {
      return -1;
    } else if (clientA[property] > clientB[property]) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedClients;
}
//4 total function
function total(clients) {
  const balance = clients.reduce((sum, client) => sum + client.balance, 0)
  return balance;
}
// 5 info function
function info(index) {

  const match = clients.find((client) => client.index === index)
  return match
}
// 6 search function

function search(searchQuery) {
  const data = clients.filter((client) =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()))
  return data;
}

