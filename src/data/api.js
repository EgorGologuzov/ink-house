import prods from "./json/products.json"
import team from "./json/team.json"

const prodsJson = JSON.stringify(prods);
const teamJson = JSON.stringify(team);

export function getProducts() {
  const result = JSON.parse(prodsJson);
  return new Promise((resolve) => setTimeout(() => resolve(result), 500));
}

export function getTeam() {
  const result = JSON.parse(teamJson);
  return new Promise((resolve) => setTimeout(() => resolve(result), 500));
}