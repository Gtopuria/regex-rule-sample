import type { NextApiRequest, NextApiResponse } from 'next';

// Replace this with your actual data fetching logic
const rules = [
    {
        id: 1,
        pattern: '\\d+',
        providerId: 'provider-1',
        existingProviderId: 'existing-provider-1',
        amount: 100,
    },
    {
        id: 2,
        pattern: '\\[A-Z]+',
        providerId: 'provider-1',
        existingProviderId: 'existing-provider-1',
        amount: 100,
    },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(rules);
}