import {euro} from "../utils/format"

export function productCard(p) {
    return `
<div class="card mb-2">
<div class="card-body">
<h5>${p.name}</h5>
<span>${euro(p.price)}</span>
</div>
</div>
`;
}