import { HTMLTable } from '@blueprintjs/core';

export interface Rule {
    id: number;
    pattern: string;
    providerId: string;
    existingProviderId: string;
    amount: number;
}

interface RuleTableProps {
    rules: Rule[];
}

const RuleTable = ({ rules }: RuleTableProps) => {
    return (
        <HTMLTable striped>
            <thead>
                <tr>
                    <th>Pattern</th>
                    <th>Provider ID</th>
                    <th>Existing Provider ID</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {rules.map((rule) => (
                    <tr key={rule.id}>
                        <td>{rule.pattern}</td>
                        <td>{rule.providerId}</td>
                        <td>{rule.existingProviderId}</td>
                        <td>{rule.amount}</td>
                    </tr>
                ))}
            </tbody>
        </HTMLTable>
    );
};

export default RuleTable;