import React from 'react';
import CreateRuleForm from '../../components/CreateRuleForm';

const CreateRulePage: React.FC = () => {
    const handleCreateRule = (values: {
        pattern: string;
        providerId: string;
        existingProviderId: string;
        amount: number;
    }) => {
        // Implement your logic for creating a new rule here.
        console.log('Created a new rule:', values);
    };

    return (
        <div>
            <h1>Create a new rule</h1>
            <CreateRuleForm onSubmit={handleCreateRule} />
        </div>
    );
};

export default CreateRulePage;