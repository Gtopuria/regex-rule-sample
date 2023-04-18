import React, { useState } from 'react';
import { Button, FormGroup, InputGroup, HTMLSelect } from '@blueprintjs/core';

interface CreateRuleFormProps {
    onSubmit: (values: {
        pattern: string;
        providerId: string;
        existingProviderId: string;
        amount: number;
    }) => void;
}

const CreateRuleForm: React.FC<CreateRuleFormProps> = ({ onSubmit }) => {
    const [pattern, setPattern] = useState('');
    const [providerId, setProviderId] = useState('');
    const [existingProviderId, setExistingProviderId] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit({ pattern, providerId, existingProviderId, amount: parseFloat(amount), });
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup label="Pattern" labelFor="pattern-input">
                <InputGroup
                    id="pattern-input"
                    placeholder="Enter pattern"
                    value={pattern}
                    onChange={(e) => setPattern(e.target.value)}
                />
            </FormGroup>
            <FormGroup label="Provider ID" labelFor="provider-id-select">
                <HTMLSelect
                    id="provider-id-select"
                    value={providerId}
                    onChange={(e) => setProviderId(e.target.value)}
                >
                    {/* Replace with your provider options */}
                    <option value="provider-1">Provider 1</option>
                    <option value="provider-2">Provider 2</option>
                </HTMLSelect>
            </FormGroup>
            <FormGroup label="Existing Provider ID" labelFor="existing-provider-id-select">
                <HTMLSelect
                    id="existing-provider-id-select"
                    value={existingProviderId}
                    onChange={(e) => setExistingProviderId(e.target.value)}
                >
                    {/* Replace with your existing provider options */}
                    <option value="existing-provider-1">Existing Provider 1</option>
                    <option value="existing-provider-2">Existing Provider 2</option>
                </HTMLSelect>
            </FormGroup>
            <FormGroup label="Amount" labelFor="amount-input">
                <InputGroup
                    id="amount-input"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </FormGroup>
            <Button type="submit" intent="primary" text="Create Rule" />
        </form>
    );
};

export default CreateRuleForm;
