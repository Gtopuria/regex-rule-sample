import React, { useState, useEffect } from 'react';
import RuleTable, { Rule } from '../../components/RuleTable';
import CreateRuleForm from '../../components/CreateRuleForm';

const RulesPage: React.FC = () => {
    const [rules, setRules] = useState<Rule[]>([]);

    useEffect(() => {
        const fetchRules = async () => {
            const response = await fetch('/api/rules');
            const data: Rule[] = await response.json();
            setRules(data);
        };

        fetchRules();
    }, []);

    const handleCreateRule = (newRule: {
        pattern: string;
        providerId: string;
        existingProviderId: string;
        amount: number;
    }) => {
        // Generate a unique ID for the new rule
        const newRuleId = Math.max(...rules.map((rule) => rule.id)) + 1;

        // Add the new rule to the in-memory list
        setRules([
            ...rules,
            {
                id: newRuleId,
                ...newRule,
            },
        ]);
    };

    return (
        <div>
            <h1>Rules</h1>
            <RuleTable rules={rules} />
            <h2>Create a new rule</h2>
            <CreateRuleForm onSubmit={handleCreateRule} />
        </div>
    );
};

export default RulesPage;