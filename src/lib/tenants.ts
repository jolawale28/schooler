export const tenants = new Map([
    ['greenfield', { name: 'Greenfield', icon: '😊', createdAt: '5/11/26' }],
    ['loyola', { name: 'Loyola Jesuit College', icon: '🤖', createdAt: '2/10/26' }],
    ['waldorf', { name: 'Waldorf Knoll', icon: '👧', createdAt: '21/09/26' }],
    ['st_lukes', { name: 'Saint Lukes College', icon: '🧑‍🦱', createdAt: '21/09/26' }]
]);

export function getTenant(name: string) {
    return tenants.get(name) ?? null;
}